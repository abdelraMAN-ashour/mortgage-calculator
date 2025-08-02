import { Injectable } from '@angular/core';
import { MortInfo } from '../mort-form/mort.interface';

@Injectable({
  providedIn: 'root'
})
export class MortFormService {
  // private mortInfo?:MortInfo;
  private data?:{
    monthly:number,
    total:number,
    interest:number,
  }
  selectAType=false;
  private dataType?:{
    repay:boolean,
    interest:boolean,
  }
  gettype(){
    return this.dataType;
  }
  getMort(){
    return this.data;
  }
  setMort(date:MortInfo,type:{
    repay:boolean,interest:boolean
  }){
    const p=date!.amount;
    const r=(date!.rate/100)/12
    const n=date!.term*12
    const m=p*((r*Math.pow(1+r,n))/(Math.pow(1+r,n)-1))
    const t=m*n;
    const i=t-p;
    // console.log(m,t,i);
    
    if(!(Number.isNaN(m)||Number.isNaN(t)||Number.isNaN(i))){
      this.data={
        monthly:m,
        interest:i,
        total:t,
      }
    }
    else{
      this.data=undefined;
    }
    this.selectAType=(type.interest||type.repay)
    this.dataType=type;
  }
  constructor() { }
}
