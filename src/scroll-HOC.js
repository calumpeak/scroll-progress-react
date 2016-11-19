'use strict';

import React, { Component, PropTypes } from 'react';

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
        window.removeEventListner('scroll', this.handleScroll);
    }

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
