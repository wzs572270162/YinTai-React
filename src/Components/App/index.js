import React,{Component} from "react";
import Nav_bottom from '../Nav-bottom'
import "./index.css";
// import List from "../List";
import { NavLink } from 'react-router-dom'



class App extends Component{
	constructor(){
		super();
	}

	render(){
		return <div id="App">
			{/*<Header></Header>
			<List></List>*/}
			<Nav_bottom></Nav_bottom>
			{this.props.children}
		</div>
	}
}

export default App;