import React,{Component} from "react";
import "./index.css";
import { Icon,Popover, NavBar,SearchBar} from 'antd-mobile';
import { NavLink } from 'react-router-dom'


const Item = Popover.Item;
const myImg = src => <img src={`https://gw.alipayobjects.com/zos/rmsportal/${src}.svg`} className="am-icon am-icon-xs" alt="" />;
class Detail extends Component{
	constructor(){
		super();
		this.state={
			aaa:"fsdfsd"
		}
	}

	render(){
		return <div id="Detail">
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
			    >{this.props.match.params.id}</NavBar>
			
			    {/*Title*/}
			    <div className="title">
			    	<ul>
			    		<li>默认</li>
			    		<li>销量</li>
			    		<li>价格</li>
			    		<li>折扣</li>
			    		<li>筛选</li>
			    	</ul>

			    </div>



			
		</div>
	}
}

export default Detail;