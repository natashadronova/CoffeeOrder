//add event listener to submit
document.getElementById('coffee-form').addEventListener('submit', function(e) {
  
  //get values
  const name=document.getElementById('name').value;
  const coffee=document.getElementById('coffee').value;
  const myonoffswitch=document.getElementById('myonoffswitch').value;
  
  //instantiate order and UI
  const order=new Order(name, coffee, myonoffswitch);
  const ui=new UI();

  //VALIDATE THE INPUTS - TO DO - offer selection

    //ADD order TO LIST
    ui.addorderToList(order);
    //CLEAR FIELDS
    ui.clearFields();
    //show success
    ui.showAlert('Order added successfully to the list', 'alert-success');
  // }

  e.preventDefault();
});

//add event listener to delete
document.getElementById('orderList').addEventListener('click', function(e){
  const ui=new UI();

  ui.deleteRecord(e.target);
  e.preventDefault();
})

//CONSTRUCTORS
//order constructor - creating order object
function Order(name, coffee, myonoffswitch) {
  this.name=name;
  this.coffee=coffee;
  this.myonoffswitch=myonoffswitch;
};

//UI constructor - set of prototype methods for manipulating UI
function UI() {};

//PROTOTYPES

//adding order to list
UI.prototype.addorderToList=function(order) {
  
  //taking parent element - order table
  const orderList=document.getElementById('orderList');
  //create table row
  const row=document.createElement('tr');
  
  //sort order
    const sortOrder=document.getElementById('orderList').getElementsByTagName('tr').length+1;  

  //add innerHTML
  row.innerHTML=`
  <td>${sortOrder}</td>
  <td>${order.name}</td>
  <td>${order.coffee}</td>

  <td><a href="#" class="delete">X</a></td>`
  //insert row into dom
  orderList.appendChild(row);
}
//   <td>${order.myonoffswitch}</td>
//clear fields after submitting
UI.prototype.clearFields=function() {
  document.getElementById('name', 'coffee').value='';
  // document.getElementById('starmyonoffswitch').value=1;
};

//show alert
UI.prototype.showAlert=function(message, color) {
  //create div and text
  const div=document.createElement('div');
  const textNode=document.createTextNode(message);
  //append text mmesage to created element
  div.appendChild(textNode);
  //add class to the div
  div.className=`alert ${color}`;
  //get parent element 
  const parentElement = document.getElementById('coffee-form').parentNode;
  //get reference element
  const referenceNode=document.getElementById('orderTable')
  //insert into the dom
  parentElement.insertBefore(div,referenceNode);

  //delete message after 3 seconds
  setTimeout(function () {
    div.remove();
  }, 3000);
}

//deleting book
UI.prototype.deleteRecord=function(target) {
  if (target.className==='delete') {
    target.parentElement.parentElement.remove();
  };
};