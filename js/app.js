//Secret Menu Challenge
//Add event listeners to the following:


/*1) to the navmenu items (Home, Location, Blog) that will show and hide the contents for that specific navmenu item.*/

var listNavs = document.getElementsByClassName('navi');

for (var i=0; i<listNavs.length; i++){
  listNavs[i].addEventListener('click', showText);
}

function showText(){
  var reveal = this.querySelectorAll('.inner')[0];
  if(reveal.style.display === 'none'){
    reveal.style.display = 'block';
  }else{
    reveal.style.display = 'none';
  }
}



/*2) to each restaurant name that will show and hide (toggle) the secret menu item for that particular restaurant.*/

var secretMenu = document.getElementsByClassName('name');

for(var i = 0; i<secretMenu.length; i++){
  secretMenu[i].addEventListener('click', showItem);
}

function showItem(){
  var showGoods = this.querySelectorAll('.menu')[0];
  if (showGoods.style.display === 'none'){
    showGoods.style.display = 'block';
  }else{
    showGoods.style.display = 'none';
  }
}

/*3) to the thumbs down icon that will add a count (counter) for each time the icon is clicked on.*/


var thumb = document.getElementsByClassName('thumb');


for (var i = 0; i<thumb.length; i++){
thumb[i].addEventListener('click', countOn);
var newP = document.createElement('p');
newP.className = 'countHere';
thumb[i].appendChild(newP);
}

function countOn(){
  var showCount = this.querySelectorAll('.countHere')[0];
  ++showCount.innerHTML;
}