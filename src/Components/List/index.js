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
		// axios.get('/Services/Proxy.ashx?r=201801131045&os=HTML5&client_v=1.0.0&pageid=104001&previewtime=0&methodName=products.template.getpage_1.0.0&method=products.template.getpage&apptype=10&ver=1.0.0&pageindex=1').then((res)=>{
		// 	console.log(res);
		// 	this.setState({
		// 		alllist:res.data.data,
		// 		looplist:res.data.data.bannerlist,
		// 		templatelist:res.data.data.templatelist[0].items,
		// 		imageulr:res.data.data.templatelist[1].items[0].imgurl,

		// 	});
		// 	console.log(this.state.alllist);
		// 	console.log(this.state.alllist.templatelist[0].items)
		// });
		
		
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