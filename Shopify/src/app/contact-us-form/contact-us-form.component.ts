import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-contact-us-form',
  templateUrl: './contact-us-form.component.html',
  styleUrls: ['./contact-us-form.component.css']
})
export class ContactUsFormComponent implements OnInit {
  contactusform = new FormGroup({
      username: new FormControl('kapil'),
      email: new FormControl(''),
      phone: new FormControl(''),
      usermessage: new FormControl('')
      })
      message:any;
  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.httpClient.post("http://localhost:3000/api/appointment/contact", this.contactusform.value).subscribe(sub => {
      this.message = (sub as any).message;
    }
    );
  }

}
