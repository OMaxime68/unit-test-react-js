import React from 'react';
import App from './App';
import { mount } from 'enzyme';

import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers';

configure({adapter: new Adapter()});
const createStoreWithMiddleware = applyMiddleware()(createStore);

describe('App', () => {

    let component;

    beforeEach(() => {
        component = mount(<Provider store={createStoreWithMiddleware(reducers)}><App /></Provider>);
    });

    test('shows comment box', () => {

        expect(component.find('.comment-box').length).toBe(1);
    });

    test('shows comment list', () => {
        expect(component.find('.comment-list').length).toBe(1);
    });
});

