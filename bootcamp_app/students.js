const { Pool } = require("pg");

const pool = new Pool({
  user: "development",
  password: "development",
  host: "localhost",
  database: "bootcampx",
});

pool
  .query(
    `
  SELECT cohorts.name AS cohort, students.name AS name, students.id AS student_id
  FROM cohorts
  JOIN students ON cohorts.id = cohort_id
  WHERE cohorts.name LIKE '${process.argv[2]}%'
  LIMIT ${process.argv[3] || 5};
  `
  )
  .then((res) => {
    res.rows.forEach((user) => {
      console.log(
        `${user.name} has an id of ${user.student_id} and was in the ${user.cohort} cohort`
      );
    });
  })
  .catch((err) => console.error("query error", err.stack));
