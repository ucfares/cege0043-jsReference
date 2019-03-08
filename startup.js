function startup() {
	document.addEventListener('DOMContentLoaded', function(){
		zoomOnMap();
	},false)
	document.addEventListener('DOMContentLoaded', function(){
		trackAndCircle();
	},false);
	document.addEventListener('DOMContentLoaded', function(){
		getPort();
	},false);
}
function loadW3HTML() {
	w3.includeHTML();
}