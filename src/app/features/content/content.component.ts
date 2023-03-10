import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { Product } from 'src/app/Product';
import { ProductService } from 'src/app/product.service';
import { __values } from 'tslib';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent implements OnInit {
  public products: Product[] = [];
  displayModal: boolean = false;

  departments: any[] = [
    { code: 'Phòng ban', name: 'Phòng ban' },
    { code: 'Phòng ngủ', name: 'Phòng ngủ' },
  ];

  status: any[] = [
    { code: 'online', name: 'online' },
    { code: 'offline', name: 'offline' },
  ];

  group: any[] = [
    { code: 'a', name: 'a' },
    { code: 'b', name: 'b' },
  ];

  items: any[] = [
    { label: 'Quản trị danh mục' },
    { label: 'Danh mục người dùng' },
  ];

  home: MenuItem = {icon: 'pi pi-home', routerLink: '/'}

  constructor(
    private productService: ProductService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.getTableData();
  }

  public submitForm = this.formBuilder.group({
    name: null,
    department: null,
    status: null,
    account: null,
    code: null,
  });

  public onSubmit() {
    let params = this.submitForm.getRawValue();
    this.productService.getData(params).subscribe((data) => {
      this.products = data;
    });
  }

  public getTableData() {
    this.productService.getData().subscribe((data) => {
      this.products = data;
    });
  }

  reload() {
    this.submitForm.patchValue({
      name: null,
      department: null,
      status: null,
      account: null,
      code: null,
    });
    this.getTableData();
  }

  showModalDialog(event: boolean) {
    this.displayModal = event;
  }

  changeDisplayModal(event: boolean) {
    this.displayModal = event;
    this.reload();
  }
}
