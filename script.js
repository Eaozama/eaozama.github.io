function formatText(command, editorIndex) {
    document.execCommand(command, false, null);
}

function addHeading(editorIndex) {
    const heading = prompt("Введите текст заголовка:");
    if (heading) {
        document.execCommand('insertHTML', false, '<h1>' + heading + '</h1>');
    }
}

function saveFile(editorIndex) {
    const text = document.getElementById('editor' + editorIndex).innerHTML;
    const blob = new Blob([text], { type: 'text/html' });

    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'document_' + (editorIndex + 1) + '.txt';
    a.click();
    URL.revokeObjectURL(url);
}

function clearContent(editorIndex) {
    document.getElementById('editor' + editorIndex).innerHTML = '';
}

function loadFile(event, editorIndex) {
    const file = event.target.files[0];
    const reader = new FileReader();
    
    reader.onload = function(e) {
        const content = e.target.result;
        document.getElementById('editor' + editorIndex).innerHTML = content;
    };
    
    if (file) {
        reader.readAsText(file);
    }
}
function openHelp() {
    document.getElementById('help-modal').style.display = 'block';
}

function closeHelp() {
    document.getElementById('help-modal').style.display = 'none';
}

// Закрытие модального окна при клике вне его
window.onclick = function(event) {
    const modal = document.getElementById('help-modal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}
function openExit() {
    document.getElementById('exit-modal').style.display = 'block';
}

function closeExit() {
    document.getElementById('exit-modal').style.display = 'none';
}

// Закрытие модального окна при клике вне его
window.onclick = function(event) {
    const modal = document.getElementById('exit-modal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}