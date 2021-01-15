/* import {Injectable} from '@angular/core';
import {
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest,
    HttpEventType
} from '@angular/common/http';
import { Observable} from 'rxjs';
import { tap, filter } from 'rxjs/operators';


@Injectable()
export class AuthHttpInterceptor implements HttpInterceptor {
    intercept(req:HttpRequest<any>,next:HttpHandler):Observable<HttpEvent<any>>{
        let modifiedReq = req.clone({
            withCredentials: true
        });
        //return next.handle(req)
        return next.handle(modifiedReq)
              .pipe(
                    filter(data=>data.type === HttpEventType.Sent),
                    tap(data=>{
                        console.log('Send the request',data)
                    })
                )
    }
} */
import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpEventType,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, filter } from 'rxjs/operators';

@Injectable()
export class AuthHttpInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
   
    const modifiedReq = req.clone({
      withCredentials: true
    });

    return next.handle(modifiedReq);
  }
}