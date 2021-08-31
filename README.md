#Rest API nodejs express typescript
Description:
This program built for orenda employer test.
How running this program:

1.  clone from github by following this syntax
    git clone https://github.com/programmer-unknown/senior-engineer-test.git or download ZIP
2.  import database "src/db/orenda.sql" into your mysql DBMS
3.  install the package: yarn install
4.  running program: yarn dev
    Endpoints:

- Description API:

* create jobs
  endpoint: POST url
  payload:
  title: string;
  remarks: string;
  jobDate: Date;
  startTime: string;
  endTime: string;

* assign schedule
  endpoint: POST http://localhost:3001/api/jobs/assign
  payload:
  idUser: number;
  id: number;

* unassign schedule
  endpoint: POST http://localhost:3001/api/jobs/unassign
  payload:
  id: number;

* list common by date
  endpoint: GET http://localhost:3001/api/jobs/common
  payload:
  jobDate: Date;

---

Test tool API: Cypress
How running this test tool:

1. Run Cypress: npx cypress open
2. Integrations test: unit-test > index.js

---

Thank you!
Irin Saputra
