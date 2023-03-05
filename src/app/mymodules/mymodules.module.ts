import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

const MaterialComponent = [

  CommonModule,
  ReactiveFormsModule,
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  NgbProgressbarModule,
  NgbNavModule

]

@NgModule({
imports: [MaterialComponent],
exports: [MaterialComponent],
})
export class MymodulesModule{}