import React from 'react';
import {mount} from 'enzyme';
import Movie from '../Components/Movie'

describe('Movie.jsx tests', () => {
    test('Renders without crashing', () => {
        const wrapper = createWrapper('testTitle', 'testYear', 'testPoster','testPlot','testCast','testRuntime','testGenre','testActors');
    });
    
    test('Has proper title.', () => {
        const movieTitle = 'testTitle';
        const wrapper = createWrapper(movieTitle, 'testYear', 'testPoster','testPlot','testCast','testRuntime','testGenre','testActors');
        const title = wrapper.find('.title');
        expect(title.length).toBe(1);
        expect(title.at(0).text()).toBe(movieTitle);
    })

    test('Has proper year.', () => {
        const movieYear = '2021';
        const wrapper = createWrapper('testTitle', movieYear, 'testPoster','testPlot','testCast','testRuntime','testGenre','testActors');
        const year = wrapper.find('.year');
        expect(year.length).toBe(1);
        expect(year.at(0).text()).toBe(movieYear);
    })

    test('Has proper poster.', () => {
        const moviePoster = 'testPoster';
        const wrapper = createWrapper('testTitle', 'testYear', moviePoster,'testPlot','testCast','testRuntime','testGenre','testActors');
        const poster = wrapper.find('.poster');
        expect(poster.length).toBe(1);
        expect(poster.find('img').prop('src')).toBe(moviePoster);
    })

    test('Has proper plot.', () => {
        const moviePlot = 'testPlot';
        const wrapper = createWrapper('testTitle', 'testYear', 'testPoster',moviePlot,'testCast','testRuntime','testGenre','testActors');
        const plot = wrapper.find('.plot');
        expect(plot.length).toBe(1);
        expect(plot.at(0).text()).toBe(moviePlot);
    })

    test('Has proper cast.', () => {
        const movieCast = 'testCast';
        const wrapper = createWrapper('testTitle', 'testYear', 'testPoster','testPlot',movieCast,'testRuntime','testGenre','testActors');
        const cast = wrapper.find('.cast');
        expect(cast.length).toBe(1);
        expect(cast.at(0).text()).toBe(movieCast);
    })

    test('Has proper runtime.', () => {
        const movieRuntime = '2021';
        const wrapper = createWrapper('testTitle', 'testYear', 'testPoster','testPlot','testCast', movieRuntime,'testGenre','testActors');
        const runtime = wrapper.find('.runtime');
        expect(runtime.length).toBe(1);
        expect(runtime.at(0).text()).toBe(movieRuntime);
    })
});

function createWrapper(title, year, poster){
    const movie = <Movie 
        title={title} 
        year={year}
        poster={poster} />
    const wrapper = mount(movie);
    return wrapper;
}