//DOM -> Document, Object, Model...
function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myinput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
      alert("You must write something!");
    } else {
      document.getElementById("myul").appendChild(li);
    }

}
// click -> ul -> 

var ul = document.querySelector('ul');
ul.addEventListener('click', function (event) {
    if(event.target.tagName === 'LI') {
        event.target.classList.toggle('checked');
    }
},false)

