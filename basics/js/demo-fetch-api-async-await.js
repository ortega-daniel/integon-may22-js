const main = async () => {
    async function getAuthors() {
        let response = await fetch("http://localhost:3000/autores");
        console.log(response);

        let authors = await response.json();
    
        return authors;
    };
    
    let authors = await getAuthors();
    console.log(authors);
    console.log("end");
}

main();