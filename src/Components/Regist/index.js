import React,{Component} from "react";
import { NavLink } from 'react-router-dom'
import { Icon, Grid,Popover, NavBar,List, InputItem,Button,Toast} from 'antd-mobile';
import "./index.css";
import axios from "axios"

const Item = Popover.Item;

const myImg = src => <img src={`https://gw.alipayobjects.com/zos/rmsportal/${src}.svg`} className="am-icon am-icon-xs" alt="" />;
class Regist extends Component{
	constructor(){
		super();
	}

	render(){
		return <div id="Regist">
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
			    >注册页面</NavBar>


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

			      <div className="all all1" style={{marginTop:"-0.17rem"}}>
			         <div className="font">
			         	<i className="iconfont icon-mima"></i>

			         </div>
			         <input type="password"  className="input" placeholder="再次确认密码" id="password"/>
			     </div>

			     <Button type="primary" onClick={this.regist.bind(this)}>注册</Button>








		</div>
	}

	regist(){
		axios.post(`/users/regist`, {
            username: document.querySelector('#user').value,
            psw: document.querySelector('#password').value
          }).then((res)=>{
          	if(res.data=='注册成功'){
          		Toast.success('注册成功，请登录！！！！',2);
          		this.props.history.push('/user')
          	}else{
          		Toast.fail('注册失败，请重新注册',2)
          	}
          })
	}
}

export default Regist;