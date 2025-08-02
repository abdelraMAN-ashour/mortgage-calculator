import { compileNgModule } from '@angular/compiler';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MortFormService } from '../services/mort-form.service';

type InputKey = 'year' | 'amount' | 'rate';
type InputRadio ="interest"| "repay";

@Component({
  selector: 'app-mort-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './mort-form.component.html',
  styleUrl: './mort-form.component.css'
})


export class MortFormComponent {
  
  constructor(private mortFormService:MortFormService){}
  
  amount?:string;
  year?:string;
  rate?:string;
  active={
    year:false,
    amount:false,
    rate:false,
  };
  found={
    year:true,
    amount:true,
    rate:true,
    radio:true,
  }
  activeRadio={
    repay:false,
    interest:false,
  }
  onClick(e:MouseEvent){
    const inputElement=e.target as HTMLInputElement
    let id=inputElement.id as InputRadio
    this.activeRadio={
      interest:false,
      repay:false,
    }
    this.activeRadio[id]=true;
  }
  onFocus(e:FocusEvent){
    const inputElement = e.target as HTMLInputElement;
    let id=inputElement.id as InputKey;
    this.active[id]=true;
  }
  onBlur(){
    this.active={
      year:false,
      rate:false,
      amount:false,
    };
  }
  calcTotal(){
    if(this.amount==null)this.found.amount=false;else this.found.amount=true;
    if(this.rate==null)this.found.rate=false;else this.found.rate=true;
    if(this.year==null)this.found.year=false;else this.found.year=true;
    if(!(this.activeRadio.interest||this.activeRadio.repay))this.found.radio=false;else this.found.radio=true;

    if(!Object.values(this.found).some((e)=>e===false)){
      this.mortFormService.setMort({
        amount:+this.amount!,
        rate:+this.rate!,
        term:+this.year!
      },this.activeRadio);
    }else{

    }
  }
  clear(){
    this.year=undefined;
    this.amount=undefined;
    this.rate=undefined;
    this.activeRadio={
      interest:false,
      repay:false
    }
    this.mortFormService.selectAType=false
  }
}
