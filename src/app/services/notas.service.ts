import { Injectable } from '@angular/core';
import { Nota } from '../model/nota';

const NOTAS: Nota[] = [
  {id: 1,titulo: 'Nota 1',contenido: 'Contenido nota 1 desde service'},
  {id: 2,titulo: 'Nota 2',contenido: 'Contenido nota 2'},
  {id: 3,titulo: 'Nota 3',contenido: 'Contenido nota 3'},
  {id: 4,titulo: 'Nota 4',contenido: 'Contenido nota 4'}
];

@Injectable({
  providedIn: 'root'
})
export class NotasService {
  constructor() { }

  getNotas(){
    return NOTAS;
  }

  addNota(titulo: string, contenido: string) {
    NOTAS.push({
      id: 2, 
      titulo: 'nota 5',
      contenido: 'afaf',
    })
  }
}
