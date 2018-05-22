document.addEventListener("DOMContentLoaded", () => {
    const model = {
        init: function () {
            this.notes = []
        },
        add: function (obj) {
            this.notes.push(obj);
        },
        getAllNotes: function () {
            return this.notes
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
        },
        clearNotes: function() {
            model.init();
            view.render();
        }
    };


    const view = {
        init: function () {
            this.noteList = document.querySelector('#notes');
            let newNoteForm = document.querySelector('#new-note-form');
            let newNoteContent = document.querySelector('#new-note-content');
            const clearNotes = document.querySelector('.remove-notes')
            
            newNoteForm.addEventListener('submit', (e) => {
                octopus.addNewNote(newNoteContent.value);
                newNoteContent.value = '';
                e.preventDefault();
            });

            clearNotes.addEventListener('click', function() {
                octopus.clearNotes();
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