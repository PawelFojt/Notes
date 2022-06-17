const Note = require('../../db/models/note');

class NoteActions {
    saveNote(req, res) {
        // const newNote = new Note ({ 
        //     title: 'Zrobić zakupy', 
        //     body: 'mleko jajka ser'
        // });
        // newNote.save().then(() => {
        //     console.log('notatka została zapisana')
        // });
        const title = req.body.title;
        const body = req.body.body;
        res.send('notatka zapisana. Tytuł: ' + title + 'treść: ' + body);
    }

    getAllNotes(req, res) {
        //pobieranie notatek
        res.send('API działa');
    }

    getNote(req, res) {
        //pobieranie notatek
        res.send('Informacje o notatce');
    }

    updateNote(req, res) {
        //pobieranie notatek
        res.send('Notatka zaktualizowana');
    }

    deleteNote(req, res) {
        const id = req.params.id;
        //pobieranie notatek
        res.send('Notatka usunięta. ID: ' + id);
    }
}

module.exports = new NoteActions();