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
import Card from "../Components/Card";
// import Film from "../Components/Film";
import App from "../Components/App";
import Detail from "../Components/Detail";
import Header from "../Components/Header";
import Qiangxian from "../Components/Qiangxian";

/*import NowPlaying from "../Components/NowPlaying";
import ComingSoon from "../Components/ComingSoon";*/

//jsx 语法 解析 需要react 模块
const router = (
	<Provider store={store}>
	<Router>
		<App>
			<Switch>
			
				<Route path="/card" component={Card}/>
				
				<Route path="/home" component={Home}/>
				<Route path="/detail" component={Detail}/>
				<Route path="/fenlei" component={Fenlei}/>
				<Route path="/qiangxian" component={Qiangxian}/>

				{/*<Route path="/film" render={()=>
					<Film>
						<Switch>
							<Route path="/film/nowplaying" component={NowPlaying}/>
							<Route path="/film/comingsoon" component={ComingSoon}/>
							<Redirect from="/film" to='/film/nowplaying' component={Home} />
						</Switch>
					</Film>
				}/>*/}

				<Redirect from="/" to='/home' component={Home} />

			</Switch>
			

		</App>	
		
	</Router>
	</Provider>
	)



export  default router;