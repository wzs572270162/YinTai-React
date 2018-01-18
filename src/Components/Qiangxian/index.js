import React,{Component} from "react";
import "./index.css";
import { NavLink } from 'react-router-dom'
import axios from 'axios'
import { Icon,Popover, NavBar,Tabs} from 'antd-mobile';
import { StickyContainer, Sticky } from 'react-sticky';
import 'antd-mobile/dist/antd-mobile.css';
import Nav_bottom from "../Nav-bottom";
const Item = Popover.Item;
function renderTabBar(props) {
	return (<Sticky>
	  {({ style }) => <div style={{ ...style, zIndex: 1 }}><Tabs.DefaultTabBar {...props} /></div>}
	</Sticky>);
  }
const tabs = [
	{ title: '推荐' },
	{ title: '最新' },
	{ title: '特卖爆推' },
	{ title: '倒计时'},
	{ title: '预告'}
  ];
class Card extends Component{
	constructor(){
		super();
		this.state={
			imgurl1:'',
			imgurl2:'',
			imgurl3:'',
			imgurl4:'',
			imgurl5:'',
			discount:'',
			price1:'',
			price2:'',
			price3:'',
			price4:'',
			price5:'',
			time:'',
			data:[]
		}
	}
	componentDidMount(){
		axios.get('/json/shopping.json')
		.then(res=>{
			console.log(res.data.val)
				this.setState({
	
					imgurl1:res.data.val[0].imageUrl,
					imgurl2:res.data.val[1].imageUrl,
					imgurl3:res.data.val[2].imageUrl,
					imgurl4:res.data.val[3].imageUrl,
					imgurl5:res.data.val[4].imageUrl,
					time:36000,
					price1:res.data.val[0].salePrice,
					price2:res.data.val[1].salePrice,
					price3:res.data.val[2].salePrice,
					price4:res.data.val[3].salePrice,
					price5:res.data.val[4].salePrice,
				})
			
				
		})
		.catch(err=>{
			console.log(err)
		})
	}
	render(){
		return (
			<div>

				<div id="qiangxian">
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
							>抢先
						</NavBar>
						<StickyContainer>
						<Tabs tabs={tabs}
							initalPage={'t2'}
							renderTabBar={renderTabBar}
							className="tabs"
						>
								<div style={{ alignItems: 'center', height: '250px', backgroundColor: '#fff' }}>
									<div className="pic_box">

										<img src={this.state.imgurl1} alt="hotpic" className="pic"/>
									</div>
									<span className="discount">{this.state.discount}</span>
									<p>
										<span className="left">￥{this.state.price1}</span>
										{/* <span className="right">剩{Math.floor(this.state.time/3600)}小时</span>								 */}
									</p>
								</div>
								<div style={{ alignItems: 'center', height: '250px', backgroundColor: '#fff' }}>
									<div className="pic_box">
										<img src={this.state.imgurl2} alt="hotpic"  className="pic"/>	
									</div>
									<span className="discount">{this.state.discount}</span>
									<p>
										<span className="left">￥{this.state.price2}</span>
										{/* <span className="right">剩{Math.floor(this.state.time/3600)}小时</span>								 */}
									</p>
								</div>
								<div style={{ alignItems: 'center', height: '250px', backgroundColor: '#fff' }}>
									<div className="pic_box">
										<img src={this.state.imgurl3} alt="hotpic" className="pic"/>
									</div>
									<span className="discount">{this.state.discount}</span>
									<p>
										<span className="left">￥{this.state.price3}</span>
										<span className="right">剩{Math.floor(this.state.time/3600)}小时</span>								
									</p>
								</div>
								<div style={{ alignItems: 'center', height: '250px', backgroundColor: '#fff' }}>
									<div className="pic_box">
										<img src={this.state.imgurl4} alt="hotpic" className="pic"/>
									</div>
									
									<span className="discount">{this.state.discount}</span>
									<p>
										<span className="left">￥{this.state.price4}</span>
										<span className="right">剩{Math.floor(this.state.time/3600)}小时</span>								
									</p>
								</div>
								<div style={{ alignItems: 'center', height: '250px', backgroundColor: '#fff' }}>
									<div className="pic_box">
										<img src={this.state.imgurl5} alt="hotpic" className="pic"/>
									</div>
									
									<span className="discount">{this.state.discount}</span>
									<p>
										<span className="left">￥{this.state.price5}</span>
										<span className="right">剩{Math.floor(this.state.time/3600)}小时</span>								
									</p>
								</div>
						
						</Tabs>
						</StickyContainer>

						{/* 下导航 */}
						<footer>
							<nav>
								<div className="top">
									<ul>
										<li><NavLink to="/home">首页</NavLink></li>
										<li><NavLink to="/fenlei">分类</NavLink></li>
										<li><NavLink to="/shopping">购物车</NavLink></li>
										<li><NavLink to="/regist">我的</NavLink></li>
									</ul>
								</div>
								<div className="bottom">
									<div className="left">
										<NavLink to="/login">登陆</NavLink>
										<span>|</span>
										<NavLink to="/regist">注册</NavLink>
									</div>
									<div className="right">
										<NavLink to="#">客户端下载</NavLink>
									</div>
								</div>
							</nav>
							<div className="desc">
								<pre>客服电话：400-119-1111 （8:00-24:00）</pre>
								<p>浙ICP备10200233号</p>
							</div>
						</footer>					
				</div>
				<Nav_bottom></Nav_bottom>
			</div>
		)
	}
}

export default Card;