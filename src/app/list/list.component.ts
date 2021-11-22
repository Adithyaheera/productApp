import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

uname:any
ph:any
productName:any




  constructor(private router: Router,private fb: FormBuilder, private ds:DataService) {
    this.uname = this.ds.user[this.uname]
   }

  ngOnInit(): void {
  }



}
