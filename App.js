import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    state = {
        red:0,
        blue:0,
        green:0
    }

    update= (e)=>{
        this.setState({
            red:ReactDOM.findDOMNode(this.refs.red.refs.inp).value,
            blue:ReactDOM.findDOMNode(this.refs.blue.refs.inp).value,
            green:ReactDOM.findDOMNode(this.refs.green.refs.inp).value
        });
    }

    render() {
        return <div>
            {this.state.red}:{this.state.blue}:{this.state.green}<br/>
            <Slider ref="red" update={this.update} value={this.state.red} />
            <Slider ref="blue" update={this.update} value={this.state.blue} />
            <Slider ref="green" update={this.update} value={this.state.green} />
        </div>;
    }
}

class Slider extends  React.Component {

    render(){
        return (
            <div>
                <input ref="inp" type="range" min="0" max="255" value={this.props.value} onChange={this.props.update}/>
                <span>{this.props.value}</span>
                <br/>
            </div>
        );
    }
}



ReactDOM.render(<App />, document.getElementById('app'));


export default App;