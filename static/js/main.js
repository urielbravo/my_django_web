/* 
    This is the functionality of the button
    that makes the sidebar appear when on mobile
*/

// getting the elements we need
const btn = document.querySelector('#mobile-menu-button')
const sidebar = document.querySelector('#sidebar')

// add event listener for click
btn.addEventListener('click', () => {
  sidebar.classList.toggle('-translate-x-full')
})


/* 
    This is the rotation of the python icon
*/

let looper
let degrees = 0

function rotateAnimation(el,speed){
	const elem = document.getElementById(el)
	elem.style.transform = "rotate("+degrees+"deg)"
	looper = setTimeout('rotateAnimation(\''+el+'\','+speed+')',speed)
	degrees++

	if(degrees > 359){
		degrees = 1;
	}
}

rotateAnimation('rotate', 10)

// carousel functionality

const imgs = document.getElementById('image-container')
const imgList = document.querySelectorAll('#image-container img')
let idx = 0

changeImg = () => {
	if (idx > imgList.length - 1) {
		imgs.classList.remove('-translate-x-200')
		idx = 0
	} else if (idx === 1) {
		imgs.classList.remove('-translate-x-200')
		imgs.classList.add('-translate-x-full')
	} else if (idx === 2) {
		imgs.classList.remove('-translate-x-full')
		imgs.classList.add('-translate-x-200')
	} else if (idx === 0) {
		
		imgs.classList.add('-translate-x-0')
	}
}

run = () => {
	idx++
	changeImg()
}

let interval = setInterval(run, 3000)
