import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{
    render(){
        return <h1>{this.props.txt}</h1>;
    }
}

App.propTypes ={
    txt:React.PropTypes.string,
    cat:React.PropTypes.number.isRequired
}

App.defaultProps = {
    txt:'This is the default value'
}

ReactDOM.render(
    <App txt="This is the props value" cat={5}/>,
    document.getElementById('app')
);