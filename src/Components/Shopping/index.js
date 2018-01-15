import React, { Component } from 'react'
import './index.css'
import clearcart from '../../assets/pic/clearcart2.png'
import { NavLink } from 'react-router-dom'
import { Icon,Popover, NavBar} from 'antd-mobile';
import axios from 'axios'
const Item = Popover.Item;
export default class Shopping extends Component {
    constructor(){
        super();
        this.state={
            datalist:null
        }
    }
    componentDidMount(){
        axios.get('/json/shopping.json').then(res=>{
            // console.log(res.data.val[0].imageUrl)
            this.setState({
                datalist:res.data.val
            },()=>{
                console.log(this.state.datalist)
            })
        })
    }
    render() {
        return (
            <div id="shopping">
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
				    >购物车
				</NavBar>
                <div className="none">
                    <img src={clearcart} alt="clearcart"/>
                    <p>购物车空空哒!</p>
                    <p>快去随便逛逛吧~</p>
                    <NavLink to="/" className="btn_none">随便逛逛</NavLink>
                </div>
                <br/>
                <div className="like">
                    <fieldset className="recommend-title">
                        <legend align="center">猜你喜欢</legend>
                    </fieldset>
                    {
                        this.state.datalist?
                        this.state.datalist.map((item,index)=>{
                            return (

                            <dl key={index} className="list">
                                <dt><img src={item.imageUrl} alt={item.imageName}/></dt>
                                <dd>{item.itemName}</dd>
                                <dd>￥{item.salePrice}.00</dd>
                            </dl>
                            )
                            {/* console.log(item) */}
                            
                        })
                        :[]
                    }
                    
                             
                </div>
            </div>
        )
    }
}
