import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResponseResetPasswordComponent } from './response-reset-password/response-reset-password.component';
import { ResponseResetPasswordRoutingModule } from './response-reset-password-routing.module';
import { ReactiveFormsModule,FormsModule }    from '@angular/forms';

@NgModule({
  declarations: [ResponseResetPasswordComponent],
  imports: [
    CommonModule,
	ReactiveFormsModule,
	FormsModule,
	ResponseResetPasswordRoutingModule
  ]
})
export class ResponseResetPasswordModule { }
