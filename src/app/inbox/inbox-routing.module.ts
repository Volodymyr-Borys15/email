import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeInboxComponent } from './home-inbox/home-inbox.component';
import { EmailCreateComponent } from './email-create/email-create.component';
import { EmailReplyComponent } from './email-reply/email-reply.component';
import { EmailIndexComponent } from './email-index/email-index.component';
import { EmailShowComponent } from './email-show/email-show.component';
import { PlaceholderComponent } from './placeholder/placeholder.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { EmailResolverService } from './email-resolver.service';


const routes: Routes = [
  {path:'not-found',component:NotFoundComponent},
  {
    path:'',
    component:HomeInboxComponent,
    children:[
      {path:'',component:PlaceholderComponent},
      {
        path:':id',
        component:EmailShowComponent,
        resolve:{ email:EmailResolverService } 
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InboxRoutingModule { }
