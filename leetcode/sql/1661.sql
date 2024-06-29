-- https://leetcode.com/problems/average-time-of-process-per-machine
SELECT a.machine_id, ROUND(AVG(b.timestamp - a.timestamp), 3) processing_time
FROM Activity a
JOIN Activity b
ON a.machine_id = b.machine_id AND a.activity_type = 'start' AND b.activity_type = 'end' AND a.process_id = b.process_id
GROUP BY a.machine_id;
