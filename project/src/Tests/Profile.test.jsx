import React from 'react';
import {rest} from 'msw';
import {setupServer} from 'msw/node'
import {render, fireEvent, screen} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import ProfileTabController from '../Components/ProfileTab/ProfileTabController'
import {changeAndVerify} from '../Utils/TestUtils'

const server = setupServer(
    rest.post('http://localhost:3001/addFriend', (req, res, ctx) => {
        return res(ctx.json({username: 'testUsername', friendUsername: 'testFriend'}));    
    }),
    rest.get('http://localhost:3001/getUser', (req, res, ctx) => {
            return res(ctx.json(null));    
    }),
    rest.get('http://localhost:3001/getFriends', (req, res, ctx) => {
            return res(ctx.json([{username:'testUsername', friendUsername:'abc'}, {username: 'testUsername', friendUsername:'abcde'}]));    
    })
)

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('Renders without crashing', () => {
    render(<ProfileTabController/>);
});

test('Invalid friend username (same as current user)', async () => {
    render(<ProfileTabController username={'testUsername'}/>);
    changeAndVerify('Friend Username', 'testUsername');
    fireEvent.click(screen.getByText('Add'));
    await screen.findByText('You cannot follow yourself');
});

test('Invalid friend username (empty username)', async () => {
    render(<ProfileTabController username={'testUsername'}/>);
    changeAndVerify('Friend Username', '');
    fireEvent.click(screen.getByText('Add'));
    await screen.findByText('Please enter a valid username');
});

test('Invalid friend username (user does not exist)', async () => {
    render(<ProfileTabController username={'testUsername'}/>);
    changeAndVerify('Friend Username', 'abcd');
    fireEvent.click(screen.getByText('Add'));
    await screen.findByText(`User 'abcd' does not exist`);
});

test('Invalid friend username (already friends)', async () => {
    server.use(
        rest.get('http://localhost:3001/getUser', (req, res, ctx) => {
            return res(ctx.json({username: 'abcde', password: 'testPassword'}));    
        })
    )
    render(<ProfileTabController username={'testUsername'}/>);
    changeAndVerify('Friend Username', 'abcde');
    fireEvent.click(screen.getByText('Add'));
    await screen.findByText(`You are already following abcde`);
});

test('Valid friend username', async () => {
    server.use(
        rest.get('http://localhost:3001/getUser', (req, res, ctx) => {
            return res(ctx.json({username: 'abcdef', password: 'testPassword'}));    
        })
    )
    render(<ProfileTabController username={'testUsername'}/>);
    changeAndVerify('Friend Username', 'abcdef');
    fireEvent.click(screen.getByText('Add'));
    await screen.findByText(`You are now following abcdef`);
});

