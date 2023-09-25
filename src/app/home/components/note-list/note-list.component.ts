import { CommonModule } from '@angular/common';
import {Component} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { Observable } from 'rxjs';
import { Nota } from 'src/app/model/nota';
import { NotasService } from 'src/app/services/notas.service';



@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css'],
  standalone: true,
  imports: [MatCardModule, MatButtonModule, CommonModule],
  
})
export class NoteListComponent {
  notas: Nota[] = [];
  constructor(private notasService: NotasService) {}

  ngOnInit(): void {
    this.notasService.getNotas().subscribe(result => this.notas = result);
  }
}
