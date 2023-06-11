const btnDownload = document.querySelector('.main-container__btndownload')

function readImage() {
    if (this.files && this.files[0]) {
        let file = new FileReader();
        file.onload = function(e) {
            document.querySelector(".img-upload").src = e.target.result;
        };       
        file.readAsDataURL(this.files[0]);
    }
}
function imgVisible() {
	const foto = document.querySelector(".img-upload")
	foto.classList.add('img-visible')
}
document.querySelector(".main-container__observation__input-image").addEventListener("change", readImage, false);
document.querySelector(".main-container__observation__input-image").addEventListener("change", imgVisible)


const btnColor = document.querySelector(".main-container__btn-color")
const labelBtnColor = document.querySelector('.main-container__btn-color-label')
btnColor.addEventListener('change', () => {
	labelBtnColor.style.background = btnColor.value
	console.log(btnColor.value)
})


btnDownload.addEventListener("click", () => { 
	let name = document.querySelector('.container__name__text').value
	let data = document.querySelector('.container__data__text').value
	let meta = document.querySelector('.container__meta__text').value
	let training = document.querySelector('.container__training__text').value
	let experience = document.querySelector('.container__experience__text').value
	let observation = document.querySelector('.container__observation__text').value

	const curriculoMolde = document.querySelector('.curriculo-generation')
	if (name.length > 0 && data.length > 0 && meta.length > 0 && training.length > 0 && experience.length > 0) {

		const generation = 
		`<div class="curriculo-generation__name">
	        	<h1 class="curriculo-generation__name__h1">${name}</h1>
	        </div>
	        <div class="curriculo-generation__data">
	        	<h2 class="curriculo-generation__data__text" style="color:${btnColor.value}">Dados pessoais</h2>
	        	<p class="text-curriculo">${data}</p>
	        </div>
	        <div class="curriculo-generation__meta">
	        	<h2 style="color:${btnColor.value}">Objetivo</h2>
	        	<p class="curriculo-generation__meta__paragraph text-curriculo">${meta}</p>
	        </div>
	        <div class="curriculo-generation__training">
	        	<h2 style="color:${btnColor.value}">Formação</h2>
	        	<p class="text-curriculo">${training}</p>
	        </div>
	        <div class="curriculo-generation__experience">
	        	<h2 style="color:${btnColor.value}">Experiência</h2>
	        	<p class="curriculo-generation__experience__paragraph text-curriculo">${experience}</p>
	        </div>
	        <div class="curriculo-generation__observation">
	        	<h2 style="color:${btnColor.value}">Observação</h2>
	        	<p class="curriculo-generation__observation__paragraph text-curriculo">${observation}</p>
	        </div>`
	        
	        curriculoMolde.innerHTML = curriculoMolde.innerHTML + generation
		
		const opt = {
		  margin: 1,
		  filename: 'GeraCu-rriculo.pdf',
		  image: { type: 'jpeg', quality: 0.98 },
		  html2canvas: { scale: 2 },
		  jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
		}

		html2pdf().set(opt).from(curriculoMolde).save()
		
		console.log(name, data, meta, training, experience, observation)

	}else{
		alert('Preencha todos os campos obrigatórios.')
	}
	
})


const btnDoubt = document.querySelector('.main-container__data__icon')
btnDoubt.addEventListener('click', () => {
	const textDoubt = document.querySelector('.main-container__data__doubt')
	textDoubt.classList.toggle('doubt_visible')
})


const modelCurriculum = document.querySelector('.model-curriculum')
const btnCurriculumModel = document.querySelector('.btn-curriculum-model')
btnCurriculumModel.addEventListener('click', () => {
	modelCurriculum.classList.toggle('curriculum-model-visible')
	document.querySelector('body').style.overflow = "hidden"
})
document.querySelector('.model-curriculum__btn-close').addEventListener('click', () => {
	modelCurriculum.classList.toggle('curriculum-model-visible')
	document.querySelector('body').style.overflow = "visible"
})
const metaModal = document.querySelector('.container-meta-modal')
const metaModalBtn = document.querySelector('.container-meta-modal-content__btn-close')
window.addEventListener('load', () => {
	setTimeout(metaModalLoad, 7000)
})
function metaModalLoad() {
	metaModal.classList.add('modalVisible')
	setTimeout(metaModalRemove, 7000)
	//document.querySelector('body').style.overflow = "hidden"
}
function metaModalRemove() {
	if (metaModal.classList.contains('modalVisible')) {
		metaModal.classList.remove('modalVisible')
	}
}
metaModalBtn.addEventListener('click', () => {
	metaModal.classList.remove('modalVisible')
})
const btnMenu = document.querySelector('.btn-menu-mobile')
const btnCloseMenuMobile = document.querySelector('.btn-menu-mobile-close')
const listMenuMobile = document.querySelector('.n-container__mobile-menu')
btnMenu.addEventListener('click', () => {
	listMenuMobile.classList.toggle('open')
	btnCloseMenuMobile.classList.toggle('btnClose')
	btnMenu.classList.toggle('btnClose')
})
btnCloseMenuMobile.addEventListener('click', () => {
	listMenuMobile.classList.toggle('open')
	btnCloseMenuMobile.classList.toggle('btnClose')
	btnMenu.classList.toggle('btnClose')
})
