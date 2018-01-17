var express = require('express');
var router = express.Router();
var UserModel = require("../model/UserModel.js");
var GoodsModel = require("../model/GoodsModel.js");

/* GET users listing. */
// router.post('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.post('/login', function(req, res, next) {
	console.log("000");
	UserModel.find({username: req.body.user, psw: req.body.psw}, (err, docs)=>{
		var result = {
			code: 1,
			message:'登陆成功'
		}
		if(err || docs.length == 0) {
			result.code = -110;
			result.message = "登录失败";

		}else{
			req.session.username=req.body.user;
			result.username1 = req.body.user;
		}
			
		console.log(111);
		console.log(req.session);
		res.send(JSON.stringify(result));
	})
});


router.post('/regist',function(req, res, next){
	UserModel.find({username: req.body.user},function (err, docs) {
		if(docs.length > 0) {
			res.send("该用户已经被注册");
			return;
		}
		let user = new UserModel();
		user.username = req.body.username;
		user.psw = req.body.psw;
		user.save((err)=>{
			if(err) {
				res.send("注册失败");
			} else {
				res.send("注册成功");
			}
		});
	});

})

router.get('/judge',function(req,res,next){
	var result = {
			code: 1,
			message:'存在session',
			username:req.session.username
		}
	if(req.session.username){
		console.log(req.session);
		res.send(JSON.stringify(result));
	}else{
		result.code=-99;
		res.send(result);
		console.log(req.session);
		return;
	}

})


router.post('/create', function(req, res, next) {
	  if(!req.session || !req.session.username) {
		var result = {
			code: -77,
			message: "您还没有登录，请先登录"
		}
		res.send(JSON.stringify(result));
		return;
	  }

	  var goodsM = new GoodsModel();
	  goodsM.username = req.session.username;
	  goodsM.goods_name = req.body.name;
	  goodsM.price = req.body.price;
	  goodsM.img_url = req.body.imgUrl;
	  goodsM.count = req.body.count;

	  goodsM.save(function(err){
		var result = {
			code: 1
		} 
		if(err) {
			result.code = -88;
			result.message = "保存失败";
		}
		res.send(JSON.stringify(result));
	  })
});


router.get('/goodsShow', function(req, res, next) {
	console.log("000");
	
	GoodsModel.find({username: req.session.username}, (err, docs)=>{
		var result = {
			code: 1,
			message:'获取成功'
		}
		
		if(err || docs.length == 0) {
			result.code = -66;
			result.message = "无效的用户名";
			res.send(JSON.stringify(result));
			return;
		}
		res.send(docs);
		
	})
});

router.get('/destroy',function(req,res,next){
	req.session.destroy((err)=>{
		if(!err){
			res.send('success')
		}else{
			res.send('fail')
		}
	})

})


module.exports = router;
