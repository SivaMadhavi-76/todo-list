let events=[];
function addevents(){
let inputelement=document.getElementById('input');
  input=inputelement.value;
  let dateelement=document.getElementById('date');
  date=dateelement.value;
  events.push({name:input,duedate:date});
  document.getElementById('input').value='';
  document.getElementById('date').value='';
  display();
}
  function display(){
    let output='';
  for(let i=0;i<events.length;i++){
    let {name,duedate}=events[i];
    output+=`
    <div class="js-div">
    <div>
    ${name}
    </div>
    <div>
     ${duedate}
    </div>
   <div>
    <button onclick="delete_item('${i}')" class="delete-button">Delete</button>
  </div> 
  </div>
    `;
  }
   document.querySelector('.js-eventadd').innerHTML=output;
}
function delete_item(i){
   events.splice(i,1);
   display();
}