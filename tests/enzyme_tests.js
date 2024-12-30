import React from 'react';
import { shallow } from 'enzyme';
import App from '../src/App';

describe('Selenium WebDriver Tests', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<App />);
    });

    it('should perform a Google search', () => {
        const searchBox = wrapper.find('input[name="q"]');
        searchBox.simulate('change', { target: { value: 'OpenAI' } });
        searchBox.simulate('keyDown', { key: 'Enter' });
        expect(wrapper.find('title').text()).toContain('OpenAI');
    });

    it('should check the page title', () => {
        wrapper.setProps({ url: 'https://www.example.com' });
        expect(wrapper.find('title').text()).toBe('Example Domain');
    });
});
