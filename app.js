function generateColor() {
	let hexCodes = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
	let color = "#";
	for (i = 0; i < 6; i++) {
		let randomNumber = Math.round(Math.random() * 15);
		let colorNumber = hexCodes[randomNumber];
		color += colorNumber;
	};

	document.getElementById('container').style.backgroundColor = color;
	document.getElementById('output').style.color = color;
	document.getElementById('output').innerHTML = color;

};
