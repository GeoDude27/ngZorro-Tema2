import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';

import { ItemsRoutingModule } from './items/items-routing.module';
import { ItemListComponent } from './items/item-list/item-list.component';
import { ItemFormComponent } from './items/item-form/item-form.component';
import { AddressFormatPipe } from './items/address-format.pipe';

@NgModule({
  declarations: [
    ItemListComponent,
    ItemFormComponent,
    AddressFormatPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule, 
    NzTableModule,
    NzButtonModule,
    NzModalModule,
    NzFormModule,
    NzIconModule,
    NzInputModule,
    ItemsRoutingModule
  ]
})
export class ItemsModule { }
