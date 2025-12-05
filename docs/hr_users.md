# `hr_users` Entity

| Field | Display Name | Type | Length | Description | Deprecated | Salesforce | MS Dynamics | Power BI |
|-------|----------------|------|--------|----------------|-------------|-------------|-------------|-----------|
| `crm_user_id`| CRM User ID| STRING| 50| If matched with CRM data, the user id of that record| No| —| —| — |
| `hr_addr_city`| Hr Address City| STRING| 50| The employee's work address| No| —| —| — |
| `hr_addr_country`| Hr Address Country| STRING| 50| The employee's work address| No| —| —| — |
| `hr_addr_postal_code`| Hr Address Postal Code| STRING| 50| The employee's work address| No| —| —| — |
| `hr_addr_state`| Hr Address State| STRING| 50| The employee's work address| No| —| —| — |
| `hr_addr_street`| Hr Address Street| STRING| 50| The employee's work address| No| —| —| — |
| `hr_classification`| Hr Classification| STRING| 50| The employee classification (e.g. full-time, part-time)| No| —| —| — |
| `hr_dept`| Hr Department| STRING| 50| The dept of the employee - will be used to match group| No| —| —| — |
| `hr_direct_reports`| Hr Direct Reports| INTEGER| —| How many direct reports?| No| —| —| — |
| `hr_division`| Hr Division| STRING| 50| The division of the employee - will be used to match group| No| —| —| — |
| `hr_email`| Hr Email| STRING| 50| The employee's work email| No| —| —| — |
| `hr_employee_type`| Hr Employee Type| STRING| 50| The type of employee| No| —| —| — |
| `hr_first_name`| Hr First Name| STRING| 50| The employee's first name| No| —| —| — |
| `hr_hire_date`| Hr Hire Date| DATETIME| —| The employee's hire date| No| —| —| — |
| `hr_id`| Hr ID| STRING| 50| The HRIS unique ID| No| —| —| — |
| `hr_is_mgr`| Hr Is Manager| BOOLEAN| —| Is the employee a manager?| No| —| —| — |
| `hr_is_remote`| Hr Is Remote| BOOLEAN| —| Is the employee a remote worker| No| —| —| — |
| `hr_last_name`| Hr Last Name| STRING| 50| The employee's last name| No| —| —| — |
| `hr_mgr_id`| Hr Manager ID| STRING| 50| The ID of the manager (can leave blank if Manager name is supplied instead)| No| —| —| — |
| `hr_mgr_name`| Hr Manager Name| STRING| 50| The NAME of the manager (can leave blank if Manager name is supplied instead)| No| —| —| — |
| `hr_profile_url`| Hr Profile URL| STRING| 50| The url to a photo of the employee| No| —| —| — |
| `hr_role`| Hr Role| STRING| 50| The employee's work role| No| —| —| — |
| `hr_status`| Hr Status| STRING| 50| The curent status of the employee (e.g. active, terminated etc.)| No| —| —| — |
| `hr_termination_date`| Hr Termination Date| DATETIME| —| The employee's termination date. Blank if currently active| No| —| —| — |
| `hr_time_zone`| Hr Time Zone| STRING| 50| The employee's time zone| No| —| —| — |
| `hr_title`| Hr Title| STRING| 50| The employee's title| No| —| —| — |
| `hr_username`| Hr Username| STRING| 50| The user name of the employee| No| —| —| — |
| `trueai_group`| Group| STRING| 50| Specific override field that bypasses the TrueAI engine, to set a specific group. Must match existing defined groups in system| No| —| —| — |
| `trueai_user_role`| Standardized Role| STRING| 50| Specific override field that bypasses the TrueAI engine, to set a specific user role. Must match existing defined roles in classes| No| —| —| — |
