var addRow = document.getElementById('addRow');
addRow.addEventListener('click', function(){
    var tableBody=document.getElementById('tableBody');
    var newRow=document.createElement('tr');
    for (var i=0; i<3; i++) {
        var newCell=document.createElement('td');
        newCell.classList.add('textCells');
        newRow.prepend(newCell);
    }
    tableBody.prepend(newRow);
},false);


var tableBody = document.getElementById('tableBody');
var cells = tableBody.getElementsByClassName('textCells');
for (var i = 0; i < cells.length; i++){
       cells[i].addEventListener('click', function func () {
        var input = document.createElement('input');
        input.value = this.innerHTML;
        this.innerHTML = '';
        this.appendChild(input);
        input.focus();

        var self = this;
        input.addEventListener('blur', function () {
            self.innerHTML = this.value;
            self.addEventListener('click', func);
        });
        this.removeEventListener('click', func);
        });
}