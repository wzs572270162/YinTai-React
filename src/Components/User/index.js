import React,{Component} from "react";
import "./index.css";
import User1 from "./User1"
import User2 from "./User2"
import axios from "axios"


class User extends Component{
	constructor(){
		super();
		this.state={
			bbb:false,
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
	    			
	    			bbb:true
	    		})
	    	}

	    })
	}


	handle(){
		console.log("传递1111")
		this.setState({
			aaa:true,
			bbb:false
		
		});
		
		console.log("传递属性")
	}
	handle1(){
		this.setState({
			aaa:false,
			bbb:true
		
		});
		console.log("传递2222")
		
	}

	render(){
		return <div id="User">

				<div className={this.state.bbb?"isblock":"isnone"}>
					<User1 event={this.handle.bind(this)} ppp={this.props}></User1>
				</div>


				<div className={this.state.aaa?"isblock":"isnone"}>

					<User2 event={this.handle1.bind(this)} prop={this.props}></User2>

				</div>

			</div>
	}
}

export default User;