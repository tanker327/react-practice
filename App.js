import React from 'react';
import ReactDOM from 'react-dom';

class Comp extends React.Component{
    constructor(props){ // same as componentWillMount
        super(props);
        this.state = {
            myState:'default state'
        };
    }
    update = (e)=>{ // get 'this' bind without set in contructor
        console.log("hello "+ this.getValue());
    }
    getValue(){
        return "get value";
    }

    static defaultProps = {  //set default props
        param1:'default  props value'
    }

    static propTypes = {  // set proptype
        num:React.PropTypes.number.isRequired
    }

    state = {} //set state

    render(){
        return <div onClick={this.update} >{this.props.param1}:{this.props.test}:{this.state.myState}</div>;
    }

}

class App extends React.Component{

    render(){
        let props ={
            //param1:'parameters',
            test:'test',
            num:1
        }
        return  <Comp {...props} />;//Destructing and spread attributes
    }
}


let app = ReactDOM.render(<App />, document.getElementById('app'));



