'use strict';

import React, { Component } from 'react';

/**
 * Scroll Higher-Order-Component/Function-As-Child-Component
 * Returns a position property to it's children as the user scrolls
 *
 * @class Scroll
 * @prop {Node} children
 * @return {Position}
 */
class Scroll extends Component {
    constructor (props) {
        super(props);

        this.state = {
            position: document.body.scrollTop
        };

        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount () {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount () {
        window.removeEventListener('scroll', this.handleScroll);
    }

    /**
     * Sets the current scroll position to state
     *
     * @method handleScroll
     * @param {Object} event syntetic-event
     */
    handleScroll (event) {
        this.setState({
            position: event.srcElement.body.scrollTop
        });
    }

    render () {
        const { position } = this.state;

        return (
            <div>{ this.props.children(position) }</div>
        );
    }
}

export default Scroll;
