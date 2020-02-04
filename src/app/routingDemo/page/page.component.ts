import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {
  routeParam = null;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.routeParam = this.route.snapshot.paramMap.get('id');
  }

}
