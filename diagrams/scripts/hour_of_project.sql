SELECT created_by_name AS name, sum(float_field_1) AS hours
FROM `acx_project_objects`
WHERE `type` = 'TimeRecord' AND `project_id` = '26'
GROUP BY `created_by_id`;