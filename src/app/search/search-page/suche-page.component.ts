import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule, FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {first, startWith, switchMap} from 'rxjs/operators';
import {MaterialModule} from '../../material.module';
import {PerfectScrollbarModule} from 'ngx-perfect-scrollbar';
import {ReiseListItemComponent, Reise, JourneyService} from '@journey';
import {BasketService} from '@basket';

@Component({
  standalone: true,
  selector: 'app-suche-page',
  imports: [
    ReiseListItemComponent,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    PerfectScrollbarModule
  ],
  templateUrl: './suche-page.component.html',
  styleUrls: ['./suche-page.component.scss']
})
export class SuchePageComponent implements OnInit {

  reisen: Reise[];
  sucheControl = new FormControl<string>('');
  filteredReisen$: Observable<Reise[]>;

  constructor(private reiseService: JourneyService,
              private basketService: BasketService) {
    reiseService.getAll()
      .pipe(first())
      .subscribe((reisen) => {
        this.reisen = reisen;
      });
  }

  ngOnInit() {
    this.filteredReisen$ = this.sucheControl.valueChanges.pipe(
      switchMap(text => this.reiseService.search(text)),
      startWith(this.reisen)
    );
  }

  addToCart(item: Reise) {
    this.basketService.add(item);
  }
}
