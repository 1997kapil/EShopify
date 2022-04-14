import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DisputeServiceService } from '../service/dispute-service.service';

@Component({
  selector: 'app-dispute-list',
  templateUrl: './dispute-list.component.html',
  styleUrls: ['./dispute-list.component.css']
})
export class DisputeListComponent implements OnInit {

  disputeList: any;

  constructor(private httpClient: HttpClient, private disputeServiceService: DisputeServiceService, private router: Router) { }

  ngOnInit(): void {
    this.httpClient.get("http://localhost:3000/api/appointment/all").subscribe(res => {
      this.disputeList = res;
    });
  }

  updateProblem(item: any) {
    this.disputeServiceService.setObject(item);
    this.router.navigate(["help-centre"]);
  }

  deleteProblem(id: any) {
    this.httpClient.delete("http://localhost:3000/api/appointment/help/" + id).subscribe(res =>{
     if (((res as any).message).includes("sucess")) {
       this.disputeList = this.disputeList.filter(item => item.id != id);
     }
    });
  }

}
