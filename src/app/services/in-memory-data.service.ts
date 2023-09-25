import { Injectable } from '@angular/core';
import { Nota } from '../model/nota';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const notes: Nota[] = [
      {id: 1,titulo: 'Nota 1',contenido: 'Contenido nota 1 desde db'},
      {id: 2,titulo: 'Nota 2',contenido: 'Contenido nota 2'},
      {id: 3,titulo: 'Nota 3',contenido: 'Contenido nota 3'},
      {id: 4,titulo: 'Nota 4',contenido: 'Contenido nota 4'}
    ];
    return {notes};
  }

  genId(notes: Nota[]){
    return notes.length > 0 ? Math.max(...notes.map(note =>note.id)) + 1 : 0;
  }

  constructor() { }
}
