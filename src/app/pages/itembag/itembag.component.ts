import { Component, OnInit } from '@angular/core';
import { ItemsService } from 'src/app/services/items.service';

@Component({
  selector: 'app-itembag',
  templateUrl: './itembag.component.html',
  styleUrls: ['./itembag.component.scss'],
})
export class ItembagComponent implements OnInit {
  constructor(private itemsService: ItemsService) {}

  ngOnInit(): void {
    this.itemsService.GetItems().subscribe((response) => {
      console.log('items', response);
    });
  }
}
