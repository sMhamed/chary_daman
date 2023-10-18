import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-service-selection',
  templateUrl: './service-selection.component.html',
  styleUrls: ['./service-selection.component.scss']
})
export class ServiceSelectionComponent implements OnInit {

  @Input() startingForm: FormGroup;
  @Output() subformInitialized: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();
  @Output() changeStep: EventEmitter<'forward' | 'back'> = new EventEmitter<'forward' | 'back'>();
  public serviceSelectionForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    if (this.startingForm) {
      this.serviceSelectionForm = this.startingForm;
    } else {
      this.serviceSelectionForm = this.fb.group({
        firstName: '',
        lastName: '',
        // ... continue with the other fields
      })
    }
    this.subformInitialized.emit(this.serviceSelectionForm);
  }

  doChangeStep(direction: 'back' | 'forward') {
    this.changeStep.emit(direction);
  }
}
