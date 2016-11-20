# scroll-progress-react

React component that tracks a users progress through a page as they scroll.

###Getting Started
```
$ npm install scroll-progress-react
```

###In React
```
import React, { Component } from 'react';
import ScrollProgress from 'scroll-progress-react`;

class Demo extends Component {
  render () {
    return (<ScrollProgress />);
  }
}

export default Demo;
```
###Props

  - style: {Object} Override inline styles
  - className: Default `.scroll-progress-react`
  
Due to the nature of HTML5 progress bars, prefer to use CSS files select by the above class name. 
