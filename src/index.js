document.addEventListener("DOMContentLoaded", () => {
  // your code here
  // Get references to the necessary DOM elements
  const taskForm = document.getElementById('create-task-form');
  const taskInput = document.getElementById('new-task-description');
  const taskList = document.getElementById('tasks');

  // Event listener for the form submission
  taskForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    const taskText = taskInput.value; // Get the value of the task input field

    if (taskText.trim() !== '') {
      // Create a new list item element and set its text content
      const listItem = document.createElement('li');
      listItem.textContent = taskText;

      // Create a delete button for the task
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.classList.add('delete-btn');

      // Add event listener for delete button click
      deleteButton.addEventListener('click', function() {
        listItem.remove(); // Remove the task list item from the DOM
      });

      // Append the delete button to the list item
      listItem.appendChild(deleteButton);

      // Append the new list item to the task list
      taskList.appendChild(listItem);

      // Clear the task input field
      taskInput.value = '';
    }
  });
});
