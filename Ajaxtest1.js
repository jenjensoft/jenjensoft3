


var loaddata;

document.write("yes");


$(document).ready(function () {


$.ajax({url: "https://jenjensoft.github.io/jenjensoft3/save5.txt " , success: function(result) {

loaddata=result

document.write(loaddata);


}})});


