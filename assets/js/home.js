import React from 'react';
import ReactDOM from 'react-dom';

class Home extends React.Component {
    render() {
        return (
            <div>Hello, World!</div>
        );
    }
}

ReactDOM.render(
    <Home />,
    document.getElementById('home')
);
