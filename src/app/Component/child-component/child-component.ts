import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-component',
  imports: [],
  templateUrl: './child-component.html',
  styleUrl: './child-component.css',
})
export class ChildComponent {
  @Input('parentData') public inputData = '';
  @Output() public childOutput = new EventEmitter();
  ChildData = "This text is from Child-component!"

  sendOutput()
  {
    this.childOutput.emit(this.ChildData);
    console.log('im here')
  }
}
