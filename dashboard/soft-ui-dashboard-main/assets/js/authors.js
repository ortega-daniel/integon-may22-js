var Author = /** @class */ (function () {
    function Author(picture, name, email, position, positionDtl, status, employedDate) {
        this.picture = picture;
        this.name = name;
        this.email = email;
        this.position = position;
        this.positionDtl = positionDtl;
        this.status = status;
        this.employedDate = employedDate;
    }
    return Author;
}());
var addAuthorModal = new bootstrap.Modal(document.getElementById("add-author-modal"));
var addAuthorModalElement = document.getElementById("add-author-modal");
var addAuthorBtn = document.getElementById("add-author");
var formAddAuthor = document.getElementById("form-add-author");
addAuthorModalElement.addEventListener("hide.bs.modal", function () {
    formAddAuthor.classList.remove('was-validated');
    formAddAuthor.reset();
});
formAddAuthor.addEventListener("submit", function (e) {
    e.preventDefault();
    if (!formAddAuthor.checkValidity()) {
        e.stopPropagation();
        formAddAuthor.classList.add('was-validated');
        return;
    }
    var inputName = document.getElementById("author-name");
    var inputPicture = document.getElementById("author-picture");
    var inputEmail = document.getElementById("author-email");
    var inputPosition = document.getElementById("author-position");
    var inputPositionDtl = document.getElementById("author-position-dtl");
    var inputEmployedDate = document.getElementById("author-employed-date");
    var author = new Author(inputPicture.value, inputName.value, inputEmail.value, inputPosition.value, inputPositionDtl.value, "Online", inputEmployedDate.value);
    postAuthor(author);
});
getAuthors();
function getAuthors() {
    $.ajax({
        method: 'GET',
        dataType: 'json',
        url: 'http://localhost:3000/autores',
        success: function (data) {
            data.autores.forEach(function (autor) { return appendAuthorRow(autor); });
        },
        error: function (data) {
            console.log(data);
        }
    });
}
function postAuthor(author) {
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
            employedDate: author.employedDate
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
function appendAuthorRow(author) {
    var tableBody = document.getElementById("authors-table").getElementsByTagName("tbody")[0];
    var newRow = tableBody.insertRow();
    var cellName = newRow.insertCell();
    cellName.innerHTML = "\n                        <div class=\"d-flex px-2 py-1\">\n                            <div>\n                                <img src=\"../assets/img/".concat(author.picture, "\" class=\"avatar avatar-sm me-3\" alt=\"user2\">\n                            </div>\n                            <div class=\"d-flex flex-column justify-content-center\">\n                                <h6 class=\"mb-0 text-sm\">").concat(author.name, "</h6>\n                                <p class=\"text-xs text-secondary mb-0\">").concat(author.email, "</p>\n                            </div>\n                        </div>\n                        ");
    var cellFunction = newRow.insertCell();
    cellFunction.innerHTML = "\n                            <p class=\"text-xs font-weight-bold mb-0\">".concat(author.position, "</p>\n                            <p class=\"text-xs text-secondary mb-0\">").concat(author.positionDtl, "</p>\n                            ");
    var cellStatus = newRow.insertCell();
    cellStatus.classList.add("align-middle", "text-center", "text-sm");
    cellStatus.innerHTML = "\n                            <span class=\"badge badge-sm ".concat(author.status === "Online" ? "bg-gradient-success" : "bg-gradient-secondary", "\">").concat(author.status, "</span>\n                            ");
    var cellEmployed = newRow.insertCell();
    cellEmployed.classList.add("align-middle", "text-center");
    cellEmployed.innerHTML = "\n                            <span class=\"text-secondary text-xs font-weight-bold\">".concat(author.employedDate, "</span>\n                            ");
    var cellEdit = newRow.insertCell();
    cellEdit.classList.add("align-middle");
    cellEdit.innerHTML = "\n                        <a href=\"javascript:;\" class=\"text-secondary font-weight-bold text-xs\" data-toggle=\"tooltip\" data-original-title=\"Edit user\">\n                            Edit\n                        </a>\n                        ";
}
