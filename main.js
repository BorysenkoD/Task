function change_color(elem, color) {  
 elem.split(',').forEach(function(el){
    document.getElementById(el).style.background = color;
 }) 
};

window.onload = function(){
	document.body.style.backgroundColor = "white";
};  