//DOM -> Document, Object, Model...
var defaultLis = document.getElementsByTagName('LI');
for(let i = 0; i < defaultLis.length; i++) {
  var span = document.createElement('span'); // container
  var cross = document.createTextNode('\u2715');

  span.className = 'abc';

  span.appendChild(cross);
  defaultLis[i].appendChild(span);
}






function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myinput").value;
    var t = document.createTextNode(inputValue); // Text form of the input
    li.appendChild(t);
    if (inputValue === '') {
      alert("You must write something!");
    } else {
      document.getElementById("myul").appendChild(li);
    }
    document.getElementById('myinput').value = "";
    
    // unicodes
    var span = document.createElement('span'); // container
    var cross = document.createTextNode('\u2715');

    span.className = 'abc';

    span.appendChild(cross);
    li.appendChild(span);

    // Cross on click
    var closeBtn = document.getElementsByClassName('abc');
    for(let i = 0; i < closeBtn.length; i++) {
      closeBtn[i].onclick = function () {
        var x = this.parentElement; // Li
        x.style.display = 'none';
      }
    }
    

}
// click -> ul -> 

var ul = document.querySelector('ul');
ul.addEventListener('click', function (event) {
    if(event.target.tagName === 'LI') {
        event.target.classList.toggle('checked');
    }
},false)

