import React,{Component} from "react";

import "./index.css";


class App extends Component{
	constructor(){
		super();
	}

	render(){
		return <div id="App">
			{/*<Header></Header>
			<List></List>*/}
			{this.props.children}
		</div>
	}
}

export default App;