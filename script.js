function firstWord(s) {
	let x=s.trim();
	let str="";
	for(let i=0; i<s.length; i++){
		if(s[i]==" "){
			return str;
		}
		else{
			str+=s[i];
		}
	}
}



const s = prompt("Enter String:");
alert(firstWord(s));
