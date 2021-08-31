import { body, ValidationChain } from "express-validator";
export const jobValidation: ValidationChain[] = [
  body("title", "title is required").not().isEmpty(),
  body("remarks", "title is required").not().isEmpty(),
  body("jobDate", "title is required").not().isEmpty(),
  body("startTime", "title is required").not().isEmpty(),
  body("endTime", "title is required").not().isEmpty(),
];

export const assignValidation: ValidationChain[] = [
  body("idUser", "id user is required").not().isEmpty(),
  body("id", "id job is required").not().isEmpty(),
];

export const unassignValidation: ValidationChain[] = [
  body("id", "id job is required").not().isEmpty(),
];

export const commonValidation: ValidationChain[] = [
  body("jobDate", "job Date is required").not().isEmpty(),
];
