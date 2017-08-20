function getJSON(url, callback) {
	var xobj = new XMLHttpRequest();
	    xobj.overrideMimeType("application/json");
	xobj.open('GET', url, true);
	xobj.onreadystatechange = function () {
	      if (xobj.readyState == 4 && xobj.status == "200") {
	        callback(JSON.parse(xobj.responseText));
	      }
	};
	xobj.send(null);  
}

function report(message) {
	const node = document.createElement('li');
	const textnode = document.createTextNode(message);
	node.appendChild(textnode);
	document.getElementById("myList").appendChild(node);
}

// ********************** 

report('At the code start');

const ninjaDelayedPromise = new Promise((resolve, reject) => {
	report('ninjaDelayedPromise executor');
	setTimeout(() => {
		report(' Resolving ninjaDelayedPromise');
		resolve('Hattori');
	}, 500);
})

//ninjaDelayedPromise is in pending state

if (ninjaDelayedPromise !== null) {
	report('After creating ninjaDelayedPromise');
}

ninjaDelayedPromise.then(ninja => {
	if (ninja === 'Hattori') {
		report('ninjaDelayedPromise resolved with Hattori');
	}
});

const ninjaImmediatePromise = new Promise((resolve, reject) => {
	report('ninjaImmediatePromise executor. Immediate resolve.');
	resolve('Yoshi'); //The promise is immedietely resolved
});

//ninjaImmediatePromise state is resolved

ninjaImmediatePromise.then(ninja => {
	if (ninja === 'Yoshi') {
		//even is the promise is resolved, the callback is called after the code in current event loop step is executed.
		report('ninjaImmediatePromise resolve handled with Yoshi')
	}
})

report('At the code end');
