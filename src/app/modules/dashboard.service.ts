import { Injectable } from '@angular/core';
import { UserService , ModelService, AlertService} from '@/_servies';
import { User ,Model, CallHistory} from '@/_models';
import { IUser} from '@/_models/Interface/IUser';
import { IModel} from '@/_models/Interface/IModel';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import {Order} from '@/_models/order.model';
import { map } from 'rxjs/operators';
import {environment} from 'environments/environment';
import { CallService } from '@/_servies/call.service';
@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private currentListOrderSubject:BehaviorSubject<any>=new BehaviorSubject<any>(null);
  public currentListOrder=this.currentListOrderSubject.asObservable();
  private currentListUserSubject:BehaviorSubject<IUser>=new BehaviorSubject<IUser>(null);
  public currentListUser= this.currentListUserSubject.asObservable();
  private alartService:AlertService;
  public reports:any;
  private currentListPayoutSubject:BehaviorSubject<any>=new BehaviorSubject<any>(null);
  public currentListPayout=this.currentListOrderSubject.asObservable();
  private currentListModelSubject:BehaviorSubject<IModel>=new BehaviorSubject<IModel>(null);
  public currentListModel= this.currentListModelSubject.asObservable();
  private currentListCallSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  public currentListCall = this.currentListCallSubject.asObservable();
  constructor(private userService:UserService,
    private modelService:ModelService,
    private httpClient:HttpClient,
    private callService:CallService) {
    userService.getAllUserasAdmin().subscribe(
      data=>{
        this.currentListUserSubject.next(data);
      }
    );
    modelService.getAllModelasAdmin().subscribe(
      data=>{
        this.currentListModelSubject.next(data);
      }
    );
    callService.getAllHistoryByAdmin().subscribe(
      data=>{
        this.currentListCallSubject.next(data.data);
      }
    )
    
   }

  reloadListUser(){
    this.userService.getAllUser().subscribe(
      data=>{
        var temp:User[]=[];
        data.data.forEach((user,index,userEle) => {
            temp.push(new User().deserialize(user));
            if(index==this.currentListUserSubject.value.data.length){
              this.currentListUserSubject.next(data);
            }
            
        });
       
      }
    );
    
  }

  reloadListModel(){
    this.modelService.getAllModel().subscribe(
      data=>{
        var temp:User[]=[];
        data.data.forEach((user,index,userEle) => {
            temp.push(new User().deserialize(user));
            if(index == this.currentListModelSubject.value.data.length){
              this.currentListModelSubject.next(data);
            }
        });
       
      }
        );
       
      }

  public get currentListUserValue(): IUser{
    if(this.currentListUserSubject.value)
    {
      return this.currentListUserSubject.value;
    }
    else
    {
      this.userService.getAllUser().subscribe(
        data=>{
          return data;
        }
      ),err=>{
        this.alartService.error("Errors");
      };
    }
  }

  public get currentListModelValue():IModel{
    if(this.currentListModelSubject.value)
    {
      return this.currentListModelSubject.value;
    }
    else
    {
      this.modelService.getAllModel().subscribe(
        data=>{
          return data;
        }
      ),err=>{
        this.alartService.error("Errors");
      };
    }
  }

  public get currentListCallValue() {
    if (this.currentListCallSubject.value) {
      return this.currentListModelSubject.value;
    }
    else {
      this.callService.getAllHistoryByAdmin().subscribe(
        data => {
          return data;
        }
      ), err => {
        this.alartService.error("Errors");
      };
    }
  }

  public get currentListPayoutValue():any{
    return this.currentListPayoutSubject.value;
  }


  bigChart() {
    return [{
      name: 'User',
      data: [0,0,0,0,0,0,0,0,0,0,0,0]
    }, {
      name: 'Model',
      data: [0,0,0,0,0,0,0,0,0,0,0,0]
    }, {
      name: 'WithDraws',
      data: [0,0,0,0,0,0,0,0,0,0,0,0]
    }, {
      name: 'Reviews',
      data: [0,0,0,0,0,0,0,0,0,0,0,0]
    }, {
      name: 'Orders',
      data: [2, 2, 2, 6, 13, 30, 46 ,0,0,0,0,0]
    }];
  }

  cards() {
    return [71, 78, 39, 66];
  }

  

  public getReports()
  {
    return this.httpClient.get<any>(`${environment.apiUrl}/api/backend/reports`);
  }

  public getCharts()
  {
    return this.httpClient.get<any>(`${environment.apiUrl}/api/backend/reports/charts`);
  }

  getListOrder(sort: string='id', order: string='desc', page: number=0,limit:number=20)
  {      
    const queryUrl =`?&sort=${sort}&order=${order}&page=${page + 1}&limit=${limit}`;
    return this.httpClient.get<any>(`${environment.apiUrl}/api/backend/order/${queryUrl}`).pipe(map(data=>{
      let dataMap= data.data.map(element => {
         
         return new Order().deserialize(element);

      });
      data.data = dataMap;
      return data;
      
    }));
  }

  getListPayout(sort: string='id', order: string='desc', page: number=0,limit:number=20)
  {      
    const queryUrl =`?&sort=${sort}&order=${order}&page=${page + 1}&limit=${limit}`;
    return this.httpClient.get<any>(`${environment.apiUrl}/api/backend/payout/`);
  }

  getCallHistory(page=0,pageSize=20){
    this.callService.getAllHistoryByAdmin(page, pageSize).subscribe(
      data => {
        this.currentListCallSubject.next(data.data);
      }
    )
  }
}
