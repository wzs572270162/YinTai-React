import React,{Component} from "react";
import "./index.css";
import axios from "axios";
// import { NavLink } from "react-router-dom"
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
	    this.props.getXuanList();
	    axios.get(`/Services/Proxy.ashx?r=0.2140744635894909&methodName=products.category.getchildcategory_3.0.0&method=products.category.getchildcategory&ver=3.0.0&categoryid=88`).then((res)=>{
	    	console.log(res.data.data);
	    	this.setState({
	    		tuijian:res.data.data,
	    		categoryrecommend:res.data.data.recommend.categoryrecommend,
	    		tuijian_name:res.data.data.recommend.name
	    	})
	    })
	}


	render(){
		return <div id="Fenlei">

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
				                    	<i className="iconfont icon-home" style={{ fontSize: 26,marginRight:10 }}></i>首页
				                    </Item>),

				                    (<Item key="5" value="special" style={{ whiteSpace: 'nowrap' }}>
				                    	<i className="iconfont icon-fenlei" style={{ fontSize: 26,marginRight:10 }}></i>分类
				                    </Item>),

				                    (<Item key="6" value="button ct">
				                      <i className="iconfont icon-gouwuche" style={{ fontSize: 32,marginRight:10 }}></i>
				                      购物车
				                    </Item>),

				                    (<Item key="7" value="button ct">
				                      	<i className="iconfont icon-geren9" style={{ fontSize: 26,marginRight:10 }}></i>我的银泰
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


			<div>
				<ul className="xuanxiang">
					{
		            	this.props.xuanxiangList.data?
		            		this.props.xuanxiangList.data.map((item,index)=>{
		            			return(
		            				<li key={item.id} onClick={this.handleClick.bind(this,index)}>
				            			{item.name}
		            				</li>
		            			)
		            		}):[]
	            	}
				</ul>
			</div>


			<div className="tuijian_leimu">
				{	/*this.state.tuijian.recommend?
					<div>
					{this.state.tuijian.recommend.name}</div>:null*/
				}
				{this.state.tuijian_name}
				<ul >
					{
						this.state.categoryrecommend.map((item)=>{
							console.log(item.categoryid)
							return(
								// console.log(item.categoryid),
								<li key={item.categoryid} className="leimuLi">
									<img src={item.imageurl} alt="pic"/>
								</li>
							)
						})
					}

				</ul>
			</div>


		</div>

	}		



	handleClick(index){
		console.log(111111)
		var lis=document.querySelectorAll('#Fenlei .xuanxiang li');
		for(var i=0;i<lis.length;i++){
			lis[i].className = '';	
		}
		lis[index].className='active1'
	}
}


export default connect(
	(state)=>{
		return{
			xuanxiangList:state.XuanxiangReducer
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
	}

)(Fenlei);