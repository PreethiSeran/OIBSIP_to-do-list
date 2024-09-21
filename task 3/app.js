document.getElementById('addButton').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText) {
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create a delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function() {
            li.remove();
        });

        // Mark as completed on click
        li.addEventListener('click', function() {
            li.classList.toggle('completed');
        });

        li.appendChild(deleteButton);
        document.getElementById('taskList').appendChild(li);
        taskInput.value = '';
    }
});
