


var loadedata;


$(document).ready(function () {


$.ajax({url: "save.txt" , success: function(result) {


$("pod").html(result);

}})});