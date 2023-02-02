// Abre formulario
function addNewForm(){
    document.querySelector('.form-none').classList.add('form-popup');
    document.querySelector('.form-none.form-popup').classList.remove('form-none');    
}

//Cierra formulario
function closeForm(){
    document.querySelector('.form-popup').classList.add('form-none');
    document.querySelector('.form-popup.form-none').classList.remove('form-popup');    
}

//Recibe data de form
function send(){

    var title = document.getElementById("vacio").value;
    var author = document.getElementById("author").value;
    var link = document.getElementById("link").value
    var borrowed = document.querySelector('input[name="borrowed"]:checked').value;

    console.log(link);
    console.log(title);
    console.log(author);
    console.log(borrowed);
    
    if(author!==''){
        createBook(title, author, link, borrowed);
        closeForm();
    }
    
    
}


//Muestra la info
function createBook(title, author, link, borrowed){
    const newDiv = document.createElement("div");
    var linktonto = link;
    var presta = borrowed;
    var title2= title;

    //Nombre y autor como línea
    newDiv.innerHTML = "Title: " + title2 + ", Author: " + author;
    newDiv.classList.add("bookCont");
    document.getElementById("bookList").appendChild(newDiv);
    
    //Botón con Link
    if(linktonto!==''){
        const linkBtn = document.createElement("button");
        linkBtn.innerHTML = "link";
        linkBtn.addEventListener("click", () => {window.open(linktonto)});
        document.getElementById("bookList").appendChild(linkBtn);
    }

    // borrowed/available como select
    const borBar = document.createElement("select");
    if(presta=="borrowed")
    {
        borBar.innerHTML = "<option value='Borrowed' selected>Borrowed</option> <option value='Available'>Available</option>";
    }
    
    if(presta=="available")
    {
        borBar.innerHTML = "<option value='Borrowed'>Borrowed</option> <option value='Available' selected>Available</option>";
    }
    
    document.getElementById("bookList").appendChild(borBar);

}

// PRUEBA DE LIBROS

createBook("La biblia","Anónimo","https://biblia.es", "borrowed");
createBook("Eloquent JavaScript", "Marijn Haverbeke", "https://eloquentjavascript.net","available");
