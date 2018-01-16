import React, { Component } from 'react'
import './index.css'
import clearcart from '../../assets/pic/clearcart2.png'
import { NavLink } from 'react-router-dom'
import { Icon,Popover, NavBar,List, Stepper} from 'antd-mobile';
import axios from 'axios'
const Item = Popover.Item;
export default class Shopping extends Component {
    constructor(){
        super();
        this.state={
            datalist:null,
            val:1,
        }
    }
    onChange=(val) => {
		// console.log(val);
		this.setState({ val },()=>{console.log(this.state.val)});
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
    detailId(index){
        console.log(index);
        this.props.history.push(`/detail/${index}`)
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
                                    <NavLink to="/shopping"><i className="iconfont icon-gouwuche" style={{ fontSize: 26,marginRight:10 }}></i>
				                      购物车</NavLink>
				                    </Item>),

				                    (<Item key="6" value="button ct">
                                    <NavLink to="/regist"><i className="iconfont icon-geren9" style={{ fontSize: 26,marginRight:10 }}></i>我的银泰</NavLink>
				                    </Item>),

				                    (<Item key="7" value="button ct" style={{color:"red"}}>
                                    <i className="iconfont icon-iconset0330" style={{ fontSize: 26,marginRight:10 }}></i>编辑
				                    </Item>)

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
                {/* 购物车数据 */}
						<List>
							<List.Item
							wrap
							extra={
								<Stepper
								style={{ width: '100%', minWidth: '100px' }}
								showNumber
								max={10}
								min={1}
								value={this.state.val}
								onChange={this.onChange}
								/>}
							>
                            <div className="shopping_list">
                                <div><input type="checkbox" defaultChecked/></div>
                                
                                <img src="https://p10.ytrss.com/product/21/489/7495/GridImage/yintai_8dca1100-dbdf-4f7d-b4e6-927d9549774e.jpg" alt="pic" style={{width:"auto",height:"3em"}}/>
                                <span className="price">价格</span>
                            </div>
							</List.Item>
						</List>
                        <button className="remove">删除</button>

                <div className="like">
                    <fieldset className="recommend-title">
                        <legend align="center">猜你喜欢</legend>
                    </fieldset>
                    {
                        this.state.datalist?
                        this.state.datalist.map((item,index)=>{
                            return (

                            <dl key={index} className="list" onClick={this.detailId.bind(this,index)}>
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
