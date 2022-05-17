let btnSignIn = document.getElementById("btn-sign-in");

btnSignIn.addEventListener("click", () => {
    let inputEmail = document.getElementById("input-email");
    let inputPassword = document.getElementById("input-password");
    let cardSignIn = document.getElementById("sign-in-card");
    let cardWelcome = document.getElementById("welcome-card");
    let spanUsername = document.getElementById("span-username");
    let email = inputEmail.value.trim();
    let password = inputPassword.value.trim();

    let errMsgs = [];

    if (email === "") {
        errMsgs.push("email is required");
    }

    if (password === "") {
        errMsgs.push("password is required");
    }

    if (errMsgs.length > 0) {
        return alert(errMsgs.join());
    }

    fetch("http://localhost:3000/signin", {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email,
            password
        })})
        .then(response => response.json())
        .then(data => {
            if (data.user == null) {
                $("#sign-in-card").show();
                $("#welcome-card").hide();;
                alert("incorrect credentials");
            } else {
                spanUsername.innerText = data.user.name;
                $("#sign-in-card").hide();
                $("#welcome-card").show();;
            }
        });

});