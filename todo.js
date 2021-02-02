var level = 0;
$("#submit").click(function(){  
level++;
var todoInput = $("#thingTodo");
var item = todoInput.val();

if(item != null && item !=""){
    
$("ol").append("<li class="+"toDelete"+level+">"+item+" <button class="+"indDelete"+" onclick="+"deleteItem("+level+")"+">✔</button></li>"); //appends the value into an ordered lis
$("li").addClass("container-fluid");
$(".indDelete").addClass("btn btn-primary btn-sm")
$("#thingTodo").val("");
}
else{ alert("Hey there, you did'nt add an item to your list");}

});  

$("#clearItem").click(function(){
    $("li").remove();
});

function deleteItem(level){
    $(".toDelete"+level).remove();
}
 