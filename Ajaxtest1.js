


var loaddata;

var thedata;




$(document).ready(function () {


$.ajax({url: "https://jenjensoft.github.io/jenjensoft/save.txt " , success: function(result) {

loaddata=result

document.write(loaddata);

document.write("yes");


thedata="https://jenjensoft.github.io/jenjensoft3/save5.txt ";


document.write(thedata);





}})});


