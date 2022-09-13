import React from 'react';
import CommentList from './comment_list';
import { mount } from 'enzyme';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from 'redux';
import reducers from '../reducers';

configure({ adapter: new Adapter() });
const createStoreWithMiddleware = applyMiddleware()(createStore);

describe('CommentList', () => {

    let component;

    beforeEach(() => {

        const initialState = { comments: ['New Comment', 'New Other Comment'] };
        component = mount(<Provider store={createStoreWithMiddleware(reducers, initialState)}><CommentList /></Provider>);
    });

    test('shows an LI for each comment', () => {

        expect(component.find('li').length).toBe(2);
    });

    test('shows each comment that is provided', () => {

        expect(component.find('li').at(0).text()).toEqual('New Comment');
        expect(component.find('li').at(1).text()).toEqual('New Other Comment');
    });

});