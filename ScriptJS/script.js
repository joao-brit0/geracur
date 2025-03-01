const btnDownload = document.querySelector('.main-container__btndownload')
const btnPreview = document.querySelector('.main-container__btnPreview')
const curriculoMolde = document.querySelector('.curriculo-create')
const curriculumContainer = document.querySelector('.curriculo-generation')

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
	labelBtnColor.style.color = btnColor.value
	console.log(btnColor.value)
})

let training = document.querySelector('.container__training__text')
const btntrainingAdd = document.querySelector(".btn-training-add")
let arrTraining = []

function addTrainingArr() {
	if (training.value != 0) {
		arrTraining.push(training.value)
		const addTrainingText = document.querySelector(".training-add-text")
		addTrainingText.classList.toggle("addVisible")

		btntrainingAdd.style.color = "#12c562"
		setTimeout(() => {
			btntrainingAdd.style.color = "#6990c2"
			training.value = ""
			addTrainingText.classList.toggle("addVisible")
		}, 900);
	
		
		console.log(arrTraining)
	}else{
		noticeNotification("Adicione uma formação.")
	}
	
}

const fontsSelect = document.querySelector('#option-fonts')



const fontCheckBox = document.querySelectorAll("#option-fonts")
for (let indexCheckBox = 0; indexCheckBox < fontCheckBox.length; indexCheckBox++) {
	fontCheckBox[indexCheckBox].addEventListener("change", () => {
		const curriculoMolde = document.querySelector('.curriculo-generation')
		
		if(fontsSelect.value == 'Poppins'){
			curriculoMolde.style.fontFamily = "'Poppins', sans-serif"
			console.log("Font Poppins")
		}
		if(fontsSelect.value == 'Montserrat'){
			curriculoMolde.style.fontFamily = '"Montserrat", sans-serif'
			console.log("Font Montserrat")
		}
		if(fontsSelect.value == 'Roboto'){
			curriculoMolde.style.fontFamily = '"Roboto", sans-serif'
			console.log("Font Roboto")
		}
		if(fontsSelect.value == 'Lato'){
			curriculoMolde.style.fontFamily = '"Lato", sans-serif'
			console.log("Font Lato")
		}
		//curriculoMolde
		//console.log(fontsSelect.value)
	})
	
}

const selectFontSize = document.querySelector('#option-fonts-size')
selectFontSize.addEventListener('change', () => {
	console.log(selectFontSize.value)
	curriculoMolde.style.fontSize = selectFontSize.value + "px"
})



function removeFieldsNotMandatory(){
	let likedin = document.querySelector('.container__linkeDin__text').value
	let likedinField = document.querySelector('.likedin')
	if(likedin == 0){
		likedinField.remove()
	}
	
}



const btnCheckDate = document.querySelector("#btn-toggle")

function createCurriculum() {
	let name = document.querySelector('.container__name__text').value
	let address = document.querySelector('.container__address__text').value
	let email = document.querySelector('.container__email__text').value
	let contact = document.querySelector('.container__contact__text').value
	let meta = document.querySelector('.container__meta__text').value
	let training = document.querySelector('.container__training__text').value
	let experience = document.querySelector('.container__experience__text').value
	let observation = document.querySelector('.container__observation__text').value
	let likedin = document.querySelector('.container__linkeDin__text').value

	
	if (name.length > 0 && meta.length > 0 && experience.length > 0 && arrTraining.length > 0) {

		

		const generation = 
		`<div class="curriculo-generation__name">
	        	<h1 class="curriculo-generation__name__h1">${name}</h1>
	        </div>
			<div class="curriculo-generation-design"></div>
	        <div class="curriculo-generation__address">
	        	<h2 class="curriculo-generation__address__text" style="color:${btnColor.value}">Endereço e Contatos</h2>
				<ul class="text-curriculo-listStyle">
					<li class="text-curriculo dote">End. ${address}</li>
					<li class="text-curriculo dote email-icon">E-mail: ${email}</li>
					<li class="text-curriculo dote">Celular: ${contact}</li>
					<li class="text-curriculo dote likedin">LikedIn: ${likedin}</li>
				</ul>
	        </div>
	        <div class="curriculo-generation__meta">
	        	<h2 style="color:${btnColor.value}">Objetivo</h2>
	        	<p class="curriculo-generation__meta__paragraph text-curriculo">${meta}</p>
	        </div>
	        <div class="curriculo-generation__training">
	        	<h2 style="color:${btnColor.value}">Formação</h2>
				<ul class="curriculo-generation__training-list"></ul>
	        	
	        </div>
	        <div class="curriculo-generation__experience">
	        	<h2 style="color:${btnColor.value}">Experiência</h2>
	        	<p class="curriculo-generation__experience__paragraph text-curriculo">${experience}</p>
	        </div>
	        <div class="curriculo-generation__observation">
	        	<h2 style="color:${btnColor.value}">Observação</h2>
	        	<p class="curriculo-generation__observation__paragraph text-curriculo">${observation}</p>
	        </div>`
	        
	        curriculoMolde.innerHTML = generation

			function creatTraining() {

				const containerGenarationTraining = document.querySelector(".curriculo-generation__training-list")

				for (let indexTraining = 0; indexTraining < arrTraining.length; indexTraining++) {

					let creatTrainingItem = document.createElement("li")
					creatTrainingItem.classList.add("text-curriculo-list")
					creatTrainingItem.textContent = arrTraining[indexTraining]
					let addTrainingDiv = containerGenarationTraining.appendChild(creatTrainingItem)
					
					
				}
				
			}

			

			creatTraining()
			if (btnCheckDate.checked) {
				let textAreaAdd = document.querySelector(".textareaCreat")
				//console.log(textAreaAdd.value)	
				
				const curriculodate = new Date();
				const testantoeDate = curriculodate.toLocaleString('default', { month: 'long' });
				const curriculoYear = curriculodate.getFullYear()
				const dia = String(curriculodate.getDate()).padStart(2, '0');
				const crrDateMonthYear = `${dia} de ${testantoeDate} de ${curriculoYear}`

				const creatDateText = document.createElement("p")
				creatDateText.classList.add("dateTextCrr")
				
				creatDateText.textContent = crrDateMonthYear
				curriculoMolde.appendChild(creatDateText)
			}

			removeFieldsNotMandatory()
		}else{
			noticeNotification('Preencha todos os campos obrigatórios.')
		}

		
}



btntrainingAdd.addEventListener("click", addTrainingArr)

btnPreview.addEventListener("click", () => {
	createCurriculum()
		
})


btnDownload.addEventListener("click", () => { 
	let name = document.querySelector('.container__name__text').value
	let address = document.querySelector('.container__address__text').value
	let email = document.querySelector('.container__email__text').value
	let contact = document.querySelector('.container__contact__text').value
	let meta = document.querySelector('.container__meta__text').value
	let training = document.querySelector('.container__training__text').value
	let experience = document.querySelector('.container__experience__text').value
	let observation = document.querySelector('.container__observation__text').value
	let likedin = document.querySelector('.container__linkeDin__text').value
	

	
	if (name.length > 0 && meta.length > 0 && experience.length > 0 && arrTraining.length > 0) {

		createCurriculum()

		const opt = {
		  margin: 1,
		  filename: 'GeraCu-rriculo.pdf',
		  image: { type: 'jpeg', quality: 0.98 },
		  html2canvas: { scale: 2 },
		  jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
		}

		//addIconsCrr()

		setTimeout(() => {
			html2pdf().set(opt).from(curriculumContainer).save()
		}, 2000);

		//html2pdf().set(opt).from(curriculoMolde).save()
		
		console.log(name, address, meta, training, experience, observation)

	}else {
		if (arrTraining.length == 0) {
			noticeNotification('Você não adicionou sua formação.')
			
		}else{
			noticeNotification('Preencha todos os campos obrigatórios.')
		}
	}
})




const btnDoubt = document.querySelector('.main-container__data__icon')
btnDoubt.addEventListener('click', () => {
	const textDoubt = document.querySelector('.main-container__data__doubt')
	textDoubt.classList.toggle('doubt_visible')
})


const modelCurriculum = document.querySelector('.model-curriculum')
const btnCurriculumModel = document.querySelectorAll('.btn-curriculum-model')
for (let i = btnCurriculumModel.length - 1; i >= 0; i--) {
		btnCurriculumModel[i].addEventListener('click', () => {
		modelCurriculum.classList.toggle('curriculum-model-visible')
		document.querySelector('body').style.overflow = "hidden"
	})
}

document.querySelector('.model-curriculum__btn-close').addEventListener('click', () => {
	modelCurriculum.classList.toggle('curriculum-model-visible')
	document.querySelector('body').style.overflow = "visible"
})
const metaModal = document.querySelector('.container-meta-modal')

/*if (localStorage.getItem("visualizou") == true){
	metaModal.classList.remove('modalVisible')
}*/

const metaModalBtn = document.querySelector('.container-meta-modal-content__btn-close')
window.addEventListener('load', () => {
	setTimeout(metaModalLoad, 7000)
})
const keyName = "keyVisual"
const visualizouModal = "notVisual"

function metaModalLoad() {
	if(localStorage.getItem(keyName) == "notVisual"){
		metaModal.classList.remove('modalVisible')
	}else{
		metaModal.classList.add('modalVisible')
		setTimeout(metaModalRemove, 7000)
	}
	
	
	//document.querySelector('body').style.overflow = "hidden"
}
function metaModalRemove() {
	if (metaModal.classList.contains('modalVisible')) {
		metaModal.classList.remove('modalVisible')
	}
}


metaModalBtn.addEventListener('click', () => {
	metaModal.classList.remove('modalVisible')
	localStorage.setItem(keyName, visualizouModal)
	
})
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

const simpleCarousel = document.querySelector(".js-carousel--simple");
 
new Glider(simpleCarousel, {
  slidesToShow: 3,
  slidesToScroll: 3,
  draggable: true,
  dots: ".js-carousel--simple-dots",
  arrows: {
    prev: ".js-carousel--simple-prev",
    next: ".js-carousel--simple-next",
  },
  responsive: [
    {
      breakpoint: 400,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
  ]
});

let countNotification = 0
function noticeNotification(mensagem){
	if(countNotification == 0){
		const notifiCationContainer = document.querySelector('.notification-container')
		const notification = `
			<article class="notice-notification-card">
				<p class="notification-card__text">${mensagem}</p>
			</article>`
		notifiCationContainer.innerHTML+= notification
		countNotification++
		removeNotification()
	}
}

function removeNotification(){
	console.log('Chamou func')
	const noticeNotificationCard = document.querySelector('.notice-notification-card')
	setTimeout(() => {
		noticeNotificationCard.remove()
		countNotification = 0
	}, 4000)
}



//console.log(crrDateMonthYear)