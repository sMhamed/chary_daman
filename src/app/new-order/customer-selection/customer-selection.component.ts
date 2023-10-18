import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-customer-selection',
  templateUrl: './customer-selection.component.html',
  styleUrls: ['./customer-selection.component.scss']
})
export class CustomerSelectionComponent implements OnInit {
  @Input() startingForm: FormGroup;
  @Output() subformInitialized: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();
  @Output() changeStep: EventEmitter<'forward' | 'back'> = new EventEmitter<'forward' | 'back'>();
  public customerSelectionForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    if (this.startingForm) {
      this.customerSelectionForm = this.startingForm;
    } else {
      this.customerSelectionForm = this.fb.group({
        firstName: '',
        lastName: '',
        // ... continue with the other fields
      })
    }
    this.subformInitialized.emit(this.customerSelectionForm);
  }

  doChangeStep(direction: 'back' | 'forward') {
    this.changeStep.emit(direction);
  }
}
