import React,{Component} from "react";
import { SearchBar,} from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';
import axios from "axios";
import { Link } from "react-router-dom"
import ReactSwipe from 'react-swipe';
import {connect} from "react-redux"
import "./index.css";
import logo from "../../assets/pic/newlogo.png"
import "../../assets/font/iconfont.css"
class Header extends Component{
	
	constructor() {
		super();
	    this.state={
	    	looplist:[],
	    	templatelist:[],
	    	imageulr:null,
	    	alllist:[]
	    }
	}

	componentDidMount(){
		// axios.get('/Services/Proxy.ashx?r=201801131045&os=HTML5&client_v=1.0.0&pageid=104001&previewtime=0&methodName=products.template.getpage_1.0.0&method=products.template.getpage&apptype=10&ver=1.0.0&pageindex=1').then((res)=>{
		// 	console.log(res);
		// 	this.setState({
		// 		alllist:res.data.data,
		// 		// looplist:res.data.data.bannerlist,
		// 		templatelist:res.data.data.templatelist[0].items,
		// 		imageulr:res.data.data.templatelist[1].items[0].imgurl,

		// 	});
		// 	console.log(this.state.alllist);
		// 	console.log(this.state.alllist.templatelist[0].items)
		// });
		if(this.props.looplist.length){
			return;
		}
		this.props.getList()
	}

	render(){
		return <div id="Headerall">
			<div id="box">
				<div id="Header">
					<img src={logo} className="logo"/>
					<SearchBar
				        placeholder="搜索商品or品牌" className="search"
				        ref={ref => this.manualFocusInst = ref}
					/>
					<i className="iconfont icon-geren9"></i>
				</div>

			</div>
			<div id="box1"></div>

			{	
				this.props.looplist.bannerlist?
				<ReactSwipe className="carousel" swipeOptions={{continuous: true,auto:2000, stopPropagation: true}}
				>
				 	{/*key={this.state.looplist.length}*/}
	                {
	                	/*this.state.looplist.map(item=>
	                		<img src={item.imgurl} key={item.id} />)*/
	                }
	                {
	                	this.props.looplist.bannerlist.map(item=>
	                		<img src={item.imgurl} key={item.id} />)
	                }
	            </ReactSwipe>:[]
	        }



            {	
	           <div className="tu">
	         
	            	{
		            	<ul>
			            	{
			            		this.state.templatelist.map((item)=>{
			            			return(
			            				<li key={item.itemid}>
					            			<img src={item.imgurl}  />
					            			{item.imgname}
			            				</li>
			            			)
			            		})
			            	}
		            	</ul>
	           		}
	            </div>
        	}

            <img src={this.state.imageulr} className="punish"/>

            <Link to="/fenlei">分类页面</Link>

			
		</div>
	}
}

export default connect(
	(state)=>{
		return{
			looplist:state
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

			    })

		 	}

		},
	}


)(Header);

