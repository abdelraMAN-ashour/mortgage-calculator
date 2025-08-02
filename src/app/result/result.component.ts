import { Component } from '@angular/core';
import { MortFormService } from '../services/mort-form.service';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-result',
  standalone: true,
  imports: [DecimalPipe],
  templateUrl: './result.component.html',
  styleUrl: './result.component.css'
})
export class ResultComponent {
  constructor(private mortFormService:MortFormService){}
  get mortType(){
    return this.mortFormService.gettype();
  }
  get res(){
    return this.mortFormService.getMort();
  }
}
