//your JS code here. If required.
const table = document.querySelector("table");
const content = document.getElementById("output");

function getRandomDelay() {
  return Math.floor(Math.random() * 2000) + 1000;
}


function p1(){
	let delay = getRandomDelay();
	let start = Date.now();
	
	return new Promise((resolve) => {
		setTimeout(() => {
			let end = Date.now();
			let duration = (end - start) / 1000;
			resolve(duration)
		}, delay);
	});
}

function p2(){
	let delay = getRandomDelay();
	let start = Date.now();
	
	return new Promise((resolve) => {
		setTimeout(() => {
			let end = Date.now();
			let duration = (end - start) / 1000;
			resolve(duration)
		}, delay);
	});
}

function p3(){
	let delay = getRandomDelay();
	let start = Date.now();
	
	return new Promise((resolve) => {
		setTimeout(() => {
			let end = Date.now();
			let duration = (end - start) / 1000;
			resolve(duration)
		}, delay);
	});
}

let promises = [p1(), p2(), p3()];
Promise.all(promises).then((data) => {
	content.innerHTML = "";
	for (let i = 0; i < data.length; i++) {
		let row = document.createElement("tr");
		
		let nameCell = document.createElement("td");
		nameCell.textContent = `Promise ${i + 1}`;
	
		let timeCell = document.createElement("td");
		timeCell.textContent = data[i].toFixed(3);
	
		row.appendChild(nameCell);
		row.appendChild(timeCell);
	
		content.appendChild(row);
	}

	let totalTime = Math.max(...data).toFixed(3);
	
	let totalRow = document.createElement("tr");
	
	let totalLabel = document.createElement("td");
	totalLabel.textContent = "Total";
	
	let totalValue = document.createElement("td");
	totalValue.textContent = totalTime;
	
	totalRow.appendChild(totalLabel);
	totalRow.appendChild(totalValue);
	
	content.appendChild(totalRow);

})