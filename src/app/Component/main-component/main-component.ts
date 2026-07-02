import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ChildComponent } from '../child-component/child-component';
import { DataService } from '../../Services/DataServices/data-service';
import { IApi } from '../../Model/IApi';
import { DummyApiCall } from '../../Services/API/dummy-api-call';
import { Observable } from 'rxjs';
import { RouterLink, RouterLinkActive } from '@angular/router';
@Component({
  selector: 'app-main-component',
  imports: [FormsModule,CommonModule,ChildComponent,RouterLink,RouterLinkActive],
  providers: [DataService],
  templateUrl: './main-component.html',
  styleUrl: './main-component.css',
})
export class MainComponent {
  serviceData:string[] = [];
  apiData?: IApi;
  constructor(private _dataService :DataService){}
  _apiDataService =  inject(DummyApiCall);
  apiData$: Observable<IApi> = this._apiDataService.getAPI();
  ngOnInit(){
    this.serviceData = this._dataService.getData();
    //this._apiDataService.getAPI().subscribe(data => {this.apiData = data; console.log('API data received:')x;} )
  }
  name = 'This is a text from main-component.ts';
  isDisabled = true;
  twoWayData = "" 
  isNgIfTrue = false;
  forLoop = ["Red","Green","Blue", "Yellow"]
  childComponentData = "This text is from main-component(parent component)"
  childMessage = '';
  sample_method()
  {
    return this.name + " but from a sample method in .ts"
  } 
  onClick(event:any){
    console.log("event loged");
    console.log(event);
  }
  ngIfMethod()
  {
    this.isNgIfTrue = !this.isNgIfTrue;
  }
}
