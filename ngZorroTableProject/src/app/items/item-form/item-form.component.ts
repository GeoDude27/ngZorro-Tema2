import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Item } from '../item.interface';

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.css']
})
export class ItemFormComponent implements OnInit {
  @Input() item: Item | null = null;
  @Output() formSubmit = new EventEmitter<Item>();
  itemForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.itemForm = this.fb.group({
      id: [this.item?.id],
      name: [this.item?.name || '', [Validators.required]],
      email: [this.item?.email || '', [Validators.required, Validators.email]],
      age: [this.item?.age || '', [Validators.required, Validators.min(1)]],
      address: [this.item?.address || '', [Validators.required]]
    });
  }

  onSubmit(): void {
    if (this.itemForm.valid) {
      this.formSubmit.emit(this.itemForm.value);
    } else {
      for (const i in this.itemForm.controls) {
        if (this.itemForm.controls.hasOwnProperty(i)) {
          this.itemForm.controls[i].markAsDirty();
          this.itemForm.controls[i].updateValueAndValidity();
        }
      }
    }
  }
}
