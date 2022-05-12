function demoFetchApi() {
    let url = "http://localhost:3000/autores";

    fetch(url)
        .then(response => response.json())
        .then(data => {
            let autores = data.autores;
            autores.forEach(autor => {
                console.log(autor.name);
            });
        })
        .catch(_ => console.log("el servidor no esta disponible"));
};

demoFetchApi();