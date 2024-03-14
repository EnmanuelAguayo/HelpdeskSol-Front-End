SELECT dt_capture.capture_id, dt_capture.action, dt_profiles.profile_name, dt_sections.section_name 
FROM dt_capture 
INNER JOIN dt_profiles 
ON dt_profiles.profile_id = dt_capture.profile_id

INNER JOIN dt_sections
ON dt_sections.section_id = dt_capture.section_id;