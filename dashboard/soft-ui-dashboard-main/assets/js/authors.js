const addAuthorBtn = document.getElementById("add-author");

addAuthorBtn.addEventListener("click", () => {
    let tableBody = document.getElementById("authors-table").getElementsByTagName("tbody")[0];

    let newRow = tableBody.insertRow();

    let cellName = newRow.insertCell();
    cellName.innerHTML = `
                        <div class="d-flex px-2 py-1">
                            <div>
                                <img src="../assets/img/team-3.jpg" class="avatar avatar-sm me-3" alt="user2">
                            </div>
                            <div class="d-flex flex-column justify-content-center">
                                <h6 class="mb-0 text-sm">Alexa Liras</h6>
                                <p class="text-xs text-secondary mb-0">alexa@creative-tim.com</p>
                            </div>
                        </div>
                        `;

    let cellFunction = newRow.insertCell();
    cellFunction.innerHTML = `
                            <p class="text-xs font-weight-bold mb-0">Manager</p>
                            <p class="text-xs text-secondary mb-0">Organization</p>
                            `;

    let cellStatus = newRow.insertCell();
    cellStatus.classList.add("align-middle", "text-center", "text-sm");
    cellStatus.innerHTML = `
                            <span class="badge badge-sm bg-gradient-success">Online</span>
                            `;
    
    let cellEmployed = newRow.insertCell();
    cellEmployed.classList.add("align-middle", "text-center");
    cellEmployed.innerHTML = `
                            <span class="text-secondary text-xs font-weight-bold">23/04/18</span>
                            `;
    
    let cellEdit = newRow.insertCell();
    cellEdit.classList.add("align-middle");
    cellEdit.innerHTML = `
                        <a href="javascript:;" class="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">
                            Edit
                        </a>
                        `;
});