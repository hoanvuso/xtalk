import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NgbModule,NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { RoutingModule } from './routing/routing.module';
import { HomeComponent } from './modules/home/home.component';
import { ListModelComponent } from './modules/list-model/list-model.component';
import { ModalModule } from './_modal';
//import { SearchableListPipe } from './_pipe/searchable-list.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { XtalkNotificationComponent} from '@/modules/xtalk-notification/xtalk-notification.component';
import { PipeModule } from '@/_pipe/pipe/pipe.module';
import { DefaultModule} from '@/layouts/default/default.module';
import { SharedModule,ImportsMaterialModule} from '@/shared/shared.module';
import { AuthModule } from './layouts/auth/auth.module';
import { FlexLayoutModule } from '@angular/flex-layout';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListModelComponent,
    XtalkNotificationComponent,
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    RoutingModule,
    ModalModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    BrowserAnimationsModule,
    ImportsMaterialModule,
    SharedModule,
    PipeModule,
    DefaultModule,
    AuthModule,
    FlexLayoutModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  chatName:string="Kim Amana";
}

