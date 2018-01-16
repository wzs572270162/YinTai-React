import React,{Component} from "react";
import Header from "../Header";
import "./index.css";
import List from "../List";
import Nav_bottom from "../Nav-bottom";
class Home extends Component{
	render(){
		return <div>
			<Header></Header>
			<List></List>
			<Nav_bottom></Nav_bottom>
		</div>
	}
}


export default Home;