const reducer=(state={},action)=>{
	let {type,payload}=action;

	switch(type){
		case "CHANGE_LIST":
		// console.log(payload)
		
			return {...state,...payload}
		default:
			return state;
	}

}

const reducer2=(state={},action)=>{
	let {type,payload}=action;

	switch(type){
		case "XUANXIANG_LIST":
		console.log(payload)
		
			return {...state,...payload}
		default:
			return state;
	}

}

export {reducer,reducer2}