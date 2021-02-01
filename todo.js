var level = 0;
$("#submit").click(function(){  
level++;
 //gets the input element  with the submit id
var item = $("#thingTodo").val();  //stores the value  into the input
$("ol").append("<li class="+"toDelete"+level+">"+item+" <button onclick="+"deleteItem("+level+")"+">done</button></li>"); //appends the value into an ordered list
});

$("#clearItem").click(function(){
    $("li").remove();
});

function deleteItem(level){
    $(".toDelete"+level).remove();
}