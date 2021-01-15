import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';

interface UserAvailableResponse{
  available:boolean
}

interface SignUpInfo{
  username:string;
  password:string;
  passwordConfirmation:string;
}

interface SignUpResponse{
  username:string
}

interface SignedInResponse{
  authenticated:boolean;
  username:string;
}

interface SigninInfo{
  username:string;
  password:string;
}

interface SinginResponse{
  username:string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private mainUrl = 'https://api.angular-email.com';
  signedin$ = new BehaviorSubject(null);
  username:string = '';

  constructor(private http:HttpClient) {

  }

   usernameAvaiable(username:string){
    return this.http.post<UserAvailableResponse>(`${this.mainUrl}/auth/username`,{username});
   }


   signup(values:SignUpInfo){
    return this.http
          .post<SignUpResponse>(`${this.mainUrl}/auth/signup`, values)
          .pipe(
            tap((response)=>{
                this.signedin$.next(true);
                this.username = response.username;
        })
      );
    }

    checkAuth(){
      return this.http
          .get<SignedInResponse>(`${this.mainUrl}/auth/signedin`)
          .pipe(
            tap(({ authenticated, username })=>{
            this.signedin$.next(authenticated);
            this.username = username;
        })
      );
    }

    signout(){
      return this.http.post(`${this.mainUrl}/auth/signout`,{}).pipe(
        tap(()=>{
          this.signedin$.next(false);
        })
      )
    }

    signin(info:SigninInfo){
      return this.http.post<SinginResponse>(`${this.mainUrl}/auth/signin`,info)
            .pipe(
              tap(({ username })=>{
                this.signedin$.next(true);
                this.username = username;
          })
        )
    }

}


