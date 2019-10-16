import { Component, OnInit } from '@angular/core';
import { 
  MatToolbar,
  MatButton,
  MatSidenav,
  MatGridList,
  MatList} 
  from '@angular/material';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-singularity',
  templateUrl: './singularity.component.html',
  styleUrls: ['./singularity.component.css']
})
export class SingularityComponent implements OnInit {

  constructor(private auth : AuthService) { }

  ngOnInit() {
  }

}
