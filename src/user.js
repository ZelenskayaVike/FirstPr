export class UserCard {

  render(user) {
    var div = document.createElement('div');
    div.classList.add('modal-dialog');

    div.style.position='fixed';
    div.style.top='50%';
    div.style.left='50%';
    div.style.transform='translate(-50%, -50%)';
    div.style.width='500px';

console.log(user)

    div.innerHTML = `<div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title">${user.name}</h4>
          </div>
          <div class="modal-body">
            <div class="row">
                <div class="col-sm-6">Id</div>
                <div class="col-sm-6">${user.id}</div>
             </div>
             <div class="row">
                <div class="col-sm-6">Name</div>
                <div class="col-sm-6">${user.username}</div>
             </div>
             <div class="row">
                <div class="col-sm-6">Email</div>
                <div class="col-sm-6">${user.email}</div>
             </div>
             <div class="row">
                <div class="col-sm-6">City</div>
                <div class="col-sm-6">${user.address.city}</div>
             </div>
             <div class="row">
                <div class="col-sm-6">Street</div>
                <div class="col-sm-6">${user.address.street}</div>
             </div>
             <div class="row">
                <div class="col-sm-6">Suite</div>
                <div class="col-sm-6">${user.address.suite}</div>
             </div>
             <div class="row">
                <div class="col-sm-6">Zip</div>
                <div class="col-sm-6">${user.address.zipcode}</div>
             </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default close">Close</button>
          </div>
        </div>`;

    div.onclick = function (e) {
      if (e.target.classList.contains('close'))
        {
          this.remove();
          document.getElementById('app').style.opacity = 1;
        }
    }
    return div;
  }
}