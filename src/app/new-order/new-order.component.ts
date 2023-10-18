import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

type Step = 'serviceSelection' | 'customerSelection';

@Component({
  selector: 'app-new-order',
  templateUrl: './new-order.component.html',
  styleUrls: ['./new-order.component.scss']
})
export class NewOrderComponent implements OnInit{

  private currentStepBs: BehaviorSubject<Step> = new BehaviorSubject<Step>('serviceSelection');
  
  public currentStep$: Observable<Step> = this.currentStepBs.asObservable();

  public newOrderForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.newOrderForm = this.fb.group({
      serviceSelection: null,
      customerInfo: null
    });
  }

  subformInitialized(name: string, group: FormGroup) {
    this.newOrderForm.setControl(name, group);
  }

  changeStep(currentStep: string, direction: 'forward' | 'back') {
    switch(currentStep) {
      case 'serviceSelectionStep':
        if (direction === 'forward') {
          this.currentStepBs.next('customerSelection');
        }
        break;
      case 'customerSelectionStep':
        if (direction === 'back') {
          this.currentStepBs.next('serviceSelection');
        }
        break;
    }
  }

  submitForm() {
    const formValues = this.newOrderForm.value;
    // submit the form with a service
}
}
