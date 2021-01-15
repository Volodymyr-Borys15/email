import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { EmailService } from '../email.service';
import { Email } from '../email';

@Component({
  selector: 'app-email-show',
  templateUrl: './email-show.component.html',
  styleUrls: ['./email-show.component.css']
})
export class EmailShowComponent implements OnInit {

  email:Email

  constructor(
            private route:ActivatedRoute,
            private emailService:EmailService) { 
              this.email = this.route.snapshot.data.email;
             
              this.route.data.subscribe(({email})=>{
                this.email = email;
                 console.log(this.email)
              });
            }

  ngOnInit(): void {

    //better way
      /* this.route.params.subscribe((snapshot)=>{
        console.log(snapshot)
      }); */
    //have issue 
      //console.log(this.route.snapshot.params.id);


      //staff without resolver
     /*  this.route.params.pipe(
        switchMap(({id})=>{
          return this.emailService.getEmail(id);
        })
      ).subscribe(data=>{
        this.email = data;
      }) */

  }

}
