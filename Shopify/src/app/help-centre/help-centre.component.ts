import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DisputeServiceService } from '../service/dispute-service.service';

@Component({
  selector: 'app-help-centre',
  templateUrl: './help-centre.component.html',
  styleUrls: ['./help-centre.component.css']
})
export class HelpCentreComponent implements OnInit, OnDestroy {
    helpcentreform = new FormGroup({
    id: new FormControl(0),
    orderno: new FormControl('',[Validators.required]),
    productdetails: new FormControl('',[Validators.required]),
    problemtype: new FormControl('',[Validators.required]),
    descriptions: new FormControl('',[Validators.required, Validators.nullValidator, Validators.minLength(10)])
    })
    message:any;
  constructor(private httpClient: HttpClient, private disputeServiceService: DisputeServiceService) { }

  get orderno() {
    return this.helpcentreform.get("orderno");
  }

  get productdetails() {
    return this.helpcentreform.get("productdetails");
  }

   get descriptions() {
    return this.helpcentreform.get("descriptions");
  }




  ngOnInit(): void {
    if (this.disputeServiceService.problemObject) {
      this.helpcentreform.setValue(this.disputeServiceService.problemObject);
    }
  }

  onSubmit() {
    this.httpClient.post("http://localhost:5000/api/HelpCenter/add-problem-details", this.helpcentreform.value).subscribe(sub => {
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
