import React from 'react';
import CommentBox from './comment_box';
import { mount } from 'enzyme';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from "react-redux";
configure({ adapter: new Adapter() });

import { createStore, applyMiddleware } from 'redux';
import reducers from '../reducers';
const createStoreWithMiddleware = applyMiddleware()(createStore);

import configureMockStore from "redux-mock-store";
const mockStore = configureMockStore();
const store = mockStore({});

describe('CommentBox', () => {

    let component;

    beforeEach(() => {

        component = mount(<Provider store={store}><CommentBox /></Provider>);
    });

    test('has the correct class', () => {
        expect(component.find('.comment-box').length).toBe(1);

    });

    test('has a text area', () => {


        expect(component.find('textarea').exists()).toEqual(true);
    });

    test('has a button', () => {


        expect(component.find('button').exists()).toEqual(true);
    });

    describe('entering some text', () => {

        beforeEach(() => {

            component.find('textarea').simulate('change', {target: {value: 'new comment'}});
        });

        test('shows that text in the textarea', () => {

            expect(component.find('textarea').prop('value')).toEqual('new comment');
        });

        test('when submitted, clears the input', () => {

            component.simulate('submit');
            expect(component.find('textarea').prop('value')).toEqual('');
        });
    });
});
