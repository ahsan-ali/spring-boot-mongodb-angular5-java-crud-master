import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { DatashareService} from '../contact-create/datashare.service';
@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {

  contact = {};

  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient, private dataService: DatashareService) { }

  ngOnInit() {
  this.contact = this.dataService.getContactData();
  if (this.contact == null){
  console.log(this.route.snapshot.params['id']);
    this.getContactDetail(this.route.snapshot.params['id']);
	}
  }

  getContactDetail(id) {
	console.log('hello world from contact-detail getContactDetail'+id);
    this.http.get('/contacts/'+id).subscribe(data => {
      this.contact = data;
    });
  }
  
  deleteContact(id) {
  this.http.delete('/contacts/'+id)
    .subscribe(res => {
        this.router.navigate(['/contact']);
      }, (err) => {
        console.log(err);
      }
    );
}

}