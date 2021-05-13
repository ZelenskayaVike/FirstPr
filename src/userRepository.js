
export class UserRepo {

    constructor() {
        this.BASE_URL = 'https://jsonplaceholder.typicode.com/';
    }

    getData(url){
        return fetch(url).then(response=>response.json());
    }
    getUserById(id) {
        return this.getData(this.BASE_URL.concat('users/').concat(id));
    }

    getAllUsers() {
        return this.getData(this.BASE_URL.concat('users'));
    }
}