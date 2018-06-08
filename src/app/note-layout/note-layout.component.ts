import {Component, OnInit, ViewChild} from '@angular/core';
import {NotesService} from '../services/notes.service';

@Component({
  selector: 'app-note-layout',
  templateUrl: './note-layout.component.html',
  styleUrls: ['./note-layout.component.css']
})
export class NoteLayoutComponent implements OnInit {
  @ViewChild('form') form;
  note = {
    'caption' : '',
    'text': '',
    'keywords': '',
    'date': ''
  };
  constructor(private notesService: NotesService) {
  }

  ngOnInit() {
    this.notesService.updateNote.subscribe(res => {
      this.note = JSON.parse(JSON.stringify(res)); // deep copy
      console.log(this.note);
      if (Array.isArray(this.note.keywords)) {
        this.note.keywords = this.note.keywords.join(', ');
      }
    });
  }
  saveNote(event) {
    event.preventDefault();
    console.log(this.form);
    if (this.form.invalid) {
      return;
    }
    const note = JSON.parse(JSON.stringify(this.note));
    if (this.note.keywords !== '') {
      let keywords: any = note.keywords.replace(/ /g,'');
      console.log(keywords);
      keywords = keywords.split(',');
      note.keywords = keywords;
    }
    console.log(note);
    this.notesService.saveNote(note);
  }
  deleteNote(event) {
    event.preventDefault();
    this.notesService.deleteNote(this.note);
  }
}
