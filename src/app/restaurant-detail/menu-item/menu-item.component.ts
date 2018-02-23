import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { MenuItem } from './menu-item.model';
import { trigger, state, style, transition, animate } from "@angular/animations";

@Component({
  selector: 'mt-menu-item',
  templateUrl: './menu-item.component.html',
  animations: [
    trigger('itemAppeared', [
      state('ready', style({ opacity: 1 })),
      transition('void => ready', [
        style({ opacity: 0, transform: 'translateY(-20px)' }),
        animate('500ms 100ms ease-in')
      ])
    ])
  ]
})
export class MenuItemComponent implements OnInit {

  menuItemState: string = 'ready';

  @Input() menuItem: MenuItem;
  @Output() add = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  emitAddEvent() {
    console.log('emitAddEvent raise');

    this.add.emit(this.menuItem);
  }
}
