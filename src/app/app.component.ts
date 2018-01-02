import { Component, ViewChild } from '@angular/core';

import { ModalDirective } from 'ngx-bootstrap/modal';

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
  totalCount:number;
  nextUrl:string;
  dataCount = new Array();

  planetAttributes:Object;
  individualData:object;


  @ViewChild('childModal') childModal: ModalDirective;
  @ViewChild('planetForm') planetForm;
  @ViewChild('planetViewModal') planetViewModal: ModalDirective;

  constructor(private _swapiServices:SwapiService){
    this.resetPlanetAttributes();
  }

  ngOnInit(){
    this.getPlanetData();
  }

  resetPlanetAttributes() {
    this.planetAttributes = {
      name:'',
      rotation_period:'',
      orbital_period:'',
      diameter:'',
      climate:'',
      gravity:'',
      terrain:'',
      surface_water:'',
      population:'',
      residents:'',
      films:''
    }
  }

  // Getting the intial list of data when loading
  getPlanetData(){
    this._swapiServices.getPlanets().subscribe(
      data=>{
        this.totalCount = data['count'];
        this.allPlanets = data['results'];
        this.nextUrl = data['next'];
        console.log('assigned value');
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

  // Multiple Delete
  multipleDelete(){
    this.totalCount = this.totalCount - this.dataCount.length;
    if(this.dataCount.length>=1){
      this.dataCount = this.dataCount.sort(function(a,b){return a-b});
      console.log(this.dataCount);
        for(let i=0; i<this.dataCount.length;i++){
          let j=this.dataCount[i];
          if(i>0){
             j = this.dataCount[i]-1;
          }
          this.allPlanets.splice(j,1);
        }
        this.dataCount = [];
    }
  }

  // Checkbox action for multiple select
  checkBox(el, value:number){

    if(el.target.checked)
      {
        this.dataCount.push(value);

      }else{

        let index = this.dataCount.indexOf(value);
        this.dataCount.splice(index,1);

      }   

  }

  // Individual Delete
  delete(data:number){
    if(window.confirm('Are sure you want to delete this?')){
      this.allPlanets.splice(data,1);
    }
  }
  
  parentMethod():void{
    this.childModal.show();
  }

  // Load more function
  loadMore(){
    let nextData;
    this.loader = true;
    this._swapiServices.getPlanetsNext(this.nextUrl).subscribe(
      data=>{
        this.nextUrl = data['next'];
        nextData= data['results'];
      },
      error => {
        this.fetchError = error
      },()=>{
        for(let i=0; i<nextData.length;i++){
          this.allPlanets.push(nextData[i]);
        }
        this.loader = false;

      }
    )
  }

  hideChildModal(){
    this.childModal.hide();
  }
  
  submit(){

    this.allPlanets.push(this.planetAttributes);
    this.totalCount += 1;
    this.hideChildModal();
    this.resetPlanetAttributes();
    this.planetForm.reset();

  }

  view(data:number){
    this.individualData = this.allPlanets[data];
    this.planetViewModal.show();
  }
  hidePlanetViewModal(): void {
    this.planetViewModal.hide();
  }

}
