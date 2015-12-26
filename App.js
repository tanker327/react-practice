import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component {

    state={value:88}
    static defaultProps = {value:99}
    update(){
        //let value =this.state.value;
        this.setState({ value : ++this.state.value });
    }

    //getDefaultProps(){// only works for React.createClass
    //    console.log('get default props');
    //}
    //getInitialState(){// only works for React.createClass
    //    console.log('get initial state');
    //}

    componentWillMount(){

        console.log(`component will mount, state value : ${this.state.value}, props value : ${this.props.value}`);
    }
    componentDidMount(){
        console.log('component did mount');
    }

    componentWillUnmount(){
        console.log('Component will unmount !')
    }
    render() {
        console.log(`render....state value : ${this.state.value}, props value : ${this.props.value}`)
        return <button onClick={this.update.bind(this)}>{this.state.value}</button>;
    }
}

class Wrapper extends React.Component{
    mount(){
        ReactDOM.render(<App />, document.getElementById('a'));
    }
    unmount(){
        ReactDOM.unmountComponentAtNode(document.getElementById('a'));
    }
    render(){
        return (
            <div>
                <button onClick={this.mount}>mount</button>
                <button onClick={this.unmount}>unmount</button>
                <div id="a"></div>
            </div>
        );
    }
}

export default Wrapper;