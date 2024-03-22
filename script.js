
// Create a 'close' button to each list item  4
var myList = document.getElementsByTagName('li');
var i;
for (i = 0; i < myList.length; i++) {
    var span = document.createElement('span');
    var text = document.createTextNode('(X)');
    span.className = 'close';
    span.appendChild(text); // <span class="close">(X)</span>
    myList[i].appendChild(span);
}

// Click 'close' button, it will hide the list item  3

var list = document.getElementsByClassName('close');
var i;

for (let i = 0; i < list.length; i++) {
    list[i].onclick = function () {
        var div = this.parentElement;
        div.style.display = "none";
    }

}


// Create new element in ul on the Add Button Event  2
function newElement() {
    var li = document.createElement('li');
    var inputValue = document.getElementById('myInput').value;
    var text = document.createTextNode(inputValue);
    li.appendChild(text);
    if (inputValue == '') { 
        alert('You must write Something to Add.');
    } else {
        document.getElementById('myUL').appendChild(li);
    }
    document.getElementById('myInput').value = '';// After adding the list item , the input field should be empty//

    // Add 'close' button to newly added li item to myUL   2.2
    var span = document.createElement('span');
    var text = document.createTextNode('(X)');
    span.className = 'close';
    span.appendChild(text); // <span class="close">(X)</span>
    li.appendChild(span);
    for (let i = 0; i < list.length; i++) {
        list[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }

}

// Clearing List  1
function removeAll() {
    var lst = document.getElementsByTagName('ul');
    lst[0].innerHTML = '';
}