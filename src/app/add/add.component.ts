import { Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  @Output() childEmitter = new EventEmitter<any>();

  handleClick(){
    this.childEmitter.emit();
  }

}
