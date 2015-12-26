import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    update = (e) => {
        this.setState({
            value:e.target.value
        });
    }
    render() {
        return (
            <div>
                <input type="text" onChange={this.update} />
                <Comp {...this.state} />
                <Comp {...this.state} />
                <Comp {...this.state} />
                <Comp {...this.state} />
            </div>
        );
    }
}


const Comp = (props)=> {
    return (
        <div>{props.value}</div>
    );
}
ReactDOM.render(<App />, document.getElementById('app'));


export default App;