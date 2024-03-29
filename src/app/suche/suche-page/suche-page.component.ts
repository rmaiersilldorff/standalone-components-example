import {Component, OnInit} from '@angular/core';
import {ReiseService} from '../../reise/reise.service';
import {Reise} from '../../reise/models/common';
import {Observable} from 'rxjs';
import {first, startWith, switchMap} from 'rxjs/operators';
import {FormsModule, ReactiveFormsModule, FormControl} from '@angular/forms';
import {BasketService} from '../../warenkorb/basket.service';
import {ReiseListItemComponent} from '../../reise/reise-card/reise-list-item/reise-list-item.component';
import {MaterialModule} from '../../material.module';
import {CommonModule} from '@angular/common';
import {PerfectScrollbarModule} from 'ngx-perfect-scrollbar';

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

  constructor(private reiseService: ReiseService,
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
