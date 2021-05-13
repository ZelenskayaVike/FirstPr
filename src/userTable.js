export class UserTable {
    constructor(users) {
        this.users = users;
    }

    renderTable() {
        return `<table class='table table-striped'>
                    <thead>
                        <tr>
                             <th>#</th>
                             <th>Name</th>
                             <th>Email</th> 
                             <th>PhoneNumber</th> 
                             <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${this.appendData()}
                    </tbody>
                </table>`
    }

    appendData() {
        return this.users.map((user, idx) => {
            return `<tr>
                        <td>${idx + 1}</td>
                        <td>${user.name}</td>
                        <td>${user.email}</td>
                        <td>${user.phone}</td>
                        <td><button type="button" data-id='${user.id}' class="btn btn-info btn-lg details" data-toggle="modal" data-target="#myModal">+</button></td>
                    </tr>`
        }).join('');
    }
}