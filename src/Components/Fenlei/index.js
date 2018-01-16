import React,{Component} from "react";
import "./index.css";
import axios from "axios";
import { NavLink } from 'react-router-dom'

import 'antd-mobile/dist/antd-mobile.css';
import {connect} from "react-redux"
import { Icon,Popover, NavBar,SearchBar} from 'antd-mobile';

const Item = Popover.Item;

const myImg = src => <img src={`https://gw.alipayobjects.com/zos/rmsportal/${src}.svg`} className="am-icon am-icon-xs" alt="" />;


class Fenlei extends Component{
	constructor(){
		super();
		
		this.state={
			tuijian:[],
			tuijian_name:null,
			categoryrecommend:[]

		}
	}

	componentDidMount() {
	   
	    if(this.props.xuanxiangList.length!==0){

		}else{
			 this.props.getXuanList();	
		}

	    if(this.props.fenleiList.length!==0){
	    	console.log("jfgjfdfjhr");	
			
		}else{
			console.log("没执行");
			this.props.getFenLeiList(88)
		}
		
	}


	render(){
		return <div id="Fenlei">
			<div className="header">
				<div>
					{/*<Icon type="left" size="md" color="black" />
					分类*/}
					<NavBar
					      mode="light"
					      icon={<Icon type="left" />}
					      onLeftClick={() => {this.props.history.push('/')}}
					      rightContent={
					                <Popover mask
					                  overlayClassName="fortest"
					                  overlayStyle={{ color: 'currentColor' }}
					                  visible={false}
					                  overlay={[
					                    (<Item key="4" value="scan" /*icon={myImg('tOtXhkIWzwotgGSeptou')}*/ data-seed="logId">
					                    	<NavLink to="/home"><i className="iconfont icon-home" style={{ fontSize: 26,marginRight:10 }}></i>首页</NavLink>
					                    </Item>),

					                    (<Item key="5" value="special" style={{ whiteSpace: 'nowrap' }}>
					                    	<NavLink to="/fenlei"><i className="iconfont icon-fenlei" style={{ fontSize: 26,marginRight:10 }}></i>分类</NavLink>
					                    </Item>),

					                    (<Item key="6" value="button ct">
					                      <NavLink to="/shopping"><i className="iconfont icon-gouwuche" style={{ fontSize: 26,marginRight:10 }}></i>
					                      购物车</NavLink>
					                    </Item>),

					                    (<Item key="7" value="button ct">
					                      	<NavLink to="/user"><i className="iconfont icon-geren9" style={{ fontSize: 26,marginRight:10 }}></i>我的银泰</NavLink>
					                    </Item>),

					                  ]} 
					                  	onVisibleChange={this.handleVisibleChange}
					                  >
					                  <div>
					                    <Icon type="ellipsis" />
					                  </div>
					                </Popover>
					              }
					    >分类</NavBar>
				</div>


				<div>
					<SearchBar placeholder="Search" showCancelButton placeholder="搜索商品或品牌"/>

				</div>
			</div>

			<div className="header1"></div>


			<div>
				<ul className="xuanxiang">
					{
		            	this.props.xuanxiangList.data?
		            		this.props.xuanxiangList.data.map((item,index)=>{
		            			return(
		            				<li key={item.id} onClick={this.handleClick.bind(this,index,item.id)}>
				            			{item.name}
		            				</li>
		            			)
		            	}):[]
	            	}
				</ul>
			</div>

			<div className="bu"></div>



			{/*推荐类目*/}
			<div className="tuijian_leimu">
				{
					this.props.fenleiList.recommend?<span>{this.props.fenleiList.recommend.name}</span>:[]
				}

				
				{
					this.props.fenleiList.recommend?
					<ul >
						{
							this.props.fenleiList.recommend.categoryrecommend.map((item)=>{
								return(
									// console.log(item.categoryid),
									<li key={item.categoryid} className="leimuLi" onClick={this.handle.bind(this,item.name)}>
										<img src={item.imageurl} alt="pic"/>
										<p>{item.name}</p>
									</li>
								)
							})
						}

					</ul>:[]
				}	
			</div>

			{/*推荐品牌*/}

			<div className="tuijian_pinpai">
				<div className="aaaa">
					{
						this.props.fenleiList.brand?<span>{this.props.fenleiList.brand.name}</span>:[]
					}
				</div>
				
				{
					this.props.fenleiList.brand?
					<ul >
						{
							this.props.fenleiList.brand.brandrecommend.map((item)=>{
								return(
									// console.log(item.categoryid),
									<li key={item.categoryid} className="leimuLi" onClick={this.handle.bind(this,item.name)}>
										<img src={item.imageurl} alt="pic"/>
									</li>
								)
							})
						}

					</ul>:[]
				}	
			</div>

			{/*更多类目*/}

			<div className="more_leimu">
				<div >
					{
						this.props.fenleiList.more?<span>{this.props.fenleiList.more.name}</span>:[]
					}
				</div>
				
				{
					this.props.fenleiList.more?
					<ul >
						{
							this.props.fenleiList.more.morerecommend.map((item)=>{
								return(
									// console.log(item.categoryid),
									<li key={item.categoryid} className="leimuLi" onClick={this.handle.bind(this,item.name)}>
										{item.name}
									</li>
								)
							})
						}

					</ul>:[]
				}	
			</div>



		</div>

	}		



	handleClick(index,id){
		console.log(111111)
		var lis=document.querySelectorAll('#Fenlei .xuanxiang li');
		for(var i=0;i<lis.length;i++){
			lis[i].className = '';	
		}
		lis[index].className='active1';
		this.props.getFenLeiList(id);
	}

	handle(id){
		this.props.history.push(`/detail/${id}`)
	}

}


export default connect(
	(state)=>{
		return{
			xuanxiangList:state.XuanxiangReducer,
			fenleiList:state.FenleiReducerZong
		}

	},

	{
		getXuanList:()=>{

		 	return (dispatch)=>{
		 		axios.get(`/Services/Proxy.ashx?r=0.12883658756248795&methodName=products.category.getcategory_3.0.0&method=products.category.getcategory&ver=3.0.0`).then(res=>{
		 			console.log(res);
					dispatch({
						type:"XUANXIANG_LIST",
						payload:res.data.data
					})

			    })

		 	}

		},

		getFenLeiList:(id)=>{

		 	return (dispatch)=>{
		 		axios.get(`/Services/Proxy.ashx?r=0.2140744635894909&methodName=products.category.getchildcategory_3.0.0&method=products.category.getchildcategory&ver=3.0.0&categoryid=${id}`).then(res=>{
		 			console.log(res);
					dispatch({
						// type:`FENLEI_LIST${id}`,
						type:`FENLEI_LIST`,
						payload:res.data.data
					})

			    })

		 	}

		},


	}

)(Fenlei);