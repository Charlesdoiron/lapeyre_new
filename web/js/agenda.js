function cellIsActive() {
var cells = $('.cell__hour')

for (var i = cells.length - 1; i >= 0; i--) {
	var cell = cells[i]
	cell.classList.toggle('cell__is-active');
}
	
 };



