import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  candidates = [
    { name: 'Candidate 1', votes: 0 },
    { name: 'Candidate 2', votes: 0 },
    { name: 'Candidate 3', votes: 0 }
  ];

  vote(candidate: any) {
    candidate.votes++;
  }

}
