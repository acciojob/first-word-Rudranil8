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
	return str;
	// let y=s.trim();
	// let x=y.split(" ");
	// return x[0];
}
const s = prompt("Enter String:");
alert(firstWord(s));