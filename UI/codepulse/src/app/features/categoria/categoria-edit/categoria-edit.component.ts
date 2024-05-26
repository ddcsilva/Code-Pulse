import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-categoria-edit',
  templateUrl: './categoria-edit.component.html',
  styleUrls: ['./categoria-edit.component.css']
})
export class CategoriaEditComponent implements OnInit, OnDestroy {

  id: string | null = null;
  paramsSubscription?: Subscription;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.paramsSubscription = this.route.paramMap.subscribe({
      next: (params) => {
        this.id = params.get('id');
      }
    });
  }

  ngOnDestroy(): void {
    this.paramsSubscription?.unsubscribe();
  }
}
