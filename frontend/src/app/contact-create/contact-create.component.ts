import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DatashareService} from './datashare.service';
@Component({
  selector: 'app-contact-create',
  templateUrl: './contact-create.component.html',
  styleUrls: ['./contact-create.component.css']
})
export class ContactCreateComponent implements OnInit {

  contact = {};
  constructor(private http: HttpClient, private router: Router, private dataService: DatashareService) { }

  ngOnInit() {
  }

  saveContact() {
    this.http.post('/contacts', this.contact).subscribe((res) => {
	this.dataService.setContactData(res);
	this.router.navigate(['/contact-detail',1]);},
	(err) => {console.log(err)});
  }

}