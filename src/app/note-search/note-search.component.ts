import { Component, OnInit } from '@angular/core';
import {NotesService} from '../services/notes.service';

@Component({
  selector: 'app-note-search',
  templateUrl: './note-search.component.html',
  styleUrls: ['./note-search.component.css']
})
export class NoteSearchComponent implements OnInit {
  searchQuery;
  constructor(private notesService: NotesService) { }

  ngOnInit() {
  }
  searchNotes() {
    this.notesService.searchNotes(this.searchQuery);
  }
}
