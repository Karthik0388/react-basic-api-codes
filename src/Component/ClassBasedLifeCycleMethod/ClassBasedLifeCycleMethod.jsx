import React, { Component } from 'react'

class ClassBasedLifeCycleMethod extends Component {
    state = {
        count:1
    }
    componentDidMount() {
        document.title = this.state.count;
        console.log(this.state.count + " " + "Rendered Times");
        console.log("Coming from component Did Mount");
    }

    componentDidUpdate() {
         document.title = this.state.count;
         console.log(this.state.count + " " + "Rendered Times");
         console.log("Coming from component Did update");
    }
    componentWillUnmount() {
         document.title = "No data";
         console.log("Coming from component Will Unmount");
    }
    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={() => this.setState({count:this.state.count+1})}>Submit{ this.state.count}</button>
            </div>
        )
    }
}
export default ClassBasedLifeCycleMethod;
