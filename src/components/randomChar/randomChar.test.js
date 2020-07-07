import React from 'react';
import RandomChar from './randomChar';
import {shallow} from 'enzyme';

describe('Testing <RandomChar/>', () => {
    const char = shallow(<RandomChar/>);

    describe('Testing snapshot and state', () => {
        it('RandomChar have rendered correctly', () => {
            expect(char).toMatchSnapshot();
        });
        // Тестирование стейта, который мы сами и передали (безполезное тестирование)
        // it('should render a title', () => {
        //     const wrapper = shallow(<Document title="Some title"/>);
        //     expect(wrapper.prop('title')).toEqual('Some title')
        // })
    
        // Тестирование стейта из randomChar (char, loading, error)
        it('RandomChar state "char" is empty object', () => {
            expect(char.state().char).toBeObject();
        });
    
        it('RandomChar state "loading" is true', () => {
            expect(char.state().loading).toBeTruthy();
        });
    
        it('RandomChar state "error" is false', () => {
            expect(char.state().error).toBeFalsy();
        });
    });

    // Тестируем функции и обработчики событий
    describe('Handler test', () => {
        it('testing onCharLoaded', () => {
            char.instance().onCharLoaded();
            expect(char.state().loading).toBeFalsy();
        });

        it('testing onError', () => {
            char.instance().onError();
            expect(char.state().loading).toBeFalsy();
            expect(char.state().error).toBeTruthy();
        });

        it('testing updateChar', () => {
            char.instance().updateChar();
            expect(char.state().loading).toBeFalsy();
        });
    });  
});