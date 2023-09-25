import {Component} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { NotasService } from 'src/app/services/notas.service';
import { RouterModule } from '@angular/router';
import {MatDialog, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import { CreateNoteComponent } from 'src/app/create-note/create-note.component';


@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css'],
  standalone: true,
  imports: [MatButtonModule, MatDividerModule, MatIconModule, RouterModule, MatDialogModule],
})
export class AddNoteComponent {

  constructor(private notasService: NotasService,
    public dialog: MatDialog){}
  
  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(CreateNoteComponent, {
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  agregarNota(titulo: string, contenido: string) {
    

    //this.notasService.addNota(titulo, contenido);
  }
}
