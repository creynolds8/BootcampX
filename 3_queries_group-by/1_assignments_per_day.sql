SELECT day, COUNT(id) AS tota_assignments
FROM assignments
GROUP BY day
ORDER BY day;