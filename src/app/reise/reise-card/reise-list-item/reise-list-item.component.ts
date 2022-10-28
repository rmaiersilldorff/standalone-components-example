import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {Reise} from '../../models/common';
import {MaterialModule} from '../../../material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-reise-list-item',
  imports: [
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './reise-list-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReiseListItemComponent {

  @Input() reise: Reise;
  @Output() addAction = new EventEmitter<void>();

}
