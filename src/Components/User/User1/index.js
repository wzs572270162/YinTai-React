import React,{Component} from "react";
import "./index.css";
import { NavLink } from 'react-router-dom'
import { Icon, Grid,Popover, NavBar,List, InputItem,Button,Toast} from 'antd-mobile';
import "../../../assets/font/iconfont.css"
import axios from "axios"

const Item = Popover.Item;

const myImg = src => <img src={`https://gw.alipayobjects.com/zos/rmsportal/${src}.svg`} className="am-icon am-icon-xs" alt="" />;
class User1 extends Component{
	constructor(){
		super();
	}

	render(){
		return <div id="User1">
			
			<NavBar
		      mode="light"
		      icon={<Icon type="left" />}
		      onLeftClick={() => {this.props.ppp.history.push('/')}}
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
		    >登录</NavBar>


			     <div className="all">
			         <div className="font">
			         	<i className="iconfont icon-geren9"></i>

			         </div>
			         <input type="text"  className="input" placeholder="请输入用户名" id="user"/>
			     </div>

			      <div className="all all1">
			         <div className="font">
			         	<i className="iconfont icon-mima"></i>

			         </div>
			         <input type="password"  className="input" placeholder="请输入密码" id="password"/>
			     </div>


			     <Button type="warning" onClick={this.login.bind(this)}>登录</Button>

			     <div className="qita">
				     <span className="left"><NavLink to="/regist">免费注册</NavLink></span>
					<span className="right">找回密码</span>
				</div>

				<div className="clear">
					<p>银泰护照即银泰门店会员账号，一般为手机号，如未设置过密码
					或忘记密码可点击“忘记密码”进行找回。</p>
					<p className="p_2">推荐您使用银泰护照进行登录。使用银泰护照登录，
					将可在线享受银泰会员的一些权益，并与您线上账号进行关联，
					确保您的会员权益最大化。</p>
				</div>
				<p className="kefu">客服电话：400-119-1111（8:00-24:00）</p>
		</div>
	}

	login(){

		axios.post(`users/login`,{
			user: document.querySelector('#user').value,
            psw: document.querySelector('#password').value
		}).then((res)=>{
			console.log(res);
			if(res.data.code===1){
				Toast.success('登录成功 !!!', 2);
				this.props.event();
			}else{
				Toast.fail('用户名或密码错误',2);
			}
			
		})


	}
}

export default User1;