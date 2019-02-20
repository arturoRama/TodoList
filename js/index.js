var postTodoc = document.getElementsByClassName("submitButton");

var newTodo = document.getElementsByClassName("newTodo form-control");

var list = document.getElementsByClassName("panel-body","listOfTodos");

var clear = document.getElementsByClassName("clearButton btn-info");

var markTodo = document.getElementsByClassName("markAllButton btn-success");

var delTodo = document.getElementsByClassName("deleteButton btn-danger");

			/*	ADD ALL TO DO'S 	*/
postTodoc[0].addEventListener("click",function(event){
	event.preventDefault();

	let ks = newTodo[0].value.trim().split("\n");
	console.log(ks.length);
	for(i = 0; i < ks.length; i++)
	{
		console.log(ks[i]);
		let toDo = ks[i].trim();

		let checkbox = document.createElement('input');
		checkbox.type = "checkbox";
		checkbox.id= "checkbox";

		let label = document.createElement('label')
		label.appendChild(document.createTextNode(toDo));
		list[1].appendChild(checkbox);
		list[1].appendChild(label);

		let div = document.createElement("div");
		list[1].appendChild(div)
	}
	
	newTodo[0].value = "";

});

			/*	CLEAR ALL TO DO'S 	*/
clear[0].addEventListener("click", function(event){
	event.preventDefault();

	for(i = 0; i < list[1].children.length; i++)
	{
		if (list[1].children[i].id == "checkbox")
  			list[1].children[i].checked = false;
	}

});

			/*	MARK ALL TO DO'S 	*/
markTodo[0].addEventListener("click", function(event){
	event.preventDefault();

	for(i = 0; i < list[1].children.length; i++)
	{
		if (list[1].children[i].id == "checkbox")
  			list[1].children[i].checked = true;
	}

});

			/*	DELETE ALL TO DO'S 	*/
delTodo[0].addEventListener("click", function(event){
	while(list[1].firstChild)
	{
		list[1].removeChild(list[1].firstChild);
	}
	
});


