import { Injectable } from '@angular/core';
import { Nota } from '../model/nota';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class NotasService   {
  
  private URLNotas = 'http://localhost:3000/notes';

  constructor(private http: HttpClient){}
    

  public getNotas(): Observable<Nota[]>{
    return this.http.get<Nota[]>(this.URLNotas);
  }
/*
  async addNota(titulo: string, contenido: string): Promise {
    NOTAS.push({
      id: 2, 
      titulo: 'nota 5',
      contenido: 'afaf',
    })
    
  }
  */
}
