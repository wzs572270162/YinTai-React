import React,{Component} from "react";
import "./index.css";

import { NavLink } from 'react-router-dom'
import { Icon,Popover, NavBar,SearchBar,Toast} from 'antd-mobile';
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
		
        // // for (let i = 0; i < small.length; i++) {
  	
        //     small.onclick = function() {
        //         num.innerHTML--;
        //         if(parseInt(num.innerHTML)<=1){
        //             num.innerHTML=1;
        //         }
        //             console.log(typeof(num.innerHTML));
        //             console.log(num.innerHTML);
                     
        //         }
                  
        //     // }
        
        // // for (let i = 0; i < large.length; i++) {
  	
        //     large.onclick = function() {
        //         num.innerHTML++;
        //         if(parseInt(num.innerHTML)>=10){
        //             num.innerHTML=10;
        //         }
        //         console.log(typeof(num.innerHTML));
        //         console.log(num.innerHTML);
                 
        //     }  
        // // }
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
					    >商品详情</NavBar>
						{/* {this.props.match.params.index} */}
						
						<div className="context">
						{
								this.state.datalist?
								<div>

									<dl className="list">
										<dt><img src={this.state.datalist[this.state.index].imageUrl} alt={this.state.datalist[this.state.index].imageName}/></dt>
										<dd><p>{this.state.datalist[this.state.index].itemName}</p></dd>
										<dd>
											<span>￥{this.state.datalist[this.state.index].salePrice}.00</span>
											<span>￥{this.state.datalist[this.state.index].marketPrice}.00</span>
											<span>商品编号:{this.state.datalist[this.state.index].itemSpu}</span>
										</dd>
									</dl>
									<div className="counts">
										<div>数量选择：</div>
										<div className="active_box small" onClick={this.small.bind(this)}><span className="active">-</span></div>
										<div className="number">1</div>
										<div className="active_box large" onClick={this.large.bind(this)}><span className="active">+</span></div>
										
									</div>
								</div>
								:[]
                   		 }
						</div>
						
						<div className="add">
							<NavLink to="/shopping"><i className="iconfont icon-gouwuche" style={{ fontSize: 32,height:32 ,width:"1em",color:"red",fontWeight:"bold"}}></i></NavLink>
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
			imgUrl:this.state.datalist[this.state.index].imageUrl,
			count:this.state.datalist[this.state.index].count
		}).then((res)=>{
			console.log(res);
			//添加购物车过渡样式
				Toast.success('添加购物车成功', 2);

			
		})

	}
	large(){
		let num=document.querySelector('#detail .number');
        let small=document.querySelector('#detail .small');
        let large=document.querySelector('#detail .large');
		num.innerHTML++;
		if(parseInt(num.innerHTML)>=10){
			num.innerHTML=10;
		}
		console.log(typeof(num.innerHTML));
		console.log(num.innerHTML);
	}
	small() {
		let num=document.querySelector('#detail .number');
        let small=document.querySelector('#detail .small');
        let large=document.querySelector('#detail .large');
		num.innerHTML--;
		if(parseInt(num.innerHTML)<=1){
			num.innerHTML=1;
		}
			console.log(typeof(num.innerHTML));
			console.log(num.innerHTML);
			 
	}
	
	


}

export default Detail;