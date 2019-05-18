// Helper
function stringify(entries) {
	const obj = {}
	for (const [k, v] of entries) {
		obj[k] = v
	}
	return JSON.stringify(obj)
}

// Pega p formulário
const frm = document.querySelector('#enterMatrix')

// Manipulador
frm.addEventListener('submit', async event => {
	// Evita que o submit seja disparado
	event.preventDefault()

	// Válida o formulário
	if (frm.checkValidity() === false) {
		console.warn('Form inválido')
		return
	}

	// Coloca os dados do formulário no FormData
	const formData = new FormData(frm)

	// Envia os dados
	try {
		const response = await fetch(frm.action, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: stringify(formData.entries())
		})
		const json = await response.json()
		console.info(json)
	} catch (error) {
		console.error(error)
	}
})
