import { Component } from '@angular/core';
import { NotesService } from '../../../services/notes.service';

@Component({
  selector: 'app-note-search',
  templateUrl: './note-search.component.html',
  styleUrls: ['./note-search.component.css']
})
export class NoteSearchComponent {
  searchQuery;
  constructor(private notesService: NotesService) { }
  searchNotes() {
    this.notesService.searchNotes(this.searchQuery);
  }
}
