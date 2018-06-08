import { Component, ViewChild } from '@angular/core';
import { NotesService } from '../../../services/notes.service';

@Component({
  selector: 'app-note-layout',
  templateUrl: './note-layout.component.html',
  styleUrls: ['./note-layout.component.css']
})
export class NoteLayoutComponent {
  @ViewChild('form') form;
  note = {
    'caption' : '',
    'text': '',
    'keywords': '',
    'date': ''
  };
  constructor(private notesService: NotesService) {
    this.notesService.updateNote.subscribe(res => {
      this.form.controls.caption.markAsPristine();
      this.form.controls.caption.markAsUntouched();
      this.form.controls.keywords.markAsPristine();
      this.form.controls.keywords.markAsUntouched();
      this.note = JSON.parse(JSON.stringify(res)); // deep copy
      if (Array.isArray(this.note.keywords)) {
        this.note.keywords = this.note.keywords.join(', ');
      }
    });
  }
  saveNote(event) {
    event.preventDefault();
    if (this.form.invalid) {
      this.form.controls.caption.markAsDirty();
      this.form.controls.keywords.markAsDirty();
      return;
    }
    const note = JSON.parse(JSON.stringify(this.note));
    if (this.note.keywords !== '') {
      let keywords: any = note.keywords.replace(/ /g,'');
      keywords = keywords.split(',');
      note.keywords = keywords;
    }
    this.notesService.saveNote(note);
  }
  deleteNote(event) {
    event.preventDefault();
    this.notesService.deleteNote(this.note);
  }
}
