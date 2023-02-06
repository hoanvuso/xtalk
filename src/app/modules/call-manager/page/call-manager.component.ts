import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatCheckbox, MatButton, MatDialog, MatSort } from '@angular/material';
import { User, CallHistory } from '@/_models';
import { DashboardService } from '@/modules/dashboard.service';
@Component({
  selector: 'app-call-manager',
  templateUrl: './call-manager.component.html',
  styleUrls: ['./call-manager.component.css']
})
export class CallManagerComponent implements OnInit {
  listCalls = new MatTableDataSource<any>([]);
  resultsLength =0;
  displayedColumns: string[] = ['userId', 'to', 'callStatus', 'callDuration', 'recordingUrl', 'rating'];
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  constructor(
    private dashboardService: DashboardService
  ) {
    
    this.dashboardService.currentListCall.subscribe(data => {
      if (data != null) {
        this.listCalls = new MatTableDataSource<CallHistory>(data['listCall']);
        this.listCalls.sort = this.sort;
        this.resultsLength = data['total'];
        this.paginator = this.paginator;
      }
      else {
        this.listCalls = new MatTableDataSource([]);
      }
    })

  }

  ngOnInit() {

  }

  handlePage(event){
    const page =event.pageIndex;
    const pageSize = event.pageSize;
    this.dashboardService.getCallHistory(page,pageSize);
  }
 
}
