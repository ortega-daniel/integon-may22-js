class Author {
    picture: string;
    name: string;
    email: string;
    position: string;
    positionDtl: string;
    status: string;
    employedDate: string;

    constructor(picture: string, name: string, email: string, position: string, positionDtl: string, status: string, employedDate: string) {
        this.picture = picture;
        this.name = name;
        this.email = email;
        this.position = position;
        this.positionDtl = positionDtl;
        this.status = status;
        this.employedDate = employedDate;
    }
}

const addAuthorModal: bootstrap.Modal = new bootstrap.Modal(document.getElementById("add-author-modal"))
const addAuthorModalElement: HTMLElement = document.getElementById("add-author-modal");
const addAuthorBtn: HTMLElement = document.getElementById("add-author");
const formAddAuthor: HTMLFormElement = <HTMLFormElement>document.getElementById("form-add-author");

addAuthorModalElement.addEventListener("hide.bs.modal", () => {
    formAddAuthor.classList.remove('was-validated');
    formAddAuthor.reset();
});

formAddAuthor.addEventListener("submit", e => {
    e.preventDefault();

    if (!formAddAuthor.checkValidity()) {
        e.stopPropagation();
        formAddAuthor.classList.add('was-validated')
        return;
    }

    const inputName = <HTMLInputElement>document.getElementById("author-name");
    const inputPicture = <HTMLInputElement>document.getElementById("author-picture");
    const inputEmail = <HTMLInputElement>document.getElementById("author-email");
    const inputPosition = <HTMLInputElement>document.getElementById("author-position");
    const inputPositionDtl = <HTMLInputElement>document.getElementById("author-position-dtl");
    const inputEmployedDate = <HTMLInputElement>document.getElementById("author-employed-date");

    let author = new Author(inputPicture.value, inputName.value, inputEmail.value, inputPosition.value, inputPositionDtl.value, "Online", inputEmployedDate.value);
    postAuthor(author);

});

getAuthors();

function getAuthors() {
    $.ajax({
        method: 'GET',
        dataType: 'json',
        url: 'http://localhost:3000/autores',
        success: function (data) {
            data.autores.forEach(autor => appendAuthorRow(autor));
        },
        error: function (data) {
            console.log(data);
        }
    });
}

function postAuthor(author: Author) {
    $.ajax({
        method: "POST",
        dataType: "json",
        url: 'http://localhost:3000/autores',
        contentType: "application/json",
        data: JSON.stringify({
            picture: author.picture,
            name: author.name,
            email: author.email,
            position: author.position,
            positionDtl: author.positionDtl,
            status: author.status,
            employedDate: author.employedDate,
        }),
        success: function (data) {
            if (data.ok) {
                appendAuthorRow(author);
                addAuthorModal.hide();
            }
        },
        error: function (data) {
            console.log(data);
        }
    });
}

function appendAuthorRow(author: Author) {
    let tableBody: HTMLTableSectionElement = document.getElementById("authors-table").getElementsByTagName("tbody")[0];

    let newRow: HTMLTableRowElement = tableBody.insertRow();

    let cellName: HTMLTableCellElement = newRow.insertCell();
    cellName.innerHTML = `
                        <div class="d-flex px-2 py-1">
                            <div>
                                <img src="../assets/img/${author.picture}" class="avatar avatar-sm me-3" alt="user2">
                            </div>
                            <div class="d-flex flex-column justify-content-center">
                                <h6 class="mb-0 text-sm">${author.name}</h6>
                                <p class="text-xs text-secondary mb-0">${author.email}</p>
                            </div>
                        </div>
                        `;

    let cellFunction: HTMLTableCellElement = newRow.insertCell();
    cellFunction.innerHTML = `
                            <p class="text-xs font-weight-bold mb-0">${author.position}</p>
                            <p class="text-xs text-secondary mb-0">${author.positionDtl}</p>
                            `;

    let cellStatus: HTMLTableCellElement = newRow.insertCell();
    cellStatus.classList.add("align-middle", "text-center", "text-sm");
    cellStatus.innerHTML = `
                            <span class="badge badge-sm ${author.status === "Online" ? "bg-gradient-success" : "bg-gradient-secondary"}">${author.status}</span>
                            `;
    
    let cellEmployed: HTMLTableCellElement = newRow.insertCell();
    cellEmployed.classList.add("align-middle", "text-center");
    cellEmployed.innerHTML = `
                            <span class="text-secondary text-xs font-weight-bold">${author.employedDate}</span>
                            `;
    
    let cellEdit: HTMLTableCellElement = newRow.insertCell();
    cellEdit.classList.add("align-middle");
    cellEdit.innerHTML = `
                        <a href="javascript:;" class="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">
                            Edit
                        </a>
                        `;
}