<h1 >Rest API nodejs express typescript</h1>
<br /> Description project:
This program built for orenda employer test.<br />
How running this program:<br />

1.  clone from github by following this syntax
    git clone https://github.com/programmer-unknown/senior-engineer-test.git or download ZIP
2.  import database "src/db/orenda.sql" into your mysql DBMS
3.  install the package: yarn install
4.  running program: yarn dev
    

Endpoints:
- Description API:
* create jobs
  <br />endpoint: POST http://localhost:3001/api/jobs
  <br />payload:<br />
  title: string;<br />
  remarks: string;<br />
  jobDate: Date;<br />
  startTime: string;<br />
  endTime: string;

* assign schedule
  <br />endpoint: POST http://localhost:3001/api/jobs/assign
  <br />payload:<br />
  idUser: number;<br />
  id: number;

* unassign schedule
  <br />endpoint: POST http://localhost:3001/api/jobs/unassign
  <br />payload:<br />
  id: number;

* list common by date
  <br />endpoint: GET http://localhost:3001/api/jobs/common
  <br />payload:<br />
  jobDate: Date;

---

Test tool API: Cypress
How running this test tool:

1. Run Cypress: npx cypress open
2. Integrations test: unit-test > index.js

---

Thank you!<br />
<h1>Irin Saputra</h1>
