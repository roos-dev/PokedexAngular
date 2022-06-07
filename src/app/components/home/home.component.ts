import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  sidebarItems: MenuItem[] = [];
  display = true;
  constructor() {}

  ngOnInit(): void {
    console.log('NgOnInit Home component');
    this.sidebarItems = [
      { label: 'pokedex', icon: 'pi pi-tablet', routerLink: '/home' },
      { label: 'items', icon: 'pi pi-shopping-bag', routerLink: '/home/itembag' },
    ];
  }
}
