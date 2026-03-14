function addBook(){

let title=document.getElementById("title").value
let author=document.getElementById("author").value
let review=document.getElementById("review").value

fetch("http://localhost:5000/addbook",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({title,author,review})

})

.then(res=>res.text())
.then(data=>{

alert(data)

loadBooks()

})

}

function loadBooks(){

fetch("http://localhost:5000/books")

.then(res=>res.json())

.then(data=>{

let output=""

data.forEach(book=>{

output+=`
<p>
<b>${book.title}</b> by ${book.author}
<br>
${book.review}
</p>
`

})

document.getElementById("booklist").innerHTML=output

})

}

loadBooks()
