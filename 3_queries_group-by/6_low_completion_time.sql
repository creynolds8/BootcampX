SELECT students.name, AVG(assignment_submissions.duration) AS average_completion_time
FROM assignment_submissions
JOIN students ON students.id = assignment_submissions.student_id


WHERE students.end_date IS NULL
GROUP BY students.id
ORDER BY average_completion_time;