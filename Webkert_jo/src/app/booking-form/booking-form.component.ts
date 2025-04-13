import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
})
export class BookingFormComponent {
  bookingForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.bookingForm = this.fb.group({
      name: ['', Validators.required],
      date: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.bookingForm.valid) {
      console.log('Foglalás:', this.bookingForm.value);
    }
  }
}
