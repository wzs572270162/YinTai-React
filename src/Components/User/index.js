import React,{Component} from "react";
import "./index.css";
import User1 from "./User1"
import User2 from "./User2"
import axios from "axios"


class User extends Component{
	constructor(){
		super();
		this.state={
			show:true
		}
	}	

	componentWillMount() {
	    axios.get(`/users/judge`).then((res)=>{
	    	console.log(res);
	    	console.log(res.data.code)
	    	if(res.data.code==1){
	    		this.setState({
	    			show:false
	    		})
	    	}

	    })
	}

	render(){
		return <div id="User">
				{
					this.state.show?<User1></User1>:<User2></User2>
				}
				
			</div>
	}
}

export default User;