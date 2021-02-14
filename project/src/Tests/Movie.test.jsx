import React from 'react';
import {mount} from 'enzyme';
import Movie from '../Components/Movie'

describe('Movie.jsx tests', () => {
    test('Renders without crashing', () => {
        const wrapper = createWrapper('testTitle', 'testYear', 'testPoster');
    });
    
    test('Has proper title.', () => {
        const movieTitle = 'testTitle';
        const wrapper = createWrapper(movieTitle, 'testYear', 'testPoster');
        const title = wrapper.find('.title');
        expect(title.length).toBe(1);
        expect(title.at(0).text()).toBe(movieTitle);
    })

    test('Has proper year.', () => {
        const movieYear = '2021';
        const wrapper = createWrapper('testTitle', movieYear, 'testPoster');
        const year = wrapper.find('.year');
        expect(year.length).toBe(1);
        expect(year.at(0).text()).toBe(movieYear);
    })

    test('Has proper poster.', () => {
        const moviePoster = 'testPoster';
        const wrapper = createWrapper('testTitle', 'testYear', moviePoster);
        const poster = wrapper.find('.poster');
        expect(poster.length).toBe(1);
        expect(poster.find('img').prop('src')).toBe(moviePoster);
    })
});

function createWrapper(title, year, poster){
    const movie = <Movie 
        Title={title} 
        Year={year}
        Poster={poster} />
    const wrapper = mount(movie);
    return wrapper;
}