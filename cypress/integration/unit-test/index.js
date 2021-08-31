/// <reference types="cypress" />

describe("Orenda test rest api", () => {
  it("Create Jobs", () => {
    cy.request("POST", "http://localhost:3001/api/jobs", {
      title: "Project React JS",
      remarks: "1. Server 2. Client",
      jobDate: "2021-09-08",
      startTime: "11:09:35",
      endTime: "11:09:35",
    }).then((response) => {
      expect(response.status).to.eq(204);
    });
  });

  it("Assign schedule", () => {
    cy.request("POST", "http://localhost:3001/api/jobs/assign", {
      idUser: 2,
      id: 1,
    }).then((response) => {
      expect(response.status).to.eq(204);
    });
  });

  it("Unassign schedule", () => {
    cy.request("POST", "http://localhost:3001/api/jobs/unassign", {
      id: 1,
    }).then((response) => {
      expect(response.status).to.eq(204);
    });
  });

  it("List common by date", () => {
    cy.request("GET", "http://localhost:3001/api/jobs/common", {
      jobDate: "2021-09-09",
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });
});
