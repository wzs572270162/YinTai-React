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
            shuju:[]
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
        });
        axios.get(`/users/goodsShow`).then((res)=>{       
            this.setState({
                shuju:res.data
            });
           
        })

    }
    detailId(index){
        console.log(index);
        this.props.history.push(`/detail/${index}`)
    }


    // 全选
    checkedbox_all(){
        let checkedbox_all=document.querySelector('#shopping .checkedbox_all');
        console.log(checkedbox_all)
        let checkbox_all=document.querySelectorAll('#shopping .checkbox');
        checkbox_all.forEach((item,index) => {
            if(checkedbox_all.checked){
                item.checked=true;
            }else{
                item.checked=false;
            }
        });
    }
    // 删除选中的input 
    remove(){
        console.log(document.querySelectorAll('#shopping .checkbox'))
        let checkbox_all=document.querySelectorAll('#shopping .checkbox');
        checkbox_all.forEach((item,index) => {
            if(item.checked){
                // checkbox_all.remove(index).parent
                item.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.
                removeChild(item.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode);
            }
        });
    }
    //数量加减
    // small(){
    //     let num=document.querySelectorAll('#shopping .number');
    //     let count=num.innerHTML--
    //     if(count<=1){
    //         num.innerHTML=1
    //     }
    //     console.log(typeof(count))
    //     console.log(count)
    // }
    //  large(){
    //     let num=document.querySelectorAll('#shopping .number');
    //     let count=num.innerHTML++
        
    //     if(count>=10){
    //         num.innerHTML=10
    //     }
    //         console.log(typeof(count))
    //         console.log(count)
    // }
    

    render() {
        let num=document.querySelectorAll('#shopping .number');
        let small=document.querySelectorAll('#shopping .small');
        let large=document.querySelectorAll('#shopping .large');
        let countbig=num.innerHTML
        let countsmall=num.innerHTML;
        console.log(num)
        for (let i = 0; i < small.length; i++) {
  	
            small[i].onclick = function() {
                
              console.log(i);
              console.log(num[i])
              num[i].innerHTML+=countbig;
            }
        }
        for (let i = 0; i < large.length; i++) {
  	
            large[i].onclick = function() {
                
              console.log(i);
              num[i].innerHTML-=countsmall;
            }
        }
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
                                    <NavLink to="/user"><i className="iconfont icon-geren9" style={{ fontSize: 26,marginRight:10 }}></i>我的银泰</NavLink>
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


                
               

                <div className="houtai">
                    {
                        this.state.shuju.length?
                        <ul>
                            {
                                this.state.shuju.map((item)=>{
                                    return(
                                        <li key={item._id}>
                                            <img src={item.img_url} />
                                            <span>{item.goods_name}</span>
                                            <p>{item.price}</p>
                                        </li>
                                    )
                                    
                                })
                            }
                      
                        </ul>:
                        <div className="none">
                            <img src={clearcart} alt="clearcart"/>
                            <p>购物车空空哒!</p>
                            <p>快去随便逛逛吧~</p>
                            <NavLink to="/" className="btn_none">随便逛逛</NavLink>
                        </div>
                        
                    }
                </div>

                <br/>
                {/* 购物车数据 */}
                <div className="shopping_all">
                         
                        <input id='checkedbox_all' type="checkbox" className="checkedbox_all" defaultChecked onClick={this.checkedbox_all.bind(this)}/>
                        <label htmlFor="checkedbox_all">全选</label>
						
                            <div className="shopping_list">
                                <div><input type="checkbox" defaultChecked className="checkbox"/></div>
                                
                                <img src="https://p10.ytrss.com/product/21/489/7495/GridImage/yintai_8dca1100-dbdf-4f7d-b4e6-927d9549774e.jpg" alt="pic" style={{width:"auto",height:"3em"}}/>
                                <span className="price">价格</span>
                                <div className="active_box small"><span className="active">-</span></div>
                                <div className="number">1</div>
                                <div className="active_box large"><span className="active">+</span></div>
                            </div>
                            <div className="shopping_list">
                                <div><input type="checkbox" defaultChecked className="checkbox"/></div>
                                
                                <img src="https://p10.ytrss.com/product/21/489/7495/GridImage/yintai_8dca1100-dbdf-4f7d-b4e6-927d9549774e.jpg" alt="pic" style={{width:"auto",height:"3em"}}/>
                                <span className="price">价格</span>
                                <div className="active_box small"><span className="active">-</span></div>
                                <div className="number">1</div>
                                <div className="active_box large"><span className="active">+</span></div>
                            </div>
							
                        
                        <button className="remove" onClick={this.remove.bind(this)}>删除</button>
                </div>


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
