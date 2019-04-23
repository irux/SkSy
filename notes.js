$('#create').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget) // Button that triggered the modal
  var recipient = button.data('whatever') // Extract info from data-* attributes
  // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
  // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
  var modal = $(this)
  modal.find('.modal-title').text('New message to ' + recipient)
  modal.find('.modal-body input').val(recipient)
})
let date_picker = $('#inputdate').datetimepicker({footer:true, modal:true});

let COUNTER_TODOS = 0

class ToDo{
  


  constructor(id,title,description,deadline){
    this.titleTodo = title;
    this.idTodo = id;
    this.descriptionTodo = description;
    this.deadlineTodo = deadline;
  }


  to_html(){

    return `
    <div class="col-lg-4 col-md-6" >
        <div class="wrapper">
        <div class="card" >
          <div class="buttons" id="overlay">
              <a href="#" class="btn btn-primary" id="btn-edit"><i class="fas fa-edit"></i></a>
              <a href="#" class="btn btn-primary" id="btn-delete"><i class="fas fa-trash-alt"></i></i></a>
          </div>
          <div class="card-body">
            <h5 class="card-title">${this.title}</h5>
            <p class="card-text">${this.description}</p>
           <hr> </hr>
           <div class="progress">
              <div class="progress-bar" role="progressbar" style="width: 0%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">45%</div>
            </div>
           
          </div>
        </div>
        </div>
      </div>
    `;
  }

  get title(){
    return this.titleTodo;
  }

  get description() {
    return this.descriptionTodo
  }

  get deadline(){
    return this.deadlineTodo
  }

  get id(){
    return this.idTodo;
  }




  
	
}



function create_new_todo(){
  const title = document.getElementById("title_todo").value;
  const description = document.getElementById("description_todo").value;
  const deadline = date_picker.value();

  const list_of_todos = document.getElementById("list_of_todos");

  let new_todo = new ToDo(COUNTER_TODOS,title,description,deadline);
  const new_div = document.createElement("div");
  new_div.innerHTML = new_todo.to_html();
  list_of_todos.appendChild(new_div.firstElementChild);
  
  COUNTER_TODOS++;

}