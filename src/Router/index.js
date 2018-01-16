import React from "react";
import store from "../Redux/Store";
import {Provider} from "react-redux";
// import {Provider} from "react-redux";
// import store from "@/Redux/Store";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom'



import Home from "../Components/Home";
import Fenlei from "../Components/Fenlei";


import App from "../Components/App";
import Detail from "../Components/Detail";

import Qiangxian from "../Components/Qiangxian";
import Shopping from '../Components/Shopping';


//jsx 语法 解析 需要react 模块
const router = (
	<Provider store={store}>
	<Router>
		<App>
			<Switch>
			
				
				
				<Route path="/home" component={Home}/>
				<Route path="/fenlei" component={Fenlei}/>
				<Route path="/qiangxian" component={Qiangxian}/>
				<Route path="/shopping" component={Shopping}/>
				<Route path="/detail/:index" component={Detail}/>
				<Redirect from="/" to='/home' component={Home} />

			</Switch>
			

		</App>	
		
	</Router>
	</Provider>
	)



export  default router;