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
			imgurl:'',
			discount:'',
			title:'',
			time:''
		}
	}
	componentDidMount(){
		axios.get('/Services/Proxy.ashx?r=0.30376459503410946&type=5&page_index=1&displaycount=30&methodName=products.limitbuy_1.2.0&method=products.limitbuy&ver=2.1')
		.then(res=>{
			console.log(res.data.data.activityinfo[0].activitylist[0])
			this.setState({

				imgurl:res.data.data.activityinfo[0].activitylist[0].imgurl,
				discount:res.data.data.activityinfo[0].activitylist[0].discount,
				title:res.data.data.activityinfo[0].activitylist[0].title,
				time:res.data.data.activityinfo[0].activitylist[0].leftsecond
			})
			
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
												<NavLink to="/regist"><i className="iconfont icon-geren9" style={{ fontSize: 26,marginRight:10 }}></i>我的银泰</NavLink>
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
									<img src={this.state.imgurl} alt="hotpic" style={{width:"100%"}}/>
									<span className="discount">{this.state.discount}</span>
									<p>
										<span className="left">{this.state.title}</span>
										<span className="right">剩{Math.floor(this.state.time/3600)}小时</span>								
									</p>
								</div>
								<div style={{ alignItems: 'center', height: '250px', backgroundColor: '#fff' }}>
									<img src={this.state.imgurl} alt="hotpic" style={{width:"100%"}}/>
									<span className="discount">{this.state.discount}</span>
									<p>
										<span className="left">{this.state.title}</span>
										<span className="right">剩{Math.floor(this.state.time/3600)}小时</span>								
									</p>
								</div>
								<div style={{ alignItems: 'center', height: '250px', backgroundColor: '#fff' }}>
									<img src={this.state.imgurl} alt="hotpic" style={{width:"100%"}}/>
									<span className="discount">{this.state.discount}</span>
									<p>
										<span className="left">{this.state.title}</span>
										<span className="right">剩{Math.floor(this.state.time/3600)}小时</span>								
									</p>
								</div>
								<div style={{ alignItems: 'center', height: '250px', backgroundColor: '#fff' }}>
									<img src={this.state.imgurl} alt="hotpic" style={{width:"100%"}}/>
									<span className="discount">{this.state.discount}</span>
									<p>
										<span className="left">{this.state.title}</span>
										<span className="right">剩{Math.floor(this.state.time/3600)}小时</span>								
									</p>
								</div>
								<div style={{ alignItems: 'center', height: '250px', backgroundColor: '#fff' }}>
									<img src={this.state.imgurl} alt="hotpic" style={{width:"100%"}}/>
									<span className="discount">{this.state.discount}</span>
									<p>
										<span className="left">{this.state.title}</span>
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