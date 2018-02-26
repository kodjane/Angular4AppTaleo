import { Component, OnInit } from '@angular/core';
import {ContactService} from '../../services/contactService';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  info: any;
  constructor(private contactService: ContactService) {
    this.info = contactService.getInfo();
  }

  ngOnInit() {
  }

}
