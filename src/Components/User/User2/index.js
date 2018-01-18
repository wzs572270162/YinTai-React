import React,{Component} from "react";
import { Icon,Popover, NavBar,SearchBar,Button,Toast} from 'antd-mobile';
import "./index.css";
import axios from "axios"
import p1 from "../../../assets/pic/p1.png"
import p2 from "../../../assets/pic/p2.png"
import p3 from "../../../assets/pic/p3.png"
import p4 from "../../../assets/pic/p4.png"
import p5 from "../../../assets/pic/p5.png"
import { NavLink } from 'react-router-dom'

const Item = Popover.Item;

const myImg = src => <img src={`https://gw.alipayobjects.com/zos/rmsportal/${src}.svg`} className="am-icon am-icon-xs" alt="" />;
class User2 extends Component{
	componentDidMount(){
		
	}
	render(){
		return <div id="User2">
			<NavBar
			      mode="light"
			      icon={<Icon type="left" />}

			      onLeftClick={() => {this.props.prop.history.push('/')}}

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
			    >我的银泰</NavBar>

			    <div className="beijing">
			    	<div><img src={p1} /></div>
			    	<p>Mz0g93zTr</p>
			    </div>

			    <ul className="nav">
			    	<li>
			    		<i className="iconfont icon-iconset0330"></i>
			    		<p>全部订单</p>
			    	</li>
			    	<li>
			    		<i className="iconfont icon-icon-test"></i>
			    		<p>待付款</p>
			    	</li>
			    	<li>
			    		<i className="iconfont icon-fenlei"></i>
			    		<p>待收货</p>
			    	</li>
			    	<li className="lp">
			    		<i className="iconfont icon-more"></i>
			    		<p>退换货</p>
			    	</li>
			    </ul>

			    <div id="box2"></div>

			   


			    <ul className="nav1">
			    	<li>
			    		2.01
			    		<p>积分</p>
			    	</ li>
			    	<li>
			    		11.89
			    		<p>银元</p>
			    	</li>
			    	<li className="lp">
			    		157.26
			    		<p>余额</p>
			    	</li>
			    	<li className="lp">
			    		34.12
			    		<p>现款</p>
			    	</li>
			    </ul>

			    <ul className="nav2">
			    	<li className="lo">
			    		<div><img src={p2} /></div>
			    		<h4>
			    			银泰卡
			    			<p>已登记0张</p>
			    		</h4>
			    	</li>
			    	<li >
			    		<div><img src={p3} /></div>
			    		<h4>
			    			优惠券
			    			<p>0张有效</p>
			    		</h4>
			    	</li>
			    	<li className="lo">
			    		<div><img src={p5} /></div>
			    		<h4>
			    			银泰护照
			    			<p>187****4587</p>
			    		</h4>
			    	</li>
			    	<li>
			    		<div><img src={p4} /></div>
			    		<h4>
			    			手机号
			    			<p>152****6468</p>
			    		</h4>
			    	</li>
			    </ul>

			    <div id="box1"></div>

			    <div className="jijip">
			    	<div>
			    		<span className="span1">帮助中心</span>
			    		<span className="span2"><Icon type="right" size="md" color="red" /></span>
			    	</div>
			    	<div>
			    		<span className="span1">客服电话</span>
			    		<span className="span2">400-119-1222<Icon type="right" size="md" color="red" className="plpl"/></span>
			    	</div>

			    </div>

			    <Button type="warning" onClick={this.handle.bind(this)}>退出登录</Button>
		</div>
	}
	handle(){
		axios.get('/users/destroy').then((res)=>{
			console.log(res);
		});
		Toast.success('注销成功，请切换账号', 2);
		this.props.event();

	}
}

export default User2;