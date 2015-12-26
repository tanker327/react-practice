import React from 'react';
import ReactDOM from 'react-dom';
import uniqueid from 'uniqueid';

class App extends React.Component {
    render() {
        return <div>Done</div>;
    }
}


class RadioButton extends React.Component {
    constructor(props){
        super(props);
        this.state.id = this.props.id?this.props.id:uniqueid('radio-');
        //this.state.checked = this.props.checked?this.props.checked:this.state.checked;
    }
    static propTypes = {
        className: React.PropTypes.string,
        label: React.PropTypes.string,
        checked: React.PropTypes.bool,
        id: React.PropTypes.string,
        update: React.PropTypes.func.isRequired,
        name: React.PropTypes.string
    }
    static defaultProps = {
        className:'radio',
        id: null,
        checked: false,
        label: ''
    }
    state = {
        id:null,
        checked:false
    }

    checkChangeHandler = (e)=>{
        console.log('check change handler');
        let checked = e.target.checked;
        this.props.update(this.props.label);
        this.setState({
            checked: checked
        });
    }
    render() {
        return (
            <div className={this.props.className}>
                <input type="radio" onChange={this.checkChangeHandler} name={this.props.name}
                       checked={this.state.checked} id={this.state.id}/>
                <span>{this.props.label}</span>
            </div>
        );
    }
}

class RadioButtonList extends React.Component {

    static propsTypes = {
        choices: React.PropTypes.array.isRequired
    }
    static defaultProps = {
        choices: ['aaa', 'bbb', 'cccc']
    }
    state = {
        id: uniqueid('multiple-choice-'),
        value:''
    }
    update = (value) => {
        console.log('update handler', value);
        this.setState({
            value:value
        })
    }

    renderRadioButtons() {
        return this.props.choices.map((item, i)=> {
            return <RadioButton label={item} update={this.update} key={item}/>
        });
    }

    render() {
        return <div id={this.state.id} >
            current selected value : {this.state.value} <br/>
            {this.renderRadioButtons()}
        </div>;
    }

}

const Wrapper = () => {
    let items = ['1111', '2222', '3333', '5555', '7777'];
    return new RadioButtonList({choices: items});
}

export default RadioButtonList;