import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import { ReactiveFormsModule } from '@angular/forms';
import { MenuItemComponent } from './dashboard/menu-item/menu-item.component';
import {MatListModule} from '@angular/material/list';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatMenuModule} from '@angular/material/menu';
import { HeaderComponent } from './dashboard/header/header.component';
import { LayoutComponent } from './dashboard/layout/layout.component';
import {MatSidenav, MatSidenavModule} from '@angular/material/sidenav';
import { PageHeaderComponent } from './dashboard/page-header/page-header.component';
import { HomeComponent } from './home/home.component';
import { SalesComponent } from './sales/sales.component';
@NgModule({
  declarations: [
    AppComponent,
    MenuItemComponent,
    HeaderComponent,
    LayoutComponent,
    PageHeaderComponent,
    HomeComponent,
    SalesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatMenuModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatTabsModule,
    MatIconModule,
    MatInputModule,
    MatToolbarModule,
    MatTableModule,
    ReactiveFormsModule,
    FormsModule,
    MatCardModule,
    MatListModule,
    MatExpansionModule,
    MatSidenavModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
