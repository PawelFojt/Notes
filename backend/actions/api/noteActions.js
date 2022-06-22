const Note = require('../../app/db/models/note');

class NoteActions {
    async saveNote(req, res) {
        const title = req.body.title;
        const body = req.body.body;

        let note;
        try {
            note = new Note ({ 
            title: title, 
            body: body
        });
        await note.save();
        } catch (err) {
            return res.status(422).json({message: err.message});
        }

        res.status(201).json(note);
    }

    //pobieranie notatek wraz z obsługą błędów która tu jest nie potrzebna (w ramach nauki)
     async getAllNotes(req, res) {
         let doc;
        try {
            doc =  await Note.find({});
        } catch (err) {
            return res.status(500).json({ message: err.message });
        }

        res.status(200).json(doc);
        
    }

    //pobieranie notatki
    async getNote(req, res) {
        const id = req.params.id;
        const note = await Note.findOne({ _id: id });

        res.status(200).json(note);
    }

    //aktualizowanie notatki
    async updateNote(req, res) {
        const id = req.params.id;
        const title = req.body.title;
        const body = req.body.body;
        const note = await Note.findOne({ _id: id });
        note.title = title;
        note.body = body;
        await note.save();

        res.status(201).json(note);
    }
    
    //usuwanie notatki
    async deleteNote(req, res) {
        const id = req.params.id;
        await Note.deleteOne({ _id: id });

        res.sendStatus(204);
    }
}

module.exports = new NoteActions();