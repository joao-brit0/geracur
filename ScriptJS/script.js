const btnDownload = document.querySelector('.container__btndownload')
btnDownload.addEventListener("click", () => {
	let name = document.querySelector('.container__name__text').value
	let address = document.querySelector('.container__address__text').value
	let meta = document.querySelector('.container__meta__text').value
	let training = document.querySelector('.container__training__text').value
	let experience = document.querySelector('.container__experience__text').value
	let observation = document.querySelector('.container__observation__text').value

	const curriculoMolde = document.querySelector('.curriculo-generation')

	if (name.length > 0 && address.length > 0 && meta.length > 0 && training.length > 0 && experience.length > 0) {

		const generation = 
		`<div class="curriculo-generation__name">
	        	<h1 class="curriculo-generation__name__h1">${name}</h1>
	        </div>
	        <div class="curriculo-generation__address">
	        	<h2 class="curriculo-generation__address__text">Endereço</h2>
	        	<p>${address}</p>
	        </div>
	        <div class="curriculo-generation__meta">
	        	<h2>Objetivo</h2>
	        	<p class="curriculo-generation__meta__paragraph">${meta}</p>
	        </div>
	        <div class="curriculo-generation__training">
	        	<h2>Formação</h2>
	        	<p>${training}</p>
	        </div>
	        <div class="curriculo-generation__experience">
	        	<h2>Experiência</h2>
	        	<p class="curriculo-generation__experience__paragraph">${experience}</p>
	        </div>
	        <div class="curriculo-generation__observation">
	        	<h2>Observação</h2>
	        	<p class="curriculo-generation__observation__paragraph">${observation}</p>
	        </div>`
		curriculoMolde.innerHTML = generation
		const opt = {
		  margin: 1,
		  filename: 'GeraCu-rriculo.pdf',
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
		console.log(name, address, meta, training, experience, observation)
	}else{
		alert('Preencha todos os campos obrigatórios.')
	}
	
})