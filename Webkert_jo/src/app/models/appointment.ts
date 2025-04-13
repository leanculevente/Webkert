
export interface Appointment {
    id: number;
    date: string;
    time: string;
    doctorId: number;
    userId: number;
    status: 'pending' | 'confirmed' | 'cancelled';
  }