import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'gtd-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  @Output() goHome: EventEmitter<null> = new EventEmitter<null>();

  constructor() {
  }

  ngOnInit() {
  }

  navigateHome(event: any): void {
    event.preventDefault();
    this.goHome.emit(null);
  }
}
