if (!localStorage.isAuth) {
		window.location.href = 'login.html'
} else {
		const state =  !!localStorage.profileState ? JSON.parse(localStorage.profileState) : []
		let stateArea = ''

		const title = document.querySelector('h2')
		const logout = document.getElementById('logout')
		const button = document.getElementById('button')
		const record = document.getElementById('record')
		const comment = document.querySelector('div.comment-block')

		renderCommit(state, comment)

		const name = ' ' + JSON.parse(localStorage.user).name
		title.innerText += name

		record.addEventListener('input', e => {
				stateArea = e.target.value
		})

		button.addEventListener('click', e => {
				if (!stateArea) {
						alert('Поле ввода пустое')
						return
				}
				state.push({id: Date.now(), value: stateArea})
				renderCommit(state, comment)
				record.value = ''
				stateArea = ''
		})

		comment.addEventListener('click', e => {
				if (e.target.nodeName === 'BUTTON') {
						const isDel = confirm('Вы уверены что хотите кдалить?')
						if (isDel) {
								const id = +e.target.dataset.id
								removeCommit(state, id)
								renderCommit(state, comment)
						}
				}
		})
		logout.addEventListener('click', e => {
				localStorage.profileState = JSON.stringify(state)
				localStorage.isAuth = true
				setTimeout(function(){
						window.location.href = 'login.html'
				}, 2 * 1000)
		})

}

function removeCommit(state, id) {
		const idx = state.findIndex(s => s.id === id)
		state.splice(idx, 1)
}

function renderCommit(state, comment) {
		comment.innerHTML = null
		state.forEach(st => {
				comment.append(createCommit(st))
		})
}

function createCommit(st) {
		const div = document.createElement('div')
		div.classList.add('comment')
		div.id = st.id
		div.innerText = st.value
		div.append(createButton(st.id))
		return div
}

function createButton(id) {
		const button = document.createElement('button')
		button.type = 'button'
		button.innerText = 'Удалить'
		button.dataset.id = id
		button.style.float = 'right'
		return button
}
