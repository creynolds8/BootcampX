SELECT cohorts.name AS cohort_name, COUNT(assignment_submissions.id) AS total_submissions
FROM cohorts
JOIN students ON students.cohort_id = cohorts.id
JOIN assignment_submissions ON assignment_submissions.student_id = students.id
GROUP BY cohort_name
ORDER BY total_submissions DESC;