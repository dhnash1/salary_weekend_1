//Global variables are fun, right?
var firstArr = [];
var lastArr = [];
var idArr = [];
var titleArr = [];
var salaryArr = [];


//fetch and clear stuff
function getThtInfo(){
  var first = document.getElementById('name').value;
  var last = document.getElementById('lastName').value;
  var id = document.getElementById('idNumber').value;
  var title = document.getElementById('title').value;
  var salary = document.getElementById('salary').value;
  //make salary an interger
  var salString = salary;
  salary = parseInt(salary);
  //Check if salary is a number, if not, stop the whole thing
  if(isNaN(salary)){
    alert(salString + " isn't a proper salary! Please try again.");
    document.getElementById('salary').value = "";
    return salary;
  }
   else{
     //put the info into the corresponding arrays
    firstArr.push(first);
    lastArr.push(last);
    idArr.push(id);
    titleArr.push(title);
    salaryArr.push(salary);
    //clear the inputs
    document.getElementById('name').value = "";
    document.getElementById('lastName').value = "";
    document.getElementById('idNumber').value = "";
    document.getElementById('title').value = "";
    document.getElementById('salary').value = "";
    //run those other things
    addTable();
    arithmetic();
  }
}
//put that junk on a table, yo
function addTable(){
  var table = document.getElementById('theTable');
    clearTable()
      for(var i = 0; i < firstArr.length; i++){
          var row = table.insertRow(1);
          var cell1 = row.insertCell(0);
          var cell2 = row.insertCell(1);
          var cell3 = row.insertCell(2);
          var cell4 = row.insertCell(3);
          var cell5 = row.insertCell(4);
          cell1.innerHTML = firstArr[i];
          cell2.innerHTML = lastArr[i];
          cell3.innerHTML = idArr[i];
          cell4.innerHTML = titleArr[i];
          cell5.innerHTML = salaryArr[i];
  }

}
//empty the table before re-filling it
function clearTable(){
         var rowCount = theTable.rows.length;
          while(--rowCount) theTable.deleteRow(rowCount);
        //  console.log("cleared")
        }
//calculate monthly expense
function arithmetic(){
    var total = 0;
  for( var i = 0; i < salaryArr.length; i++){
      total = total + (salaryArr[i] / 12);
      }
    //console.log(total);
    document.getElementById('totalPay').innerHTML = total;

}
//empty the table and arrays
function clearAll(){
  clearTable()
   firstArr = [];
   lastArr = [];
   idArr = [];
   titleArr = [];
   salaryArr = [];
   document.getElementById('totalPay').innerHTML = "";

}
