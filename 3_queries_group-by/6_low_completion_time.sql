SELECT students.name AS student, AVG(assignment_submissions.duration) AS average_completion_time, AVG(assignments.duration) AS average_estimated_time
FROM assignment_submissions
JOIN students ON students.id = assignment_submissions.student_id
JOIN assignments ON assignments.id = assignment_submissions.assignment_id
WHERE students.end_date IS NULL
GROUP BY students.id
HAVING AVG(assignments.duration) > AVG(assignment_submissions.duration)
ORDER BY average_completion_time;