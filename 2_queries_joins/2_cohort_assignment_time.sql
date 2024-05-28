SELECT SUM(duration) AS total_duration
FROM assignment_submissions
JOIN students ON  student_id = students.id -- switch sides across = operator
JOIN cohorts ON cohort_id = cohorts.id     -- switch sides across = operator
WHERE cohorts.name = 'FEB12';