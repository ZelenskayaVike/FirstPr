const state = {
		email: {
				value: '',
				valid: false,
				isTrue: 'input-valid',
				isFalse: 'input-invalid',
				regexp: /^\w{4,10}@\w{4,10}\.\w{2,}$/i
		},
		password: {
				value: '',
				valid: false,
				isTrue: 'input-valid',
				isFalse: 'input-invalid',
				regexp: /^[A-Za-z0-9!*._$%&]{6,20}$/i
		}
}

const form = document.getElementById('form')
const input = document.querySelectorAll('.form-field')
const button = document.getElementById('button')
button.disabled = true

input.forEach($el => {
		$el.addEventListener('input', event => {
				const reg = state[event.target.name].regexp
				state[event.target.name].value = event.target.value
				if (reg.test(event.target.value)) {
						state[event.target.name].valid = true
						event.target.parentNode.children[0].style.borderColor = 'green'
						event.target.style.borderColor = 'green'
				} else {
						state[event.target.name].valid = true
						event.target.parentNode.children[0].style.borderColor = 'red'
						event.target.style.borderColor = 'red'
				}
				if (state.email.valid && state.password.valid) {
						button.disabled = false
				} else {
						button.disabled = true
				}
		})
})

form.addEventListener('submit', event => {
		event.preventDefault()
		if (!!localStorage.user) {
				const user = JSON.parse(localStorage.user)
				const emailValid = state.email.value === user.email
				const passwordValid = state.password.value === user.password
				if (emailValid && passwordValid) {
						localStorage.isAuth = true
						setTimeout(function(){
								window.location.href = 'profile.html'
						}, 2 * 1000)
						return
				}
		}
		setTimeout(function(){
				window.location.href = 'registr.html'
		}, 2 * 1000)
})
