


var 데이터수신값;


$(document).ready(function () {


$.ajax({url: "save.txt" , success: function(result) {


$("pod").html(result);

}})});