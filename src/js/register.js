// инициализауия конфигурации для формы
const formData = dataConfig()

// получение узла формы
const form = document.getElementById('form')

// рендер формы
renderForm(form, formData)

// инициализация собития на форму
form.addEventListener('submit', event => {
		event.preventDefault()
		const user = {
				name: event.target[0].value,
				email: event.target[1].value,
				phone: event.target[2].value,
				password: event.target[3].value,
		}
		localStorage.user = JSON.stringify(user)
		setTimeout(function(){
				window.location.href = 'login.html';
		}, 2 * 1000);
})

// функция рендера формы
function renderForm(form, arr) {
		// очитстка узла формы если там что то есть
		// на будущее
		if (form.children.length) {
				form.innerHTML = null
		}
		// проход по массиву конфигурации, рендер узлов, навешивание событий
		arr.forEach(data => {
				// если input
				if (data.block === 'input') {
						// создание родителя input
						const domInput = createParent()
						// навешивание события на родителя
						domInput.addEventListener('input', event => {
								const id = event.target.id

								// навешивание стиля на label
								if (event.target.value.length) {
										event.target.parentNode.classList.add('active')
								} else {
										event.target.parentNode.classList.remove('active')
								}

								// маска, если input номера телефона
								if (id === 'phone') {
										event.target.value = phoneMask(event.target.value)
								}

								// проверка input на регулярное выражение
								const regexp = data.regexp.test(event.target.value)

								// проверка повторения пароля
								if (id === 'confirm') {
										// проверка на совпадение паролей
										const confPass = arr.some(a => {
												if (a.id === 'password') {
														return a.valid && a.value === event.target.value
												}
										})
										// функция рендера форм с валидацией
										renderValid(regexp && confPass, data, event)
								}

								// проверка, если input не повторение пароля
								if (id !== 'confirm') {
										// функция рендера форм с валидацией
										renderValid(regexp, data, event)
								}
								// сохранение input в массив
								// на будущее
								data.value = event.target.value

								// валидация формы, активация кнопки формы
								form.children[arr.length-1].children[0].disabled = !formIsValid(arr)
						})

						// рендер input в родителя
						domInput.innerHTML  = createInput(data)
						form.append(domInput)
				}
				if (data.block === 'button') {
						// создание родителя
						const domInput = createParent()
						// рендер button в родителя
						domInput.innerHTML = createButton(data)
						form.append(domInput)
				}
		})
		// блокировка button
		form.children[arr.length-1].children[0].disabled = true
}

// функция валидации формы
function formIsValid(data) {
		return data.some(d => d.valid === false) ? false : true
}

// функция отображения состояния валидации input
function renderValid(isValid, data, event) {
		if (isValid) {
				data.valid = true
				event.target.parentNode.children[0].style.display = 'none'
				event.target.classList.remove(data.isFalse)
				event.target.classList.add(data.isTrue)
		} else {
				data.valid = false
				event.target.parentNode.children[0].style.display = 'inline-block'
				event.target.classList.remove(data.isTrue)
				event.target.classList.add(data.isFalse)
		}
}

// функция создание родителя
function createParent() {
		return document.createElement('div')
}

// функция создание input
function createInput(data) {
		return `
        <label for="${data.id}" class="input">
            ${data.label}
            <span style="display: none">
                ${data.error}
            </span>
            <input 
                id="${data.id}" 
                name="${data.id}" 
                type="${data.type}" 
            />
        </label>
    `
}

// функция создание button
function createButton(data) {
		return `<button id="${data.id}" type="${data.type}">${data.label}</button>`
}

// функция маски input номера телефона
function phoneMask (value) {
		if (value.length < 18) {
				if (/^\d$/i.test(value)) {
						value = '+38'
				}
				if (/^\+\d{2}$/i.test(value)) {
						value += '('
				}
				if (/^\+\d{2}\(\d{3}$/i.test(value)) {
						value += ')'
				}
				if (/^\+\d{2}\(\d{3}\)\d{3}$/i.test(value)) {
						value += '-'
				}
				if (/^\+\d{2}\(\d{3}\)\d{3}-\d{2}$/i.test(value)) {
						value += '-'
				}
		} else {
				value = value.substring(0, 17)
		}
		return value
}

// функция конфигурации
function dataConfig() {
		return [
				{
						value: '',
						block: 'input',
						type: 'text',
						label: 'Name',
						id: 'name',
						error: 'from 3 characters',
						valid: false,
						isTrue: 'input-valid',
						isFalse: 'input-invalid',
						regexp: /^\w{3,20}$/i
				},
				{
						value: '',
						block: 'input',
						type: 'text',
						label: 'Email',
						id: 'mail',
						error: 'Email is not correct',
						valid: false,
						isTrue: 'input-valid',
						isFalse: 'input-invalid',
						regexp: /^\w{4,10}@\w{4,10}\.\w{2,}$/i
				},
				{
						value: '',
						block: 'input',
						type: 'tel',
						label: 'Phone',
						id: 'phone',
						error: 'the number is not complete',
						valid: false,
						isTrue: 'input-valid',
						isFalse: 'input-invalid',
						regexp: /^\+\d{2}\(\d{3}\)\d{3}-\d{2}-\d{2}$/i
				},
				{
						value: '',
						block: 'input',
						type: 'password',
						label: 'Password',
						id: 'password',
						error: 'A-Za-z0-9!*._$%&',
						valid: false,
						isTrue: 'input-valid',
						isFalse: 'input-invalid',
						regexp: /^[A-Za-z0-9!*._$%&]{6,20}$/i
				},
				{
						value: '',
						block: 'input',
						type: 'password',
						label: 'Confirm',
						id: 'confirm',
						error: 'passwords are not identical',
						valid: false,
						isTrue: 'input-valid',
						isFalse: 'input-invalid',
						regexp: /^[A-Za-z0-9!*._$%&]{6,20}$/i
				},
				{
						value: '',
						block: 'button',
						type: 'submit',
						label: 'Registration',
						id: 'button',
						error: 'from 3 characters',
						valid: true,
				}
		]
}
