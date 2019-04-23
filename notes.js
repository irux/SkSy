$('#create').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget) // Button that triggered the modal
  var recipient = button.data('whatever') // Extract info from data-* attributes
  // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
  // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
  var modal = $(this)
  modal.find('.modal-title').text('Create a new note!')
  
})

$('#create').on('hide.bs.modal', function (event) {
  $(this).find('form').trigger('reset');
})
let date_picker = $('#inputdate').datetimepicker({ footer: true, modal: true });

let COUNTER_TODOS = 0

class ToDo {

  constructor(id, title, description, deadline) {
    this.titleTodo = title;
    this.idTodo = id;
    this.descriptionTodo = description;
    this.deadlineTodo = deadline;
  }


  to_html() {

    return `
    <div class="col-lg-4 col-md-6" id="todo_${this.id}" >
        <div class="wrapper">
        <div class="card" >
          <div class="buttons" id="overlay">
              <a href="#" class="btn btn-primary" id="btn-edit"><i class="fas fa-edit"></i></a>
              <a href="#" class="btn btn-primary" onclick="deleteTodo(${this.id})" id="btn-delete"><i class="fas fa-trash-alt"></i></i></a>
          </div>
          <div class="card-body">
            <h5 class="card-title">${this.title}</h5>
            <p class="card-text">${this.description}</p>
           <hr> </hr>
           <div class="progress">
              <div class="progress-bar" role="progressbar" style="width: 0%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">0%</div>
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
  let new_todo = new ToDo(COUNTER_TODOS, title_value, description_value, deadline_value);

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
  COUNTER_TODOS--;
}