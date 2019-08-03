import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';


import {MatTabsModule} from '@angular/material/tabs';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { OvertableComponent } from './overtable/overtable.component';
import { MatTableModule } from '@angular/material';
import {MatSortModule} from '@angular/material';

import { MatRadioModule } from '@angular/material';
import { GroupingComponent } from './grouping/grouping.component';

import {DragDropModule} from 'primeng/dragdrop';

import {TableModule} from 'primeng/table';

import {DropdownModule} from 'primeng/dropdown';
import { SmartGroupComponent } from './grouping/smart-group/smart-group.component';

import { SortablejsModule } from 'ngx-sortablejs';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    HomeComponent,
    OvertableComponent,
    GroupingComponent,
    SmartGroupComponent,

  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    MatTabsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatSortModule,
    DragDropModule,
    TableModule,
    DropdownModule,
    SortablejsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
