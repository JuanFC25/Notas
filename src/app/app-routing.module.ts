import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreateNoteComponent } from './create-note/create-note.component';

const routes: Routes = [
  {path: '', redirectTo: 'notes', pathMatch: 'full'},
  {path: 'notes', component: HomeComponent},
  {path: 'note/add', component: CreateNoteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
