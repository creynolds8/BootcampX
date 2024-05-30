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
  SELECT DISTINCT teachers.name AS teacher, cohorts.name AS cohort
  FROM teachers
  JOIN assistance_requests ON teachers.id = assistance_requests.teacher_id
  JOIN students ON students.id = assistance_requests.student_id
  JOIN cohorts ON cohorts.id = students.cohort_id
  WHERE cohorts.name = '${process.argv[2]}'
  ORDER BY teachers.name;
  `
)
.then((res) => {
  console.log('connected');
  res.rows.forEach((row) => {
    console.log(
      `${row.cohort}: ${row.teacher}`
    );
  })
})
.catch((err) => console.error("query error", err.stack));