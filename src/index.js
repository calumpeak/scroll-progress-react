'use strict';

import React, { Component, PropTypes } from 'react';
import Scroll from './scroll-HOC';
import { assign } from 'lodash.assign';

const progressStyle = {
    border: 'none',
    backgroundColor: 'transparent',
    appearance: 'none'
};

class ScrollProgress extends Component {
    constructor (props) {
        super(props);

        this.state = {
            max: 0
        };
    }

    componentDidMount () {
        this.setProgressMax();
    }

    setProgressMax () {
        this.setState({
            max: document.body.clientHeight - window.innerHeight
        });
    }

    render () {
        const { max } = this.state;
        const { style, className } = this.props;

        return (
            <Scroll>
                {position =>
                    <progress
                        className = 'scroll-progress-react'
                        style = {assign({}, progressStyle, style)}
                        value = {position}
                        max = {max}
                    />
                }
            </Scroll>
        );
    }
}

ScrollProgress.propTypes = {
    style: PropTypes.object
};

export default ScrollProgress;
