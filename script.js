var moodArray = [".hungry", ".scared", ".excited", ".sad"];

$("button").click(function() {
    var message = $("#moods").val();
    
    if(message === "excited") {
    showPics(".excited");
    backgroundColor("yellow");
    backgroundColor("#70C669");
    }
   else if(message ==="sad") {
       showPics(".sad");
       backgroundColor("#47C1B1");
   }
   else if(message==="scared") {
       showPics(".scared");
       backgroundColor("#E124C8");
   }
   else {
       showPics(".hungry");
       backgroundColor("#90EB1A");
       }
});

function showPics(pics){
    moodArray.forEach(function(elem){
        $(elem).css("display", "none");
    });
    
    $(pics).show();
}

//showPics(".excited");
function backgroundColor(color){
$("body").css("background-color",color);
}