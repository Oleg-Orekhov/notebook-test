import {EventEmitter, Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Note } from './Note';

@Injectable()
export class NotesService {
  note;
  notes = [];
  updateNote = new EventEmitter();
  updateNotes = new EventEmitter();
  updateCurrentNotes = new EventEmitter();
  constructor(private http: HttpClient) {
    this.http.get('assets/notes.json').subscribe(res => {
      this.updateNotes.emit(res);
      this.updateCurrentNotes.emit(res);
      this.updateNote.emit(res[0]);
    });
    this.updateNote.subscribe(res => {
      this.note = res;
    });
    this.updateNotes.subscribe(res => {
      this.notes = res;
    });
  }

  addNote() {
    const notes = this.notes.slice();
    const currId = Math.floor(Math.random() * 1000);
    const newNote = new Note({
      'caption' : 'New Caption',
      'text': '',
      'keywords': '',
      'date': '',
      'id': currId
    });
    notes.push(newNote);
    this.updateNotes.emit(notes);
    this.updateCurrentNotes.emit(notes);
    this.updateNote.emit(newNote);
  }

  saveNote(note) {
    let index;
    const notes = this.notes.slice();
    notes.find((elm, elmIndex) => {
      if (elm.id === note.id) {
        index = elmIndex;
        return true;
      }
    });
    notes[index] = note;
    this.updateNotes.emit(notes);
    this.updateCurrentNotes.emit(notes);
  }

  deleteNote(note) {
    const newNotes = this.notes.filter(elm => {
      return !(elm.id === note.id);
    });
    this.updateNotes.emit(newNotes);
    this.updateCurrentNotes.emit(newNotes);
    this.updateNote.emit(newNotes[0]);
  }

  searchNotes(searchQuery) {
    if (searchQuery === '') {
      this.updateCurrentNotes.emit(this.notes);
    } else {
      const notes = this.notes.filter(elm => {
        if (elm.keywords !== '') {
          return elm.keywords.includes(searchQuery);
        } else {
          return false;
        }
      });
      this.updateCurrentNotes.emit(notes);
      if (notes.length > 0) {
        this.updateNote.emit(notes[0]); // render first element in search result
      }
    }
  }
}
