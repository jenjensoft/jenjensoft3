


var loadedata;

document.write("yes");


$(document).ready(function () {


$.ajax({url: "https://jenjensoft.github.io/jenjensoft3/save.txt" , success: function(result) {


$("#div1").html(result);

}})});


