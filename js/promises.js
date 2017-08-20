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

// ********************** 

let ninja, mapInfo, plan;

getJSON('api/ninja', result => {
	ninja = result;
	actionItemArrived();
});

getJSON('api/mapInfo', result => {
	mapInfo = result;
	actionItemArrived();
});

getJSON('api/plan', result => {
	plan = result;
	actionItemArrived();
});

function actionItemArrived() {
	if (ninja != null && mapInfo != null && plan != null) {
		console.log('The ninja is informed and ready for action');
	}
};