import React,{Component} from "react";
import "./index.css";
import { Icon, Grid,Popover, NavBar,List, InputItem,} from 'antd-mobile';
import "../../assets/font/iconfont.css"

const Item = Popover.Item;

const myImg = src => <img src={`https://gw.alipayobjects.com/zos/rmsportal/${src}.svg`} className="am-icon am-icon-xs" alt="" />;
class Card extends Component{
	constructor(){
		super();
	}

	render(){
		return <div id="User">
			
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
			    >登录</NavBar>



			     <div className="all">
			         <div className="font">
			         	<i className="iconfont icon-geren9"></i>

			         </div>
			         <input type="text"  className="input"/>

			     </div>




		</div>
	}
}

export default Card;