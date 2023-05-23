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
	        	<h2 class="curriculo-generation__data__text">Dados pessoais</h2>
	        	<p class="text-curriculo">${data}</p>
	        </div>
	        <div class="curriculo-generation__meta">
	        	<h2>Objetivo</h2>
	        	<p class="curriculo-generation__meta__paragraph text-curriculo">${meta}</p>
	        </div>
	        <div class="curriculo-generation__training">
	        	<h2>Formação</h2>
	        	<p class="text-curriculo">${training}</p>
	        </div>
	        <div class="curriculo-generation__experience">
	        	<h2>Experiência</h2>
	        	<p class="curriculo-generation__experience__paragraph text-curriculo">${experience}</p>
	        </div>
	        <div class="curriculo-generation__observation">
	        	<h2>Observação</h2>
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
		
		const donwloadConfimerd = document.querySelector('.baixado')
		donwloadConfimerd.classList.add('visible')
		function remiver() {
			donwloadConfimerd.classList.remove('visible')
		}
		setTimeout(remiver, 5000)
		console.log(name, data, meta, training, experience, observation)

	}else{
		alert('Preencha todos os campos obrigatórios.')
	}
	
})

//document.querySelector(".main-container__observation__input-image").addEventListener("change", readImage, false);
const btnDoubt = document.querySelector('.main-container__data__icon')

btnDoubt.addEventListener('click', () => {
	const textDoubt = document.querySelector('.main-container__data__doubt')
	textDoubt.classList.toggle('doubt_visible')
})
