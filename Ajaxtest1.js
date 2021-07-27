


var loadedata;

document.write("yes");


$(document).ready(function () {


$.ajax({url: "save.txt" , success: function(result) {


$("#div1").html(result);

}})});


