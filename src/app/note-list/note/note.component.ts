import {Component, Input, OnInit} from '@angular/core';
import {NotesService} from '../../services/notes.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {
  @Input() note;
  constructor(private notesService: NotesService) { }

  ngOnInit() {
  }
  noteClicked(note) {
    this.notesService.updateNote.emit(note);
  }
}
