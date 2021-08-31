export interface idJobs {
  id: number;
}
export interface Jobs extends idJobs {
  title: string;
  remarks: string;
  jobDate: Date;
  startTime: string;
  endTime: string;
  idUser?: number;
}
