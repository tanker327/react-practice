import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{
    render(){
        return <h1>{this.props.txt}</h1>;
    }
}

ReactDOM.render(
    <App txt="This is the props value" />,
    document.getElementById('app')
);