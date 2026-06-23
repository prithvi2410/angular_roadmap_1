import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ChildComponent } from '../child-component/child-component';
@Component({
  selector: 'app-main-component',
  imports: [FormsModule,CommonModule,ChildComponent],
  templateUrl: './main-component.html',
  styleUrl: './main-component.css',
})
export class MainComponent {
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
