import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NoteListComponent } from './note-list/note-list.component';
import { NoteComponent } from './note-list/note/note.component';
import { NoteLayoutComponent } from './note-layout/note-layout.component';
import { AddNoteComponent } from './add-note/add-note.component';
import { NotesService } from './services/notes.service';
import { NoteSearchComponent } from './note-search/note-search.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    NoteListComponent,
    NoteComponent,
    NoteLayoutComponent,
    AddNoteComponent,
    NoteSearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [NotesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
