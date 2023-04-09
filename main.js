const content = document.getElementById("content");

fetch("bookstore.json")
.then(response => response.json())
.then(data => {

    for(let i =0; i<data.length; i++){
        const book = data[i];
        const bookdiv =  document.createElement("div");
        bookdiv.classList.add("bookdiv");

        const img = document.createElement("img");
        img.src= book.image;
        img.alt = book.name;
        bookdiv.appendChild(img);

        const name = document.createElement("h2");
        name.textContent = book.name;
        bookdiv.appendChild(name);


        const author = document.createElement("p");
        author.textContent = book.author;
        bookdiv.appendChild(author);


        content.appendChild(bookdiv);
    }  
})
