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
	
	constructor(){
		super();
	}

	componentDidMount(){
		this.setState({
		})
		if(this.props.alllist.length!==0){	
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
				<ReactSwipe className="carousel" swipeOptions={{continuous: true,auto:2000, stopPropagation: true}}>
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
 				<div className="tong">
	 				{
	 					this.props.alllist.templatelist?
	 					<img src={this.props.alllist.templatelist[6].items[0].imgurl}  alt="pic"/>
	 					:[]
	 				}
 				</div>

 			</div>

 			<div className="tong">
 				{
 					this.props.alllist.templatelist?
 					<img src={this.props.alllist.templatelist[8].items[0].imgurl}  alt="pic"/>
 					:[]
 				}
 			</div>

			{/*商城同款*/}
 			<div className="shinee">
 				<div className="shineeTop">

 					<div className="shineeTop_left">
 						{
 							this.props.alllist.templatelist?
 							<img src={this.props.alllist.templatelist[9].items[0].imgurl} alt="pic"/>
 							:[]
 						}
 					</div>
 					<div className="shineeTop_right">
 						
 							{
 								this.props.alllist.templatelist?
 								<img src={this.props.alllist.templatelist[9].items[1].imgurl} alt="pic"/>
 								:[]
 							}
 						
 							{
 								this.props.alllist.templatelist?
 								<img src={this.props.alllist.templatelist[9].items[2].imgurl} alt="pic"/>
 								:[]
 							}
 						
 					</div>
 				</div>
 				<div className="shineeBottom">
 					{
 					 					this.props.alllist.templatelist?
 					 					<ul>
 					 						{
 					 							this.props.alllist.templatelist[10].items.map((item)=>{
 					 								return(
 					 									<li  key={item.itemid} className="shineeBottom_li">
 					 										<img src={item.imgurl} alt="pic"/>
 					 									</li>
 					 								)
 					 							})
 					 						}
 					 					</ul>:[]
 					 				}
 				</div>
 			</div>
 			{/*商城同款*/}
			{/*美丽课堂*/}
			<div className="tong">
				{
					this.props.alllist.templatelist?
					<img src={this.props.alllist.templatelist[12].items[0].imgurl} alt="pic"/>
					:[]
				}
			</div>
 			<div className="events">
 				<div className="eventsTop">

 					<div className="eventsTop_right">
 						{
 							this.props.alllist.templatelist?
 							<img src={this.props.alllist.templatelist[13].items[2].imgurl} alt="pic"/>
 							:[]
 						}
 					</div>
 					<div className="eventsTop_left">
 						
 							{
 								this.props.alllist.templatelist?
 								<img src={this.props.alllist.templatelist[13].items[0].imgurl} alt="pic"/>
 								:[]
 							}
 						
 							{
 								this.props.alllist.templatelist?
 								<img src={this.props.alllist.templatelist[13].items[1].imgurl} alt="pic"/>
 								:[]
 							}
 						
 					</div>
 				</div>
 				<div className="eventsBottom">
 					{
 					 					this.props.alllist.templatelist?
 					 					<ul>
 					 						{
 					 							this.props.alllist.templatelist[14].items.map((item)=>{
 					 								return(
 					 									<li  key={item.itemid} className="eventsBottom_li">
 					 										<img src={item.imgurl} alt="pic"/>
 					 									</li>
 					 								)
 					 							})
 					 						}
 					 					</ul>:[]
 					 				}
 				</div>
 			</div>
 			{/*美丽课堂*/}
			
			{/*奢品馆*/}
			<div className="tong">
				{
					this.props.alllist.templatelist?
					<img src={this.props.alllist.templatelist[15].items[0].imgurl} alt="pic"/>
					:[]
				}
			</div>
 			<div className="shinee">
 				<div className="shineeTop">

 					<div className="shineeTop_left">
 						{
 							this.props.alllist.templatelist?
 							<img src={this.props.alllist.templatelist[16].items[0].imgurl} alt="pic"/>
 							:[]
 						}
 					</div>
 					<div className="shineeTop_right">
 						
 							{
 								this.props.alllist.templatelist?
 								<img src={this.props.alllist.templatelist[16].items[1].imgurl} alt="pic"/>
 								:[]
 							}
 						
 							{
 								this.props.alllist.templatelist?
 								<img src={this.props.alllist.templatelist[16].items[2].imgurl} alt="pic"/>
 								:[]
 							}
 						
 					</div>
 				</div>
 				<div className="shineeBottom">
 					{
 					 					this.props.alllist.templatelist?
 					 					<ul>
 					 						{
 					 							this.props.alllist.templatelist[17].items.map((item)=>{
 					 								return(
 					 									<li  key={item.itemid} className="shineeBottom_li">
 					 										<img src={item.imgurl} alt="pic"/>
 					 									</li>
 					 								)
 					 							})
 					 						}
 					 					</ul>:[]
 					 				}
 				</div>
 			</div>
 			{/*奢品馆*/}
			{/*时尚鞋靴*/}
			<div className="tong">
				{
					this.props.alllist.templatelist?
					<img src={this.props.alllist.templatelist[18].items[0].imgurl} alt="pic"/>
					:[]
				}
			</div>
 			<div className="events">
 				<div className="eventsTop">

 					<div className="eventsTop_right">
 						{
 							this.props.alllist.templatelist?
 							<img src={this.props.alllist.templatelist[19].items[2].imgurl} alt="pic"/>
 							:[]
 						}
 					</div>
 					<div className="eventsTop_left">
 						
 							{
 								this.props.alllist.templatelist?
 								<img src={this.props.alllist.templatelist[19].items[0].imgurl} alt="pic"/>
 								:[]
 							}
 						
 							{
 								this.props.alllist.templatelist?
 								<img src={this.props.alllist.templatelist[19].items[1].imgurl} alt="pic"/>
 								:[]
 							}
 						
 					</div>
 				</div>
 				<div className="eventsBottom">
 					{
 					 					this.props.alllist.templatelist?
 					 					<ul>
 					 						{
 					 							this.props.alllist.templatelist[20].items.map((item)=>{
 					 								return(
 					 									<li  key={item.itemid} className="eventsBottom_li">
 					 										<img src={item.imgurl} alt="pic"/>
 					 									</li>
 					 								)
 					 							})
 					 						}
 					 					</ul>:[]
 					 				}
 				</div>
 			</div>
 			{/*时尚鞋靴*/}
 			{/*运动达人*/}
			<div className="tong">
				{
					this.props.alllist.templatelist?
					<img src={this.props.alllist.templatelist[24].items[0].imgurl} alt="pic"/>
					:[]
				}
			</div>
 			<div className="events">
 				<div className="eventsTop">

 					<div className="eventsTop_right">
 						{
 							this.props.alllist.templatelist?
 							<img src={this.props.alllist.templatelist[25].items[2].imgurl} alt="pic"/>
 							:[]
 						}
 					</div>
 					<div className="eventsTop_left">
 						
 							{
 								this.props.alllist.templatelist?
 								<img src={this.props.alllist.templatelist[25].items[0].imgurl} alt="pic"/>
 								:[]
 							}
 						
 							{
 								this.props.alllist.templatelist?
 								<img src={this.props.alllist.templatelist[25].items[1].imgurl} alt="pic"/>
 								:[]
 							}
 						
 					</div>
 				</div>
 				<div className="eventsBottom">
 					{
 					 					this.props.alllist.templatelist?
 					 					<ul>
 					 						{
 					 							this.props.alllist.templatelist[26].items.map((item)=>{
 					 								return(
 					 									<li  key={item.itemid} className="eventsBottom_li">
 					 										<img src={item.imgurl} alt="pic"/>
 					 									</li>
 					 								)
 					 							})
 					 						}
 					 					</ul>:[]
 					 				}
 				</div>
 			</div>
 			{/*运动达人*/}
			{/*精选好货*/}
			<div className="tong">
				{
					this.props.alllist.templatelist?
					<img src={this.props.alllist.templatelist[31].items[0].imgurl} alt="pic"/>
					:[]
				}
			</div>
 			<div className="xie">
 					{
		            		this.props.alllist.templatelist?

			            	<div>
				            	{
			            		this.props.alllist.templatelist.map((item,index)=>{
			            			if(index>=32&index<73){
										{
											item.items.map((val)=>{
												console.log(val.imgurl)
			            						return <img src={val.imgurl}/>

						            			
					            			})
					            		}

			            			}

			            		})
			            	}
			            	</div>:[]
	           		}
 				
 			</div>
 			{/*精选好货*/}
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

