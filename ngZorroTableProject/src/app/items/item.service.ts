import { Injectable } from '@angular/core';
import { Item } from './item.interface';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private itemsSubject = new BehaviorSubject<Item[]>([]);
  items$ = this.itemsSubject.asObservable();

  private items: Item[] = [
    { id: 1, name: 'John Doe', email: 'john.doe@example.com', age: 25, address: '123 Main St' },
    // adauga mai multe iteme pentru a avea cel putin 2 pagini
  ];

  constructor() {
    this.itemsSubject.next(this.items);
  }

  addItem(item: Item) {
    this.items.push({ ...item, id: this.items.length + 1 });
    this.itemsSubject.next(this.items);
  }

  updateItem(updatedItem: Item) {
    const index = this.items.findIndex(item => item.id === updatedItem.id);
    if (index !== -1) {
      this.items[index] = updatedItem;
      this.itemsSubject.next(this.items);
    }
  }

  getItemById(id: number): Item {
    return this.items.find(item => item.id === id) as Item;
  }
}
