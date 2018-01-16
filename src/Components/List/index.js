import React,{Component} from "react";
import {connect} from "react-redux"
import "./index.css";
class List extends Component{
	constructor(){
		super();
		this.state={
			aa:0
		}
		
	}
	
	componentDidMount(){

			setTimeout(()=>{
				console.log(this.props.datalist)
				console.log(this.props.datalist.bannerlist)
			},3000)		
	}


	render(){
		return <div>
					{	this.props.datalist.templatelist?
						<div className='dfdf'>
			            	{
			            		this.props.datalist.templatelist.map((item,index)=>{
			            			if(index>=4&index<7){
										{
											
					            				item.items.map((val)=>{
					            					console.log(val.itemid);
					            					console.log(val.imgurl);
			            							return (
							            				<div key={val.itemid}>

									            			<img src={val.imgurl} alt="pic" />
									            			{val.itemid}
																		
							            				</div>
						            				)	

					            				})
					            		}

			            			}

			            		})
			            	}
		            	</div>
		            	:[]
		            }
		            {this.props.datalist.pageid}
		            
		</div>
	}



}

export default connect(
	(state)=>{
		return{
			datalist:state
		}

	},

	null

)(List);