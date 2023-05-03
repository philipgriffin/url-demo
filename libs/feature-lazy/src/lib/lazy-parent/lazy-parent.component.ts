import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'playground-lazy-parent',
  templateUrl: './lazy-parent.component.html',
  styleUrls: ['./lazy-parent.component.scss'],
})
export class LazyParentComponent implements OnInit {
  ngOnInit(): void {
    alert('Lazy Load Compelte!');
  }
}
