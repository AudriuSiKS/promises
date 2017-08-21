function getJSON(url, callback) {
	const request = new XMLHttpRequest();
    request.overrideMimeType("application/json");
	request.open('GET', url, true);

	request.onload = function () {
		if (request.status == "200") {
			callback(JSON.parse(request.responseText));
		}
	};

	request.send(null);  
}

function report(message) {
	const node = document.createElement('li');
	const textnode = document.createTextNode(message);
	node.appendChild(textnode);
	document.getElementById("myList").appendChild(node);
}

// *****************


