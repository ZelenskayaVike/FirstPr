
let data, i=0,  name=[], phone=[], email=[], dataMas=[], UserMass=[];
fetch('https://jsonplaceholder.typicode.com/users')
    .then(( res)=>{
        return res.json()
    })
    .then((data)=> {
        class User {
            constructor(namF, phoneF, emailF) {
                this.name = namF;
                this.phone = phoneF;
                this.email = emailF;
            }
        }
        dataMas.push(data);

        name.push(dataMas[0][1].name);
        phone.push(dataMas[0][1].phone);
        email.push(dataMas[0][1].email);
        const user1=new User(name[0],phone[0], email[0]);
        UserMass.push(user1)

        name.push(dataMas[0][2].name);
        phone.push(dataMas[0][2].phone);
        email.push(dataMas[0][2].email);
        const user2=new User(name[1],phone[1], email[1])
        UserMass.push(user2);

        name.push(dataMas[0][3].name);
        phone.push(dataMas[0][3].phone);
        email.push(dataMas[0][3].email);
        const user3=new User(name[2],phone[2], email[2]);
        UserMass.push(user3);

        name.push(dataMas[0][4].name);
        phone.push(dataMas[0][4].phone);
        email.push(dataMas[0][4].email);
        const user4=new User(name[3],phone[3], email[3]);
        UserMass.push(user4);


        name.push(dataMas[0][5].name);
        phone.push(dataMas[0][5].phone);
        email.push(dataMas[0][5].email);
        const user5=new User(name[4],phone[4], email[4]);
        UserMass.push(user5);

        name.push(dataMas[0][6].name);
        phone.push(dataMas[0][6].phone);
        email.push(dataMas[0][6].email);
        const user6=new User(name[5],phone[5], email[5]);
        UserMass.push(user6);

        name.push(dataMas[0][7].name);
        phone.push(dataMas[0][7].phone);
        email.push(dataMas[0][7].email);
        const user7=new User(name[6],phone[6], email[6]);
        UserMass.push(user7);

        name.push(dataMas[0][8].name);
        phone.push(dataMas[0][8].phone);
        email.push(dataMas[0][8].email);
        const user8=new User(name[7],phone[7], email[7]);
        UserMass.push(user8);

        name.push(dataMas[0][9].name);
        phone.push(dataMas[0][9].phone);
        email.push(dataMas[0][9].email);
        const user9=new User(name[8],phone[8], email[8]);
        UserMass.push(user9);
    })
console. log(UserMass)


class createTable {
    constructor(rows, cols) {
        this.rowNum = rows;
        this.colNum = cols;
        this.table = document.createElement('table');
    }
    make() {
        for (let i = 0; i < this.rowNum; i++) {
            this.table.appendChild(this.addRow(i));
        }
        return this;
    }
    addRow(n) {
        let tr = document.createElement('tr');
        for (let i = 0; i < this.colNum; i++) {
            tr.appendChild(this.addCol(n, i));
        }
        return tr;
    }
    addCol(n, i) {
        let td = document.createElement('td');
        td.textContent = n + '.' + i;
        return td;
    }
    output(selector, add) {
        let el = document.querySelector(selector);
        if (!add) {
            el.textContent = '';
        }
        el.appendChild(this.table);
    }
}
    const  ct = new createTable(row.value, col.value).make().output('.output', false);
console.log(ct)