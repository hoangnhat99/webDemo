import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  nodes: TreeNode[] = [];

  constructor() {}

  ngOnInit(): void {
    this.menuList();
  }

  public menuList() {
    this.nodes = [
      {
        key: '0',
        label: 'Quản trị danh mục',
        children: [
          { key: '0-0', label: 'Danh mục người dùng', data: '#', type: 'url' },
          { key: '0-1', label: 'Danh mục người dùng', data: '#', type: 'url' },
          { key: '0-2', label: 'Danh mục người dùng', data: '#', type: 'url' },
          { key: '0-3', label: 'Danh mục người dùng', data: '#', type: 'url' },
        ],
      },
    ];
  }
}
