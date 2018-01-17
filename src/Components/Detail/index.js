import React,{Component} from "react";
import "./index.css";

import { NavLink } from 'react-router-dom'
import { Icon,Popover, NavBar,SearchBar} from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';
import axios from "axios";

const Item = Popover.Item;
class Detail extends Component{
	constructor(props){
        super(props);
        this.state={
			datalist:null,
			index:null,
        }
	}
    componentDidMount(){
        axios.get('/json/shopping.json').then(res=>{
            // console.log(res.data.val[0].imageUrl)
            this.setState({
				datalist:res.data.val,
				index:this.props.match.params.index
            },()=>{
				console.log(this.state.datalist)
				console.log(this.props.match.params.index)
            })
        })
    }
	
	render(){
		return (
		<div id="detail">
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
					    >商品详情</NavBar>
						{/* {this.props.match.params.index} */}
						{/* 空购物车背景 */}
						<div className="context">
						{
								this.state.datalist?
									<dl className="list">
										<dt><img src={this.state.datalist[this.state.index].imageUrl} alt={this.state.datalist[this.state.index].imageName}/></dt>
										<dd><p>{this.state.datalist[this.state.index].itemName}</p></dd>
										<dd>
											<span>￥{this.state.datalist[this.state.index].salePrice}.00</span>
											<span>￥{this.state.datalist[this.state.index].marketPrice}.00</span>
											<span>商品编号:{this.state.datalist[this.state.index].itemSpu}</span>
										</dd>
									</dl>
									:[]
                   		 }
						</div>
						
						<div className="add">
							<a><i className="iconfont icon-gouwuche" style={{ fontSize: 32,height:32 ,width:"1em",color:"red",fontWeight:"bold"}}></i></a>
							<span className="send_add" onClick={this.addshop.bind(this)}>加入购物车</span>
							<span className="send_buy">立即购买</span>
						</div>
		</div>
		)
	}

	addshop(){
		// console.log("添加");
		// console.log(this.state.datalist[this.state.index].imageUrl);
		// var that=this;
		axios.post(`/users/create`,{
			name:this.state.datalist[this.state.index].itemName,
			price:this.state.datalist[this.state.index].salePrice,
			imgUrl:this.state.datalist[this.state.index].imageUrl
		}).then((res)=>{
			console.log(res);
		})

	}


}

export default Detail;