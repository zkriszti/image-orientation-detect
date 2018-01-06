'use strict';
/* Detect orientation */

let images = document.querySelectorAll('.img-container img');
let i;
let captionOri;
let ratio;
let landscapes = [];
let lsCollection = document.getElementById('landscape-collection');
let portraits = [];
let pCollection = document.getElementById('portrait-collection');

function calculateOrientation() {
	
	for (i = 0; i < images.length; i++) {
		ratio = images[i].clientWidth / images[i].clientHeight;
		captionOri = images[i].nextElementSibling;

		if (ratio < 1){
			captionOri.innerHTML = 'portrait';
			portraits.push(images[i]);
			let newPImg = images[i].cloneNode(false);
			pCollection.appendChild(newPImg);
		} else if (ratio === 1) {
			captionOri.innerHTML = 'square';
		} else {
			captionOri.innerHTML = 'landscape';
			landscapes.push(images[i]);
			let newLsImg = images[i].cloneNode(false);
			lsCollection.appendChild(newLsImg);
		}
	} 
}
