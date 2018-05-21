document.addEventListener("DOMContentLoaded", () => {
    const model = {
        init: function () {
            if (!localStorage.notes) {
                localStorage.notes = JSON.stringify([]);
            }
        },
        add: function (obj) {
            var data = JSON.parse(localStorage.notes);
            data.push(obj);
            localStorage.notes = JSON.stringify(data);
        },
        getAllNotes: function () {
            return JSON.parse(localStorage.notes);
        }
    };


    const octopus = {
        addNewNote: function (noteStr) {
            model.add({
                content: noteStr,
                createdAt: Date.now()
            });
            view.render();
        },
        getNotes: function () {
            return model.getAllNotes().reverse();
        },
        init: function () {
            model.init();
            view.init();
        }
    };


    const view = {
        init: function () {
            this.noteList = document.querySelector('#notes');
            let newNoteForm = document.querySelector('#new-note-form');
            let newNoteContent = document.querySelector('#new-note-content');
            newNoteForm.addEventListener('submit', (e) => {
                octopus.addNewNote(newNoteContent.value);
                newNoteContent.value = '';
                e.preventDefault();
            });
            view.render();
        },
        render: function () {
            var htmlStr = '';
            for(const note of octopus.getNotes()) {
                htmlStr += `<li class="note"><span class="createdAt">${new Date(note.createdAt).toLocaleDateString("en-US", {year: 'numeric', month: 'long', day: 'numeric' })}</span> - ${note.content}</li>`;
            }
            this.noteList.innerHTML = htmlStr;
        }
    };

    octopus.init();
    
})