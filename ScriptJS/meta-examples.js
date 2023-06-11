const metaBtnCopy = document.querySelectorAll('.meta-examples-container__card__button')
let metaText = document.querySelectorAll(".meta-examples-container__card__text");

for (var i = metaText.length - 1; i >= 0; i--) {
	metaBtnCopy[i].addEventListener('click', clipboardCopy)
	let metaTextCopy = metaText[i].textContent
	async function clipboardCopy() {
 		await navigator.clipboard.writeText(metaTextCopy);
	}
}


console.log(metaBtnCopy, metaText)
  