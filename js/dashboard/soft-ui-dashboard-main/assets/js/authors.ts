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

    /* if (!formAddAuthor.checkValidity()) {
        e.stopPropagation();
        formAddAuthor.classList.add('was-validated')
        return;
    } */

    const name: string = <string>$("#author-name").val();
    const picture: string = <string>$("#author-picture").val();
    const email: string = <string>$("#author-email").val();
    const position: string = <string>$("#author-position").val();
    const positionDtl: string = <string>$("#author-position-dtl").val();
    const employedDate: string = <string>$("#author-employed-date").val();

    let errMsgs = []

    if (name === "") {
        errMsgs.push("Name is required");
    }
    if (picture === "") {
        errMsgs.push("Picture is required");
    }
    if (email === "") {
        errMsgs.push("Email is required");
    }
    if (position === "") {
        errMsgs.push("Position is required");
    }
    if (positionDtl === "") {
        errMsgs.push("Position Detail is required");
    }
    if (employedDate === "") {
        errMsgs.push("Employment Date is required");
    }

    if (errMsgs.length > 0) {
        formAddAuthor.classList.add('was-validated')
        alert(errMsgs.join());
        return;
    }

    let author = new Author(picture, name, email, position, positionDtl, "Online", employedDate);    
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
    let row = `
        <tr>
            <td>
                <div class="d-flex px-2 py-1">
                    <div>
                        <img src="../assets/img/${author.picture}" class="avatar avatar-sm me-3" alt="user2">
                    </div>
                    <div class="d-flex flex-column justify-content-center">
                        <h6 class="mb-0 text-sm">${author.name}</h6>
                        <p class="text-xs text-secondary mb-0">${author.email}</p>
                    </div>
                </div>
            </td>
            <td>
                <p class="text-xs font-weight-bold mb-0">${author.position}</p>
                <p class="text-xs text-secondary mb-0">${author.positionDtl}</p>
            </td>
            <td class="align-middle text-center text-sm">
                <span class="author-status badge badge-sm ${author.status === "Online" ? "bg-gradient-success" : "bg-gradient-secondary"}">${author.status}</span>
            </td>
            <td class="align-middle text-center">
                <span class="text-secondary text-xs font-weight-bold">${author.employedDate}</span>
            </td>
            <td class="align-middle">
                <a href="javascript:;" class="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">
                    Edit
                </a>
            </td>
        </tr>
    `;

    $(row).appendTo("#authors-table tbody");
}

$(document).ready(() => {
    $(".author-status").dblclick(function() {
        if ($(this).hasClass("bg-gradient-success")) {
            $(this).removeClass("bg-gradient-success");
            $(this).addClass("bg-gradient-secondary");
            $(this).text("Offline");
        } else if ($(this).hasClass("bg-gradient-secondary")) {
            $(this).removeClass("bg-gradient-secondary");
            $(this).addClass("bg-gradient-success");
            $(this).text("Online");
        }
    });
});