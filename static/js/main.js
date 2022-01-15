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
    This is the rotation of the pytho icon
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
