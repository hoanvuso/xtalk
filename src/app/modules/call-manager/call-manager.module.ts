import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CallManagerComponent} from './page/call-manager.component';
import { SharedModule,ImportsMaterialModule} from '@/shared/shared.module';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {PipeModule} from '@/_pipe/pipe/pipe.module';
import { CallManagerRoutingModule } from './call-manager-routing.module'
@NgModule({
  declarations: [
    CallManagerComponent
  ],
  imports: [
    NgbModule,
    ImportsMaterialModule,
    PipeModule,
    ReactiveFormsModule,
    SharedModule,
    CommonModule,
    FormsModule,
    CallManagerRoutingModule
  ]
})

export class CallManagerModule { }
