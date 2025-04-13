
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Appointment } from './models/appointment';

@Injectable({
  providedIn: 'root',
})
export class AppointmentService {
  constructor(private http: HttpClient) {}

  getAppointments(): Observable<Appointment[]> {
    // Mock API hívás
    return of([
      { id: 1, date: '2023-12-01', time: '10:00', doctorId: 1, userId: 1, status: 'pending' },
    ]);
  }
}

