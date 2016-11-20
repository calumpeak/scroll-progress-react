import React from 'react';
import { expect } from 'chai';
import { render, mount } from 'enzyme';

import ScrollProgress from '../../src/index.js';

describe('<ScrollProgress />', () => {
    it('should render to the dom', () => {
        const component = render(<ScrollProgress />);
        expect(component.find('.scroll-progress-react').length).to.equal(1);
    });

    it('should carry a "max" state', () => {
        const component = mount(<ScrollProgress />);
        expect(component.state().hasOwnProperty('max')).to.equal(true);
    });

    it('should be able to have the class name overridden', () => {
        const component = mount(<ScrollProgress className = 'fooBar' />);
        expect(component.find('.fooBar').length).to.equal(1);
    });
});
