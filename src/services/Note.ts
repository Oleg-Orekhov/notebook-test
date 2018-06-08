export class Note {
  id: string;
  caption: string;
  text: string;
  keywords: any;
  date: string;
  constructor(note) {
    this.id = note.id;
    this.caption = note.caption;
    this.text = note.text;
    this.keywords = note.keywords;
    this.date = note.date;
  }
}
