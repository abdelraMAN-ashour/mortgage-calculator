import { Component, signal } from '@angular/core';
import { MortFormService } from '../services/mort-form.service';
import { ResultComponent } from "../result/result.component";

@Component({
  selector: 'app-results',
  standalone: true,
  imports: [ResultComponent],
  templateUrl: './results.component.html',
  styleUrl: './results.component.css'
})
export class ResultsComponent {
  constructor(private mortFormService:MortFormService){}
  get showRes(){
    return this.mortFormService.getMort();
  }
  get selectType(){
    return this.mortFormService.selectAType;
  }
}
