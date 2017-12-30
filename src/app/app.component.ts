import { Component } from '@angular/core';

//service
import { SwapiService } from './service/swapi.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[SwapiService]
})
export class AppComponent {

  allPlanets:any;
  fetchError:any;
  loader:boolean = true;
  
  constructor(private _swapiServices:SwapiService){

  }

  ngOnInit(){
    this.getPlanetData();
  }

  // Getting the intial list of data when loading
  getPlanetData(){
    this._swapiServices.getPlanets().subscribe(
      data=>{
        this.allPlanets = data.results;
      },  
      error => {
        this.fetchError = error;
        this.loader = false;
      },
      
      ()=>{
        this.loader = false;
      }
    )
  }
}
