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
    /* if (!formAddAuthor.checkValidity()) {
        e.stopPropagation();
        formAddAuthor.classList.add('was-validated')
        return;
    } */
    var name = $("#author-name").val();
    var picture = $("#author-picture").val();
    var email = $("#author-email").val();
    var position = $("#author-position").val();
    var positionDtl = $("#author-position-dtl").val();
    var employedDate = $("#author-employed-date").val();
    var errMsgs = [];
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
        formAddAuthor.classList.add('was-validated');
        alert(errMsgs.join());
        return;
    }
    var author = new Author(picture, name, email, position, positionDtl, "Online", employedDate);
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
    var row = "\n        <tr>\n            <td>\n                <div class=\"d-flex px-2 py-1\">\n                    <div>\n                        <img src=\"../assets/img/".concat(author.picture, "\" class=\"avatar avatar-sm me-3\" alt=\"user2\">\n                    </div>\n                    <div class=\"d-flex flex-column justify-content-center\">\n                        <h6 class=\"mb-0 text-sm\">").concat(author.name, "</h6>\n                        <p class=\"text-xs text-secondary mb-0\">").concat(author.email, "</p>\n                    </div>\n                </div>\n            </td>\n            <td>\n                <p class=\"text-xs font-weight-bold mb-0\">").concat(author.position, "</p>\n                <p class=\"text-xs text-secondary mb-0\">").concat(author.positionDtl, "</p>\n            </td>\n            <td class=\"align-middle text-center text-sm\">\n                <span class=\"author-status badge badge-sm ").concat(author.status === "Online" ? "bg-gradient-success" : "bg-gradient-secondary", "\">").concat(author.status, "</span>\n            </td>\n            <td class=\"align-middle text-center\">\n                <span class=\"text-secondary text-xs font-weight-bold\">").concat(author.employedDate, "</span>\n            </td>\n            <td class=\"align-middle\">\n                <a href=\"javascript:;\" class=\"text-secondary font-weight-bold text-xs\" data-toggle=\"tooltip\" data-original-title=\"Edit user\">\n                    Edit\n                </a>\n            </td>\n        </tr>\n    ");
    $(row).appendTo("#authors-table tbody");
}
$(document).ready(function () {
    $(".author-status").dblclick(function () {
        if ($(this).hasClass("bg-gradient-success")) {
            $(this).removeClass("bg-gradient-success");
            $(this).addClass("bg-gradient-secondary");
            $(this).text("Offline");
        }
        else if ($(this).hasClass("bg-gradient-secondary")) {
            $(this).removeClass("bg-gradient-secondary");
            $(this).addClass("bg-gradient-success");
            $(this).text("Online");
        }
    });
});
