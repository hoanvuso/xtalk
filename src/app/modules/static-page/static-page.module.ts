import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { StaticPageComponent } from './static-page.component';
import { StaticPageRoutingModule } from './static-page-routing.module';
import { ReactiveFormsModule,FormsModule }    from '@angular/forms';
import { CKEditorModule } from 'ngx-ckeditor';
import { MatFormFieldModule,
  MatInputModule,
  MatSidenavModule,
  MatDialogModule, 
  MatDividerModule, 
  MatCardModule, 
  MatPaginatorModule, 
  MatTableModule ,
  MatCheckboxModule,
  MatButtonModule,
  MatIconModule,
  MatSelectModule
 } from '@angular/material';
import { ManagerStaticPageComponent } from './manager-static-page/manager-static-page.component';
@NgModule({
  declarations: [StaticPageComponent, ManagerStaticPageComponent],
  imports: [
    MatInputModule,
    MatSidenavModule,
    MatDialogModule, 
    MatDividerModule, 
    MatCardModule, 
    MatPaginatorModule, 
    MatTableModule ,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    CKEditorModule,
    CommonModule,
    StaticPageRoutingModule,
	  FormsModule,
    ReactiveFormsModule,
    CKEditorModule
  ],
   providers: [
    
  ],
  exports:[
    StaticPageRoutingModule
  ]
})
export class StaticPageModule {}
