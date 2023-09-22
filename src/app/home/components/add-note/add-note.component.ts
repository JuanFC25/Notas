import {Component} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { NotasService } from 'src/app/services/notas.service';


@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css'],
  standalone: true,
  imports: [MatButtonModule, MatDividerModule, MatIconModule],
})
export class AddNoteComponent {

  constructor(private notasService: NotasService){}
  agregarNota(titulo: string, contenido: string) {
    this.notasService.addNota(titulo, contenido);
  }
}
