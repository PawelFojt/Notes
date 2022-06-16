const Note = require('../../db/models/note');

module.exports = {
    saveNote(req, res) {


        const newNote = new Note ({ 
            title: 'Zrobić zakupy', 
            body: 'mleko jajka ser'
        });
        newNote.save().then(() => {
            console.log('notatka została zapisana')
        });

    res.send('Serwer spuer działa!');
    }
}