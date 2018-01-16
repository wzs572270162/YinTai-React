import React,{Component} from "react";
import { SearchBar,} from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';
import axios from "axios";
import { NavLink } from 'react-router-dom'

import ReactSwipe from 'react-swipe';
import {connect} from "react-redux"
import "./index.css";
import logo from "../../assets/pic/newlogo.png"
import "../../assets/font/iconfont.css"
class Header extends Component{
	
	

	componentDidMount(){
		
		if(this.props.alllist.length!==0){
			console.log("asdfasdfasdqr");		
		}else{
			this.props.getList();
			return;
			
		}
		
	}

	render(){
		return <div id="Headerall">
		
			<div id="box">
				<div id="Header">
					<img src={logo} className="logo" alt="logo"/>
					<SearchBar
				        placeholder="搜索商品or品牌" className="search"
				        ref={ref => this.manualFocusInst = ref}
					/>
					<NavLink to="/regist"><i className="iconfont icon-geren9"></i></NavLink>
				</div>

			</div>
			<div id="box1">
			</div>

			{	
				this.props.alllist.bannerlist?
				<ReactSwipe className="carousel" swipeOptions={{continuous: true,auto:2000, stopPropagation: true}}
				>
				 	{/*key={this.state.looplist.length}*/}
	                {
	                	/*this.state.looplist.map(item=>
	                		<img src={item.imgurl} key={item.id} />)*/
	                }
	                {
	                	this.props.alllist.bannerlist.map(item=>
	                		<img src={item.imgurl} key={item.id} alt="pic"/>)
	                }
	            </ReactSwipe>:[]
	        }



            
	           <div className="tu">
	         
		            	{
		            		this.props.alllist.templatelist?
			            	<ul>
				            	{
				            		this.props.alllist.templatelist[0].items.map((item)=>{
				            			console.log(item.itemid)
				            			return(
				            				<li key={item.itemid}>
						            			<img src={item.imgurl}  alt="pic"/>
						            			{item.imgname}
				            				</li>
				            			)
				            		})
				            	}
			            	</ul>:[]
	           		}
	           </div>


        	

        	{
        		this.props.alllist.templatelist?
             		<img src={this.props.alllist.templatelist[1].items[0].imgurl} className="punish" alt="pic"/>:[]
         	}
 
 {/*        	{this.props.alllist.pageid}*/}

 			<div className="box"></div>

 			<div>
 				{
 					this.props.alllist.templatelist?
 					<img src={this.props.alllist.templatelist[3].items[0].imgurl} className="title" alt="title"/>:[]
 				}

 				{
 					this.props.alllist.templatelist?
 					<ul>
 						{
 							this.props.alllist.templatelist[4].items.map((item)=>{
 								return(
 									<li  key={item.itemid} className="first">
 										<img src={item.imgurl} alt="pic"/>
 									</li>
 								)
 							})
 						}

 					</ul>:[]
 				}

 				{
 					this.props.alllist.templatelist?
 					<ul>
 						{
 							this.props.alllist.templatelist[5].items.map((item)=>{
 								return(
 									<li  key={item.itemid} className="first">
 										<img src={item.imgurl} alt="pic"/>
 									</li>
 								)
 							})
 						}

 					</ul>:[]
 				}
 				{
 					this.props.alllist.templatelist?
 					<img src={this.props.alllist.templatelist[6].items[0].imgurl} className="tong" alt="pic"/>
 					:[]
 				}

 			</div>




            

		
		</div>
	}
}

export default connect(
	(state)=>{
		return{
			alllist:state.AlllistReducer
		}

	},

	{
		getList:()=>{

		 	return (dispatch)=>{
		 		axios.get("/Services/Proxy.ashx?r=201801131045&os=HTML5&client_v=1.0.0&pageid=104001&previewtime=0&methodName=products.template.getpage_1.0.0&method=products.template.getpage&apptype=10&ver=1.0.0&pageindex=1").then(res=>{
					dispatch({
						type:"CHANGE_LIST",
						payload:res.data.data
					})
					console.log(res)
			    })

		 	}

		},
	}


)(Header);

