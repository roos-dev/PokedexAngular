import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ItemsService {
  itemsList = 'https://pokeapi.co/api/v2/item';
  constructor(private http: HttpClient) {}
  GetItems() {
    return this.http.get(this.itemsList);
  }
}
