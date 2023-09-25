import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { HomeComponent } from './home/home.component';
import { AddNoteComponent } from './home/components/add-note/add-note.component';
import { NoteListComponent } from './home/components/note-list/note-list.component';
import { NotasService } from './services/notas.service';
import { CreateNoteComponent } from './create-note/create-note.component';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToolbarComponent,
    AddNoteComponent,
    NoteListComponent,
    CreateNoteComponent,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    HttpClientModule
  ],
  providers: [NotasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
