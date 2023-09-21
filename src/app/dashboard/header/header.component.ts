import { Component, OnInit,  ChangeDetectionStrategy,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
  @Output() menuToggled = new EventEmitter<boolean>();
  user: string = 'Zain';

  constructor() { }

  ngOnInit(): void {
  }
logout():void{
  console.log('Logged out')
}
}
