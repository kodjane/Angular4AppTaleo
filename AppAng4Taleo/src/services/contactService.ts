import {Injectable} from '@angular/core';

@Injectable()
export class ContactService{
  info= {
    name: "Kodjane",
    email: "kodjane09@hotmail.com",
    tel: '0032471352401',
    company: "Taleo Consulting"
  };

  getInfo(){
    return this.info;
  }
}
