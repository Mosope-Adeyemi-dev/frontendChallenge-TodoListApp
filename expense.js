var level = 0;                                                      
$("#addExpense").click(function (){                                  
level++;                                                             
var transaction = $("#transaction").val();                            
var amount = $("#amount").val();                                     
var date = $("#date").val();                                         
$("#first-tr").after("<tr id="+"useToAddClass"+" class="+"items"+"><td>"+transaction+"</td><td>"+date+"</td><td>$"+amount+"</td><td><button onclick="+"deleteItem("+level+")"+">Delete</button></td></tr>");
$("#useToAddClass").addClass("itemDelete"+level);                    
});


function clearOutTransactions(){
    $(".items").remove();
}

function deleteItem(level){
   $(".itemDelete"+level).remove("tr");
  }




/*
1. instantiate level
2. query for button with add expense ID and adds a click event listener to it, once clicked the callback function is called
3. increase level by 1 each time the callback function is called 
4. get the value of transaction inputted
5. get the value of amount inputted
6. get the value of date inputted
7. queries the document for the table row with ID first-tr, then add the html code inside .after() method.
   the id "useToAddClass" helps to add class to the table row <tr></tr> element.
8. query the document for an element of ID useToAddClass and add the class which will be used to delete individual transactions
9. function clearOutTransaction when called clears out all transactions
10.function deleteItem when called queries the document for element with class itemDelete+level then removes it.

*/