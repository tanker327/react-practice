import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(props) {
        super(props)
    }

    state = {
        txt:'default value'
    }

    update = (e)=> {
        this.setState({txt: e.target.value})
    }

    render() {
        return (
            <div>
                <input type="text" onChange={this.update}/>
                <h1>{this.state.txt}</h1>
            </div>
        );
	}
}

ReactDOM.render(<App />, document.getElementById('app'));


export default App;