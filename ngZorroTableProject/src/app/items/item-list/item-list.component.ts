import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';
import { Item } from '../item.interface';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  items: Item[] = [];
  isModalVisible = false;
  selectedItem: Item | null = null;

  constructor(private itemService: ItemService) {}

  ngOnInit(): void {
    this.itemService.items$.subscribe(items => {
      this.items = items;
    });
  }

  openModal(): void {
    this.selectedItem = null;
    this.isModalVisible = true;
  }

  editItem(item: Item): void {
    this.selectedItem = { ...item };
    this.isModalVisible = true;
  }

  handleCancel(): void {
    this.isModalVisible = false;
  }

  handleOk(): void {
    this.isModalVisible = false;
  }

  handleFormSubmit(item: Item): void {
    if (item.id) {
      this.itemService.updateItem(item);
    } else {
      this.itemService.addItem(item);
    }
    this.isModalVisible = false;
  }
}
