export type StatusAttendee = 'Manajemen' | 'Pengurus' | 'Staff' | 'Member' | 'Volunteer';

export interface Absen {
  eventId: string;
  nama: string;
  status: StatusAttendee;
}

export interface AbsenTable {
  eventId: string;
  nama: string;
  status: StatusAttendee;
  event: {
    nama: string;
  };
}
