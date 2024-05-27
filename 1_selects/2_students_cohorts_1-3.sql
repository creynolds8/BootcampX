SELECT COUNT(name)
FROM students
WHERE cohort_id <= 3;
-- also use WHERE cohort_id IN (1,2,3);