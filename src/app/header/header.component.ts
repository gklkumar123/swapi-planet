import { Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @Output() parentEmitter = new EventEmitter<any>();

  childMethod(){
    this.parentEmitter.emit();
  }
}
