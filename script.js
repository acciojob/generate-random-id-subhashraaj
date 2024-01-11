function makeid(l) {
	const char = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890"
	let result = "";
	const characterLength = char.length;
	for(let i=0;i<l;i++){
		result += cha.charAt(Math.floor(Math.random() * characterLength));
	}
	return result;



	
}

// Do not change the code below.
//const l = prompt("Enter a number.");
//alert(makeid(l));
