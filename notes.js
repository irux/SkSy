/*Create button */
$('#create').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget) // Button that triggered the modal
  var recipient = button.data('whatever') // Extract info from data-* attributes
  // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
  // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
  var modal = $(this)
  modal.find('.modal-title').text('Create a new note!')
  
})

$('#editTodo').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget) // Button that triggered the modal
  var recipient = button.data('whatever') // Extract info from data-* attributes
  // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
  // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
  var modal = $(this)
  modal.find('.modal-title').text('Edit note!')
  
})

$('#create').on('hide.bs.modal', function (event) {
  $(this).find('form').trigger('reset');
})


$('#editTodo').on('hide.bs.modal', function (event) {
  $(this).find('form').trigger('reset');
})

let date_picker_edit = $('#edit_deadline_todo').datetimepicker({ footer: true, modal: true });

let date_picker = $('#inputdate').datetimepicker({ footer: true, modal: true });




let COUNTER_TODOS = 0

let ACTUALID = undefined


class ToDo {

  constructor(id, title, description, deadline,progress) {
    this.titleTodo = title;
    this.idTodo = id;
    this.descriptionTodo = description;
    this.deadlineTodo = deadline;
    this.progressTodo = progress
  }



  to_html() {

    return `
    <div class="col-lg-4 col-md-6" id="todo_${this.id}" >
        <div class="wrapper">
        <div class="card" >
          <div class="buttons" id="overlay">
              <a href="#" class="btn btn-primary" onclick="setActualChange(${this.id})" data-toggle="modal" data-target="#editTodo" id="btn-edit"><i class="fas fa-edit"></i></a>
              <a href="#" class="btn btn-primary" onclick="deleteTodo(${this.id})" id="btn-delete"><i class="fas fa-trash-alt"></i></i></a>
          </div>
          <div class="card-body">
        <h5 class="card-title">${this.title}</h5>
        <p class="card-text">${this.description}</p>
      <div class="deadline">
         <i class="far fa-calendar-check"></i>
         <p class="date">${this.deadline}</p>
      </div>
       <hr> </hr>
           <div class="progress">
              <div class="progress-bar" role="progressbar" style="width: ${this.progress}%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">${this.progress}%</div>
            </div>
           
          </div>
        </div>
        </div>
       
      </div>
    </div>
    </div>
  </div>
    `;
  }

  get title() {
    return this.titleTodo;
  }

  get description() {
    return this.descriptionTodo
  }

  get deadline() {
    return this.deadlineTodo
  }

  get id() {
    return this.idTodo;
  }

  get progress(){
    return this.progressTodo;
  }

}



function create_new_todo() {
  //We get the reference of the title and description element in the DOM
  const title = document.getElementById("title_todo")
  const description = document.getElementById("description_todo")
  

  //We check if the fields are pre fill 
  if(!title.checkValidity() || !description.checkValidity() || (date_picker.value() == "" || date_picker.value() == undefined))
      return;

  //We recolect the data of the fields
  const title_value = title.value;
  const description_value = description.value;
  const deadline_value = date_picker.value();

  const list_of_todos = document.getElementById("list_of_todos");

  //We create a new TodoObject
  let new_todo = new ToDo(COUNTER_TODOS, title_value, description_value, deadline_value,0);

  //We create an artificially and temporal div to insert the HTML of our ToDO as a child and then we retrieve it 
  const artificial_div = document.createElement("div");
  artificial_div.innerHTML = new_todo.to_html();
  const todo_to_inject = artificial_div.firstElementChild;

  //We insert the Todo code as a child in the Todo list
  list_of_todos.appendChild(todo_to_inject);
  COUNTER_TODOS++;

  //We close the modal after the completed operation
  $("#create").modal('toggle');
}

function deleteTodo(id) {
  const list_of_todos = document.getElementById("list_of_todos");
  let element = document.getElementById("todo_" + id).remove();
}


function setActualChange(id){
  ACTUALID = id
}

function editActualTodo(){
  const title = document.getElementById("edit_title_todo")
  const description = document.getElementById("edit_description_todo")
  const progress = document.getElementById("edit_progress_todo");
  
  console.log("Here 1")

  //We check if the fields are pre fill 
  if(!title.checkValidity() || !description.checkValidity() || (date_picker_edit.value() == "" || date_picker_edit.value() == undefined))
      return;


      console.log("Here 2")

      
  //We recolect the data of the fields
  const title_value = title.value;
  const description_value = description.value;
  const deadline_value = date_picker_edit.value();
  const progress_value = progress.value;

  let new_todo = new ToDo(ACTUALID,title_value, description_value, deadline_value,progress_value);

  let new_html_todo = new_todo.to_html();

  let old_todo_ref = document.getElementById("todo_" + ACTUALID);

  //We create an artificially and temporal div to insert the HTML of our ToDO as a child and then we retrieve it 
  const artificial_div = document.createElement("div");
  artificial_div.innerHTML = new_html_todo;
  const todo_to_inject = artificial_div.firstElementChild;

  old_todo_ref.replaceWith(todo_to_inject);
  
  ACTUALID = undefined;

  $("#editTodo").modal("toggle")


}