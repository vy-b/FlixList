import React from 'react';
import {rest} from 'msw';
import {setupServer} from 'msw/node'
import {render, fireEvent, screen} from '@testing-library/react'
import {BrowserRouter as Router} from 'react-router-dom'
import '@testing-library/jest-dom/extend-expect'
import LoginController from '../Components/LoginController'

const server = setupServer(
    rest.get('http://localhost:3001/getUser', (req, res, ctx) => {
        return res(ctx.json({username: 'testUsername', password: 'testPassword'}));    
    })
)

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('Renders without crashing', () => {
    render(<Router><LoginController/></Router>);
})

test('Can change form fields', () => {
    render(<Router><LoginController/></Router>);
    changeAndVerify('examplename123', 'testUsername');
    changeAndVerify('Password', 'testPassword');
})

test('Wrong password', async () => {
    let username = undefined;
    const setUsername = (name) => {
        username = name;
    }
    render(<Router><LoginController setUsername={setUsername}/></Router>);
    changeAndVerify('examplename123', 'testUsername');
    changeAndVerify('Password', 'pass');
    fireEvent.click(screen.getByText('Login'));
    await screen.findByText('wrong password');
    expect(username).toBe(undefined);
})

test('No username match', async () => {
    server.use(
        rest.get('http://localhost:3001/getUser', (req, res, ctx) => {
            return res(ctx.json(null));    
        })
    )
    let username = undefined;
    const setUsername = (name) => {
        username = name;
    }
    render(<Router><LoginController setUsername={setUsername}/></Router>);
    changeAndVerify('examplename123', 'testUser');
    changeAndVerify('Password', 'pass');
    fireEvent.click(screen.getByText('Login'));
    await screen.findByText('user does not exist');
    expect(username).toBe(undefined);
})

test('Username updated after successful login', async () => {
    let username = undefined;
    const setUsername = (name) => {
        username = name;
    }
    render(<Router><LoginController setUsername={setUsername}/></Router>);
    changeAndVerify('examplename123', 'testUsername');
    changeAndVerify('Password', 'testPassword');
    fireEvent.click(screen.getByText('Login'));
    await screen.findByText('login successful');
    expect(username).toBe('testUsername');
})

function changeAndVerify(placeholderText, newValue){
    const input = screen.getByPlaceholderText(placeholderText);
    fireEvent.change(input, {target: {value: newValue}});
    expect(input.value).toBe(newValue);
}