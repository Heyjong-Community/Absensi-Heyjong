export interface Event {
  id: string;
  nama: string;
  slug: string;
  tanggalPelaksanaan: Date;
  isActive: boolean;
  lokasi?: string | null;
  deskripsi?: string | null;
}
