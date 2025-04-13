import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Appointment } from '../models/appointment';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
})
export class AppointmentListComponent {
  @Input() availableCount: number = 0;
  @Output() bookAppointment = new EventEmitter<Appointment>();

  appointments: Appointment[] = [
    { id: 1, date: '2023-12-01', time: '10:00', doctorId: 1, userId: 1, status: 'pending' },
    { id: 2, date: '2023-12-01', time: '11:00', doctorId: 1, userId: 2, status: 'pending' },
  ];

  onBook(appointment: Appointment) {
    this.bookAppointment.emit(appointment);
  }
}
