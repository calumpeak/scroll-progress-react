'use strict';

import React, { Component, PropTypes } from 'react';
import Scroll from './scroll-HOC';
import assign from 'lodash.assign';

const progressStyle = {
    border: 'none',
    backgroundColor: 'transparent',
    appearance: 'none'
};

/**
 * A Progress bar that is determined by a users scroll position on the page
 *
 * @class ScrollProgress
 * @prop {Object} style inline style override for progress bar
 * @return {Component}
 */
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

    /**
     * Sets the 'max' value that the progress bar accepts
     * Based on the body height - window height
     *
     * @for ScrollProgress
     * @method setProgressMax
     */
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
                        className = {className ||'scroll-progress-react'}
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
    style: PropTypes.object,
    className: PropTypes.string
};

export default ScrollProgress;
