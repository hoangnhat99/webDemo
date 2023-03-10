import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FeaturesRoutingModule } from './features-routing.module';
import { FeaturesComponent } from './features.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { MenuComponent } from './menu/menu.component';
import { ContentComponent } from './content/content.component';
import { MatIconModule } from '@angular/material/icon';
import { AccordionModule } from 'primeng/accordion';
import { InputTextModule } from 'primeng/inputtext';
import { ToolbarModule } from 'primeng/toolbar';
import { PanelMenuModule } from 'primeng/panelmenu';
import { CascadeSelectModule } from 'primeng/cascadeselect';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';
import { PanelModule } from 'primeng/panel';
import { TreeModule } from 'primeng/tree';
import { DialogModule } from 'primeng/dialog';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { ContentActionComponent } from './content/content-action/content-action.component';
import {ToastModule} from 'primeng/toast';
import {MultiSelectModule} from 'primeng/multiselect';
import {BreadcrumbModule} from 'primeng/breadcrumb';
import {BadgeModule} from 'primeng/badge';

@NgModule({
  declarations: [
    FeaturesComponent,
    TopBarComponent,
    MenuComponent,
    ContentComponent,
    ContentActionComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FeaturesRoutingModule,
    HttpClientModule,
    MatIconModule,
    AccordionModule,
    InputTextModule,
    ToolbarModule,
    PanelMenuModule,
    CascadeSelectModule,
    ButtonModule,
    TableModule,
    PaginatorModule,
    PanelModule,
    TreeModule,
    DialogModule,
    MessagesModule,
    MessageModule,
    ToastModule,
    MultiSelectModule,
    BreadcrumbModule,
    BadgeModule
  ],
})
export class FeaturesModule {}
