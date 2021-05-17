
import { UserCard } from './user';
import { UserRepo } from './userRepository'
import { UserTable } from './userTable'

let repo = new UserRepo();

repo.getAllUsers()
    .then(response => {
        let table = new UserTable(response);
        const app = document.getElementById('app');
        const modal = document.getElementById('modal');
        app.innerHTML = table.renderTable();

        document.querySelectorAll('.details').forEach(e => e.addEventListener('click', (e) => {
            if(!modal.hasChildNodes()){
            repo.getUserById(e.target.getAttribute('data-id'))
                .then(data => {
                    const userCard = new UserCard();
                    app.style.opacity = 0.3;
                    modal.appendChild(userCard.render(data));
                });
            }
        }));
    });





