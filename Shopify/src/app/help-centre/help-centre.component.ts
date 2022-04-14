import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { DisputeServiceService } from '../service/dispute-service.service';

@Component({
  selector: 'app-help-centre',
  templateUrl: './help-centre.component.html',
  styleUrls: ['./help-centre.component.css']
})
export class HelpCentreComponent implements OnInit, OnDestroy {
    helpcentreform = new FormGroup({
    id: new FormControl(null),
    orderno: new FormControl(''),
    productdetails: new FormControl(''),
    problemtype: new FormControl(''),
    descriptions: new FormControl('')
    })
    message:any;
  constructor(private httpClient: HttpClient, private disputeServiceService: DisputeServiceService) { }

  ngOnInit(): void {
    if (this.disputeServiceService.problemObject) {
      this.helpcentreform.setValue(this.disputeServiceService.problemObject);
    }
  }

  onSubmit() {
    this.httpClient.post("http://localhost:3000/api/appointment/help", this.helpcentreform.value).subscribe(sub => {
      this.message = (sub as any).message;
    }
    );
  }

  resetForm() {
    this.helpcentreform.reset();
    this.disputeServiceService.resetObject();
  }

  ngOnDestroy(): void {
    this.disputeServiceService.resetObject();
  }

}
