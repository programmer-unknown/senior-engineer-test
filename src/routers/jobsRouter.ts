import express, { Request, Response } from "express";
import { Jobs, idJobs } from "../types/jobs";
import {
  jobValidation,
  assignValidation,
  unassignValidation,
  commonValidation,
} from "../validations/inputValidation";
import validationHandler from "../validations/validationResult";
import { db } from "../config/db";
const jobsRouter = express.Router();
jobsRouter.post(
  "/",
  jobValidation,
  validationHandler,
  (req: Request, res: Response): void => {
    const newJobs: Jobs = req.body;
    const query =
      "INSERT INTO jobs ( title, remarks, job_date, start_time, end_time) VALUES ( ?, ?, ?, ?, ?)";
    db.query(
      query,
      [
        newJobs.title,
        newJobs.remarks,
        newJobs.jobDate,
        newJobs.startTime,
        newJobs.endTime,
      ],
      (err, result) => {
        if (err) {
          return res.status(500).json({ message: err });
        }
        res.status(204).send();
      }
    );
  }
);

jobsRouter.post(
  "/assign",
  assignValidation,
  validationHandler,
  (req: Request, res: Response): void => {
    const job: Jobs = req.body;
    const query =
      "UPDATE jobs SET user_id = ?, job_status= 'assign' WHERE jobs.id = ?";
    db.query(query, [job.idUser, job.id], (err, result) => {
      if (err) {
        return res.status(500).json({ message: err });
      }
      res.status(204).send();
    });
  }
);

jobsRouter.post(
  "/unassign",
  unassignValidation,
  validationHandler,
  (req: Request, res: Response): void => {
    const job: idJobs = req.body;
    const query = "UPDATE jobs SET job_status= 'unassign' WHERE jobs.id = ?";
    db.query(query, [job.id], (err, result) => {
      if (err) {
        return res.status(500).json({ message: err });
      }
      res.status(204).send();
    });
  }
);

jobsRouter.get(
  "/common",
  commonValidation,
  validationHandler,
  (req: Request, res: Response): void => {
    const jobDate: Date = req.body.jobDate;
    const query =
      "SELECT jobs.*, users.fullname, users.email FROM jobs, users WHERE jobs.user_id = users.id AND jobs.job_status = 'assign' AND jobs.job_date = ?";
    db.query(query, [jobDate], (err, result) => {
      if (err) {
        return res.status(500).json({ message: err });
      }
      res.status(200).json(result);
    });
  }
);

export { jobsRouter };
