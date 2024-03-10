//selecting popupbox popupoverlay button
var popupoverlay=document.querySelector(".popup-overlay")
var popupbox=document.querySelector(".popup-box")
var addpopupbutton=document.getElementById("add-popup-button")


addpopupbutton.addEventListener("click",function()
{
    popupoverlay.style.display="block"
    popupbox.style.display="block"
})


//select cancel

var cancelpopup=document.getElementById("cancel-popup")

cancelpopup.addEventListener("click",function(event){
    event.preventDefault()
    popupoverlay.style.display="none"
    popupbox.style.display="none"
})



//select container,add-book,book-title-input,impo,description

var container=document.querySelector(".container")
var addbook=document.getElementById("add-book")
var bookdateinput=document.getElementById("book-date-input")
var bookimpoinput=document.getElementById("book-important-input")
var bookdescinput=document.getElementById("book-description-input")


addbook.addEventListener("click",function(event)
{
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`<h5>${bookdateinput.value}<h5>
    <h4>${bookimpoinput.value}</h4>
    <p>${bookdescinput.value}</p>
    <button onclick="deletebook(event)">Delete</button>`
    container.append(div)
})


function deletebook(event)
{
    event.target.parentElement.remove()
}