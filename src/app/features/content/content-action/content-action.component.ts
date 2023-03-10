import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { Product } from 'src/app/Product';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-content-action',
  templateUrl: './content-action.component.html',
  styleUrls: ['./content-action.component.scss'],
  providers: [MessageService],
})
export class ContentActionComponent implements OnInit {
  public products: Product[] = [];

  constructor(
    private productService: ProductService,
    private formBuilder: FormBuilder,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.getTableData();
  }

  @Input() displayModal: boolean = false;
  @Output() messageEvent = new EventEmitter<boolean>();

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

  public addForm = this.formBuilder.group({
    account: ['', Validators.required],
    name: ['', Validators.required],
    position: ['', Validators.required],
    department: ['', Validators.required],
    email: [
      '',
      Validators.compose([
        Validators.required,
        Validators.pattern(/\S+@gmail.com/),
      ]),
    ],
    phone: [
      '',
      Validators.compose([
        Validators.required,
        Validators.pattern(/(0[2|3|5|7|8|9])+([0-9]{8})\b/g)
      ]),
    ],
    group: [null, Validators.required],
    status: [null, Validators.required],
  });

  showModalDialog() {
    this.displayModal = true;
    this.addForm.reset();
  }

  public addFormSubmit() {
    let addData = this.addForm.getRawValue();
    this.productService.postData(addData).subscribe({
      next: (res) => {
        this.closePopup();
        this.popUpMess(true);
      },
      error: (e) => {
        this.closePopup();
        this.popUpMess(false);
      },
    });
  }

  public popUpMess(mes: boolean) {
    this.messageService.add({
      severity: mes ? 'success' : 'error',
      summary: mes ? 'Success' : 'Error',
      detail: mes ? 'Thêm mới thành công' : 'Thêm mới thất bại',
    });
  }

  closePopup() {
    this.displayModal = false;
    this.messageEvent.emit(false);
    this.addForm.patchValue({
      account: null,
      name: null,
      position: null,
      department: null,
      email: null,
      phone: null,
      group: null,
      status: null,
    });
  }

  changeDisplayModal(event: boolean) {
    this.displayModal = event;
    this.reload();
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

  onlyNumberKey(event: any) {
    return event.charCode == 8 || event.charCode == 0
      ? null
      : event.charCode >= 48 && event.charCode <= 57;
  }
}
