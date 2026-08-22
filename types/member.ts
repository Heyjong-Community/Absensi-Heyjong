export interface MemberHeyjong {
  id: string;
  namaLengkap: string;
  panggilan: string;
  gender: 'LakiLaki' | 'Perempuan';
  status: 'Volunteer' | 'Member' | 'Staff' | 'Pengurus' | 'Manajemen';
}

export type StatusMemberHeyjong = 'Volunteer' | 'Member' | 'Staff' | 'Pengurus' | 'Manajemen';
