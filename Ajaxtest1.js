


var 데이터수신값;


$(document).ready(function () {


$.ajax({url: "https://jenjensoft.github.io/jenjensoft3/" , success: function(result) {


$("pod").html(result);

}})});