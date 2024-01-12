function adicionarTarefasDia() {
    const newDayTask = document.getElementById('new-day-task')
    const valueDayTask = newDayTask.value
    const dayList = document.getElementById('day-list')

    if (valueDayTask == '') {
        alert("O campo 'dia' está vazio.");
    } else {
        // Adicionar a tarefa com um botão de remover
        dayList.innerHTML += `<li><span id="task">${valueDayTask}</span> <button id="button-remover" onclick="removerTarefa(this)"><img src="assets/img/trash-can.png"></button></li>`;
        newDayTask.value = '';
    }
}

function adicionarTarefasNoite() {
    const newNightTask = document.getElementById('new-night-task')
    const valueNightTask = newNightTask.value
    const nightList = document.getElementById('night-list')

    if (valueNightTask == '') {
        alert("O campo 'noite' está vazio.");
    } else {
        // Adicionar a tarefa com um botão de remover
        nightList.innerHTML += `<li><span id="task">${valueNightTask}</span> <button id="button-remover" onclick="removerTarefa(this)"><img src="assets/img/trash-can.png"></button></li>`;
        newNightTask.value = '';
    }
}

function removerTarefa(button) {
    // Obter o elemento pai (li) do botão clicado
    const taskItem = button.parentNode;

    // Remover o elemento li da lista
    taskItem.remove();
}
