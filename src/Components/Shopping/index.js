import React, { Component } from 'react'
import './index.css'
import clearcart from '../../assets/pic/clearcart2.png'
import { NavLink } from 'react-router-dom'
import { Icon,Popover, NavBar,List, Stepper,Modal, WhiteSpace, WingBlank, Toast} from 'antd-mobile';

import axios from 'axios'
//警告弹窗
const alert = Modal.alert;
const Item = Popover.Item;
export default class Shopping extends Component {
    constructor(){
        super();
        this.state={
            datalist:null,
            val:1,
            shuju:[],
            bbb:false,
            aaa:false,
            isshow:"isblock",
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
        axios.get(`/users/goodsShow`).then((res)=>{
            if(res.data.length==0){
                this.setState({
                    bbb:true
                })
            } else{
               
                     
                this.setState({
                    shuju:res.data,
                    bbb:false,
                    aaa:true
                },()=>{
                    //数量选择
                    let num=document.querySelectorAll('#shopping .number');
                    let small=document.querySelectorAll('#shopping .small');
                    let large=document.querySelectorAll('#shopping .large');
                    let pic=document.querySelectorAll('#shopping .shopping_list .pic');
                    console.log(pic,"pic")
                    console.log(this.refs.small,"div")
                    console.log(num,"num")
                    console.log(small.length,"small")
                    if(small.length!==0){

                        for (let i = 0; i < small.length; i++) {
                    
                            small[i].onclick = function() {
                                console.log("small")
                                num[i].innerHTML--;
                                if(parseInt(num[i].innerHTML)<=1){
                                    num[i].innerHTML=1;
                                }
                                    console.log(typeof(num[i].innerHTML));
                                    console.log(num[i].innerHTML);
                                    console.log(i);  
                                }
                                
                            }
                        
                        for (let i = 0; i < large.length; i++) {
                    
                            large[i].onclick = function() {
                                console.log("large")
                                num[i].innerHTML++;
                                if(parseInt(num[i].innerHTML)>=10){
                                    num[i].innerHTML=10;
                                }
                                console.log(typeof(num[i].innerHTML));
                                console.log(num[i].innerHTML);
                                console.log(i);  
                            }  
                        }
                        
                    }
                // console.log(checkedboxs_all)
                // console.log(checkedboxs_all.checked,"checkdeboxs_all")
                // let checkbox_check=document.querySelectorAll("#shopping shopping_list input:checked")
                // console.log(checkbox_check,"checkbox_check 初始")
                
                })
            }
           
        })
       
    }
    // 生命周期结束///
    detailId(index){
         console.log(index);
        this.props.history.push(`/detail/${index}`)
    }


    // 全选
    checkedbox_all(){
        let checkedbox_all=document.querySelector('#shopping .checkedbox_all');
        // console.log(checkedbox_all,"checkedbox_all")
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
    remove111(id){
        if(this.state.isshow=="isblock"){
            this.setState({isshow:"isnone"})
        }else{
            this.setState({isshow:"isblock"})
        }
    }
    remove(){

        //alert
            let waring =() => alert('删除', '确定放弃此宝贝???', [
            { text: '关闭', onPress: () => console.log('cancel') },
            {
              text: '确认',
              onPress: () => new Promise((resolve) => {
                Toast.info('操作成功', 1);
                setTimeout(resolve, 1000);
                //删除数据
                console.log(document.querySelectorAll('#shopping .checkbox'))
                let checkbox_all=document.querySelectorAll('#shopping .checkbox');
                checkbox_all.forEach((item,index) => {
                    if(item.checked){
                        // checkbox_all.remove(index).parent
                        item.parentNode.parentNode.parentNode.
                        removeChild(item.parentNode.parentNode);
                        axios.post(`/users/goodsdel`,{id:item.getAttribute('ooo')}).then((res)=>{
                            console.log(res);
                            let checkbox_all=document.querySelectorAll('#shopping .checkbox');
                            if(checkbox_all.length==0){
                                this.setState({
                                    bbb:true,
                                    aaa:false
                                })
                            }

                        })
                    }
                });
              }),
            },
          ])
        waring();
    }
    // 监听
    activestate=()=>{
                    console.log("state");
                    let checkedboxs_all=document.querySelector('#shopping .checkedbox_all');
                    let checkbox_all=document.querySelectorAll('#shopping .checkbox');
                    let checkbox_check=document.querySelectorAll("#shopping input:checked")
                         if(checkbox_check.length==this.state.shuju.length){
                            checkedboxs_all.checked=!checkedboxs_all.checked
                         }   
                         console.log(this.state.shuju.length,"state")
                        console.log(checkbox_check.length,"checkbox_check 变化")

    }
    render() {
        //全选框判定
       
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

				                    (<Item key="7" value="button ct" style={{color:"red"}}><NavLink to="/fenlei">
                                    <i className="iconfont icon-iconset0330" style={{ fontSize: 26,marginRight:10 }}></i>分类</NavLink>
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



                
                <div className={this.state.bbb?"isblock":"isnone"}>
                    <div className="none">
                        <img src={clearcart} alt="clearcart"/>
                        <p>购物车空空哒!</p>
                        <p>快去随便逛逛吧~</p>
                        <NavLink to="/" className="btn_none">随便逛逛</NavLink>
                    </div>
                </div>




                {/* <div className="houtai">
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
                </div> */}

                <br/>


 {/*======================================================================================================*/}               
        {
            <div className={this.state.aaa?"isblock":"isnone"}>


            
                {/* 购物车数据 */}
                <div className="shopping_all">
                         
                        <input id='checkedbox_all' type="checkbox" className="checkedbox_all" onClick={this.checkedbox_all.bind(this)}/>

                        <label htmlFor="checkedbox_all">全选</label>
                            {
                                this.state.shuju.length?
                                this.state.shuju.map(item=>{
                                    return (
                                        <div className="shopping_list" key={item._id}>


                                            <div><input type="checkbox" className="checkbox" ooo={item._id} onClick={this.activestate.bind(this)}/></div>

                                            
                                            <div className="pic"><img src={item.img_url} alt="pic"/></div>
                                            
                                            <div className="information">
                                                
                                                <p><span className={this.state.isshow}>{item.goods_name}</span></p>
                                                <p className="price_position"><span className="price">价格:{item.price}</span></p>
                                                <div className="count_btn">
                                                    <div className="active_box small" ref="small"><span className="active">-</span></div>
                                                    <div className="number">1</div>
                                                    <div className="active_box large"><span className="active">+</span></div>
                                                </div>
                                                
                                            </div>
                                        </div>
                                    )
                                })

                                :null

                            }

                            {/* 静态测试 */}
                                        {/* <div className="shopping_list">
                                            <div><input type="checkbox" defaultChecked className="checkbox"/></div>
                                            
                                            <div className="pic"><img src="https://p10.ytrss.com/product/21/481/3928/GridImage/15777.jpg"/></div>
                                            
                                            <div className="information">
                                                
                                                <p><span></span></p>
                                                <p className="price_position"><span className="price">价格:</span></p>
                                                <div className="count_btn">
                                                    <div className="active_box small" ref="small"><span className="active">-</span></div>
                                                    <div className="number">1</div>
                                                    <div className="active_box large"><span className="active">+</span></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="shopping_list">
                                            <div><input type="checkbox" defaultChecked className="checkbox"/></div>
                                            
                                            <div className="pic"><img src="https://p10.ytrss.com/product/21/481/3928/GridImage/15777.jpg"/></div>
                                            
                                            <div className="information">
                                                
                                                <p><span></span></p>
                                                <p className="price_position"><span className="price">价格:</span></p>
                                                <div className="count_btn">
                                                    <div className="active_box small" ref="small"><span className="active">-</span></div>
                                                    <div className="number">1</div>
                                                    <div className="active_box large"><span className="active">+</span></div>
                                                </div>
                                            </div>
                                        </div> */}
                            {/* 静态测试 */}
                            
							{/* //删除按钮   */}
                        <button className="remove" onClick={this.remove.bind(this)}>删除</button>
                </div>

        </div>
    }
{/*======================================================================================================*/}

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
