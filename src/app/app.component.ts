import { Component } from '@angular/core';
import { MortFormComponent } from "./mort-form/mort-form.component";
import { ResultsComponent } from "./results/results.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MortFormComponent, ResultsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mortgage-calc';
}
