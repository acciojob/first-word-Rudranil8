function firstWord(s) {
	
	let x=s.trim();
	let str="";
	for(let i=0; i<x.length; i++){
		if(x[i]==" "){
			return str;
		}
		else{
			str+=x[i];
		}
	}
}
const s = prompt("Enter String:");
alert(firstWord(s));
