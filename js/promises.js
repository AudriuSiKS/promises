function getJSON(url) {
	return new Promise((resolve, reject) => {
		const request = new XMLHttpRequest();
	    request.overrideMimeType("application/json");
		request.open('GET', url, true);

		//if JSON is invalid syntax
		try {
			request.onload = function () {
				if (request.status == "200") {
					resolve(JSON.parse(request.responseText));
				} else {
					//if server responded with an error
					reject('Rejected with request status: ' + request.status);
				}
			};
		} catch(e) {
			reject(e.message);
		}

		//if communication error occurs
		request.onerror = function() {
			reject('Rejected');
		};

		request.send(null);
	});
}

function report(message) {
	const node = document.createElement('li');
	const textnode = document.createTextNode(message);
	node.appendChild(textnode);
	document.getElementById("myList").appendChild(node);
}

// *****************


getJSON('api/data.json').then(result => {
	console.log(result);
}).catch(error => console.log(error));
