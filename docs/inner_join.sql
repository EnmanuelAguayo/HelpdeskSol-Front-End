SELECT dt_users.user_name, dt_profiles.profile_name FROM helpdesk_sol.dt_users INNER JOIN helpdesk_sol.dt_profiles ON dt_profiles.profile_id = dt_users.profile_id;
