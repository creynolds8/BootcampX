const { Pool } = require("pg");

const pool = new Pool({
  user: "development",
  password: "development",
  host: "localhost",
  database: "bootcampx",
});

const cohortName = process.argv[2];
const limit = process.argv[3] || 5;

const values = [`%${cohortName}%`, limit]

const queryString = `
  SELECT cohorts.name AS cohort, students.name AS name, students.id AS student_id
  FROM cohorts
  JOIN students ON cohorts.id = cohort_id
  WHERE cohorts.name LIKE $1
  LIMIT $2;
  `
pool
  .query(queryString, values)
  .then((res) => {
    res.rows.forEach((user) => {
      console.log(
        `${user.name} has an id of ${user.student_id} and was in the ${user.cohort} cohort`
      );
    });
  })
  .catch((err) => console.error("query error", err.stack));
