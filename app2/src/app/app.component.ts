import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  //title = 'Eso';

  //https://stackoverflow.com/questions/48123811/getting-data-from-an-api-in-angular-4

  public results: string[];
  public claves: string[];

  //Inyectar HttpClient en el componente o servicio
  constructor(private http: HttpClient){}

  get_persons() : string[]
  {
    /*this.http.get('https://apirestpersonasangel.azurewebsites.net/api/personas')
      .subscribe((results) =>{
        console.log(results);
      })*/

      //Haciendo la peticion HTTP
    this.http
    .get('https://apirestpersonasangel.azurewebsites.net/api/personas')
    .subscribe(data => {
      //Lee los resultados de los campos del JSON de la respuesta
      this.results = data['results'];
      console.log(data);
    })

    return this.results;
  }

  ngOnInit(): void
  {
    
    //Haciendo la peticion HTTP
    /*this.http
      .get('https://apirestpersonasangel.azurewebsites.net/api/personas')
      .subscribe(data => {
        //Lee los resultados de los campos del JSON de la respuesta
        this.results = data['results'];
        console.log(data);
      })*/

      this.get_persons();
      //this.obtenerClaves();
  }

  obtenerClaves()
  {
    //let _aux = []
    //_aux.push(Object.keys(this.results));
    //console.log(_aux);

    //this.claves = _aux;

    //Haciendo la peticion HTTP
    this.http
    .get('https://apirestpersonasangel.azurewebsites.net/api/personas')
    .subscribe(data => {
      //Lee los resultados de los campos del JSON de la respuesta
      this.results = data['results'];
    })
    

  }

  /*get clavesPersona(): string[]
  {
    //Queremos un array unico de nueros para las cabeceras
    let _personas = []

    //this.results.forEach((person) =>{
      //Añade la clave si no ha sido añadida todavia
    //  if(!_personas.includes(person.))
    //})

    //if(this.results==null) this.get_persons(); 
    
    _personas.push(Object.keys(this.results));

    return _personas;
  }*/


  /*getColumnData(head, i):string
  {
    const datos = this.results[i].
  }*/

  title = 'App';

}

/*import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
//import {HttpModule} from '@angular/http';
//import {} from '@ng-boo'

import {AppComponent} from './app.component';

@NgModule({
  declarations:
  [
    AppComponent
  ],
  imports:
  [
    BrowserModule,
    FormsModule
  ],
  providers: [AppComponent],
  bootstrap: [AppComponent]
})*/