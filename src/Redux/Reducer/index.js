const reducer=(state=[],action)=>{
	let {type,payload}=action;

	switch(type){
		case "CHANGE_LIST":
		// console.log(payload)
		
			return {...state,...payload}
		default:
			return state;
	}

}

const reducer2=(state=[],action)=>{
	let {type,payload}=action;

	switch(type){
		case "XUANXIANG_LIST":
		
			return {...state,...payload}
		default:
			return state;
	}

}

const reducerZong=(state=[],action)=>{
	let {type,payload}=action;

	switch(type){
		case "FENLEI_LIST":
		console.log(payload)
		
			return {...state,...payload}
		default:
			return state;
	}

}

const reducer3=(state=[],action)=>{
	let {type,payload}=action;

	switch(type){
		case "FENLEI_LIST88":
		console.log(payload)
		
			return {...state,...payload}
		default:
			return state;
	}

}

const reducer4=(state=[],action)=>{
	let {type,payload}=action;

	switch(type){
		case "FENLEI_LIST150":
		console.log(payload)
		
			return {...state,...payload}
		default:
			return state;
	}

}


const reducer5=(state=[],action)=>{
	let {type,payload}=action;

	switch(type){
		case "FENLEI_LIST257":
		console.log(payload)
		
			return {...state,...payload}
		default:
			return state;
	}

}



const reducer6=(state=[],action)=>{
	let {type,payload}=action;

	switch(type){
		case "FENLEI_LIST245":
		console.log(payload)
		
			return {...state,...payload}
		default:
			return state;
	}

}



const reducer7=(state=[],action)=>{
	let {type,payload}=action;

	switch(type){
		case "FENLEI_LIST151":
		console.log(payload)
		
			return {...state,...payload}
		default:
			return state;
	}

}



const reducer8=(state=[],action)=>{
	let {type,payload}=action;

	switch(type){
		case "FENLEI_LIST2":
		console.log(payload)
		
			return {...state,...payload}
		default:
			return state;
	}

}



const reducer9=(state=[],action)=>{
	let {type,payload}=action;

	switch(type){
		case "FENLEI_LIST5":
		console.log(payload)
		
			return {...state,...payload}
		default:
			return state;
	}

}



const reducer10=(state=[],action)=>{
	let {type,payload}=action;

	switch(type){
		case "FENLEI_LIST242":
		console.log(payload)
		
			return {...state,...payload}
		default:
			return state;
	}

}



const reducer11=(state=[],action)=>{
	let {type,payload}=action;

	switch(type){
		case "FENLEI_LIST1":
		console.log(payload)
		
			return {...state,...payload}
		default:
			return state;
	}

}



const reducer12=(state=[],action)=>{
	let {type,payload}=action;

	switch(type){
		case "FENLEI_LIST3":
		console.log(payload)
		
			return {...state,...payload}
		default:
			return state;
	}

}



const reducer13=(state=[],action)=>{
	let {type,payload}=action;

	switch(type){
		case "FENLEI_LIST4":
		console.log(payload)
		
			return {...state,...payload}
		default:
			return state;
	}

}




export {reducer,reducer2,reducer3,reducerZong}