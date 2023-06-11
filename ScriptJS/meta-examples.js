const metaBtnCopy = document.querySelectorAll('.meta-examples-container__card__button')
let metaText = document.querySelectorAll(".meta-examples-container__card__text");

for (var i = metaText.length - 1; i >= 0; i--) {
	metaBtnCopy[i].addEventListener('click', clipboardCopy)
	let metaTextCopy = metaText[i].textContent
	async function clipboardCopy() {
 		await navigator.clipboard.writeText(metaTextCopy);
	}
}
const btnMenu = document.querySelector('.btn-menu-mobile')
const btnCloseMenuMobile = document.querySelector('.btn-menu-mobile-close')
const listMenuMobile = document.querySelector('.n-container__mobile-menu')
btnMenu.addEventListener('click', () => {
	listMenuMobile.classList.toggle('open')
	btnCloseMenuMobile.classList.toggle('btnClose')
	btnMenu.classList.toggle('btnClose')
	console.log('test')
})
btnCloseMenuMobile.addEventListener('click', () => {
	listMenuMobile.classList.toggle('open')
	btnCloseMenuMobile.classList.toggle('btnClose')
	btnMenu.classList.toggle('btnClose')
})


console.log(metaBtnCopy, metaText)
  