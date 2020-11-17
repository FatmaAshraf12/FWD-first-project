


var sections = document.querySelectorAll("section");
var navbar_list = document.getElementById('navbar__list');


onscroll = function(){
  var pos= document.documentElement.scrollTop;
	sections.forEach((sec)=>{
		if(pos>=sec.offsetTop - sec.offsetHeight * 0.25  &&pos<sec.offsetTop+sec.offsetHeight- sec.offsetHeight * 0.25){
			removeActive();
			addActive(sec.attributes.id.value);
		}
	})
}


function removeActive(){

	sections.forEach((sec)=>{
		sec.classList.remove("your-active-class");
	})

	var actives = document.querySelectorAll(".active");
	actives.forEach((el)=>{
			el.classList.remove("active");
		})   		
}


// build the nav
function build_nav(){
	var fragment = document.createDocumentFragment();
	sections.forEach((section)=>{
		let li = document.createElement("li");
		var sec=section.getAttribute('id');
		var text = section.getAttribute("data-nav");
		li.innerHTML='<a href="#' + sec + '">'+`${text}`+'</a>';
		var a = 'a[href^="#"]';
		a.onclick= function(e){  // scroll to section
			 e.preventDefault(); 
			sec.scrollIntoView({behavior:'smooth'});
		}
		fragment.appendChild(li);
	})
	navbar_list.appendChild(fragment);
	
}

//add active
function addActive(id){

	var nav_item = `a[href="#${id}"]`;
	document.querySelector(nav_item).className="active";
	document.getElementById(id).className = "your-active-class";

}


build_nav();




