function generateUI() {
    let mainDiv = document.getElementById("content");
    let btn1 = document.createElement("button");
    let btn2 = document.createElement("button");

    btn1.innerText = "Button 1"
    btn2.innerText = "Button 2"

    mainDiv.appendChild(btn1);
    mainDiv.appendChild(btn2);

    btn1.addEventListener("click", e => {
        console.log("button 1 clicked");
    });

    btn2.addEventListener("click", e => {
        console.log("button 2 clicked");
    });

    btn2.addEventListener("click", clickGeneral);
}

function clickGeneral() {
    console.log("click general");
}