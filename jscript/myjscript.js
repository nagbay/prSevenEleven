/**
 * Created by agbaynn on 9/15/2016.
 */

/*var mysubmitButton=document.getElementById("submit");
mysubmitButton.onclick=function(event) {
    event.preventDefault();
    mysubmitButton.style.display="none";
    for ( var i=0;i<divs.length;i++){
        divs[i].style.backgroundColor="blue";
    }

    setTimeout(function(){

        alert("hello world");
    }, 1000);


}
var divs = document.getElementsByTagName("div");



*/

var $mysubmitButton = $('#submit');



$mysubmitButton.click(function(event) {
    event.preventDefault();
    $("div").css("backgroundColor","blue");
});