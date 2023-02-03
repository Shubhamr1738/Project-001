import { Component, OnInit } from '@angular/core';
import {LabourService} from '../services/labour.service'
import { LabourReport } from '../models/labour';

@Component({
  selector: 'app-labour-report',
  templateUrl: './labour-report.component.html',
  styleUrls: ['./labour-report.component.css']
})
export class LabourReportComponent implements OnInit {
  labourData: LabourReport = {
    value: '',
    id: '',
    name: '',
    skilled: '',
    unskilled: '',
    workDone: ''
    };

  table:any
  dataSource:any
  site:any
  labourId:any
  
  displayedColumns: string[] = ['demo-Name', 'demo-Skill', 'demo-Unskill', 'demo-Workdone','demo-delete'];
    
    constructor(private labourDataService: LabourService) { }
    clickedRows = new Set<any>();
    ngOnInit(): void {
      console.log(this.dataSource)
      this.labourDataService.getallLabours().subscribe(data => {

        console.log(data);
        this.dataSource=data.data;
      });
    }
    
    addLabourReports() {
      console.log(this.labourData)
      
    this.labourDataService.addLabourReports(this.labourData).subscribe(
    res => console.log(res),
    err => console.log(err)
    );
    this.labourData= {
      value: '',
      id: '',
      name: '',
      skilled: '',
      unskilled: '',
      workDone: ''
  };
    }
    delete(id:any){
      this.labourDataService.deletelabour(id)
      .subscribe(
        data => console.log(data),
        error => console.error(error)
      );
      console.log("DELETED SUCCESSFULLY ")
    }

}
