import React,{Component} from "react";
import Header from "../Header";
import "./index.css";
import List from "../List";
class Home extends Component{
	render(){
		return <div>
			<Header></Header>
			<List></List>
		</div>
	}
}


export default Home;