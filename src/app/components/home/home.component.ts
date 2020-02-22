import { Component, OnInit } from '@angular/core';
import {HomeService } from '../../services/home.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';


import { Form } from '../../model/Form';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  form: Form = {
    firstName: '',
    lastName: '',
    email: '',
    nationalId: '',
    phone: '',
    kraPin: '',
    companyName: '',
    companyLocation: '',
    companyRevenue: 0
  };


  //isWorking: boolean = false;

  constructor(
    private homeService: HomeService,
    private flashMessage: FlashMessagesService,
    private router: Router
    ) { }

  ngOnInit() {
    this.homeService.getForms().subscribe(forms => console.log(forms));
  }

  onSubmit({ value, valid }: {value: Form, valid: boolean}) {
    if(!valid) {
      this.flashMessage.show('Please Fill out the form correctly', {
        cssClass: 'alert-danger', timeout: 4000
      });
    }
    else {
      //Add new client
      this.homeService.newClient(value);
      //Show message
      this.flashMessage.show('New Application Submitted', {
        cssClass: 'alert-success', timeout: 4000
      });
      //redirect to form again
      this.router.navigate(['/']);
    }
  }

}
