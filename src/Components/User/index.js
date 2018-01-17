import React,{Component} from "react";
import "./index.css";
import User1 from "./User1"
import User2 from "./User2"
import axios from "axios"


class User extends Component{
	constructor(){
		super();
		this.state={
			show:false,
			aaa:false
		}
	}	

	componentDidMount() {
	    axios.get(`/users/judge`).then((res)=>{
	    	console.log(res);
	    	console.log(res.data.code)
	    	if(res.data.code==1){
	    		this.setState({
	    			
	    			aaa:true
	    		})
	    	}else{
	    		this.setState({
	    			
	    			show:true
	    		})
	    	}

	    })
	}

	render(){
		return <div id="User">


				<div className={this.state.show?"isblock":"isnone"}>
					<User1></User1>
				</div>


				<div className={this.state.aaa?"isblock":"isnone"}>
					<User2></User2>
				</div>

			</div>
	}
}

export default User;