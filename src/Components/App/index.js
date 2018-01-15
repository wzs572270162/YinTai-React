import React,{Component} from "react";
import Header from "../Header";
import "./index.css";
import List from "../List";
import { NavLink } from 'react-router-dom'



class App extends Component{
	constructor(){
		super();
	}

	render(){
		return <div id="App">
			{/*<Header></Header>
			<List></List>*/}
			<footer>
				<NavLink to="/home" activeClassName="activecolor">
					<dl>
						<dt><i className="iconfont icon-home"></i></dt>
						<dd>首页</dd>
					</dl>
				</NavLink>
				<NavLink to="/qiangxian" activeClassName="activecolor">
					<dl>
						<dt><i className="iconfont icon-iconset0330"></i></dt>
						<dd>抢先</dd>
					</dl>
				</NavLink>
				<NavLink to="/fenlei" activeClassName="activecolor">
					<dl>
						<dt><i className="iconfont icon-fenlei"></i></dt>
						<dd>分类</dd>
					</dl>
				</NavLink>
				<NavLink to="/shopping" activeClassName="activecolor">
					<dl>
						<dt><i className="iconfont icon-gouwuche"></i></dt>
						<dd>购物车</dd>
					</dl>
				</NavLink>
				<NavLink to="/regist" activeClassName="activecolor">
					<dl>
						<dt><i className="iconfont icon-geren9"></i></dt>
						<dd>我的银泰</dd>
					</dl>
				</NavLink>
			</footer>
			{this.props.children}
		</div>
	}
}

export default App;