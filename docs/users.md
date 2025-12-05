# `users` Entity

| Field | Display Name | Type | Length | Description | Deprecated | Salesforce | MS Dynamics | Power BI |
|-------|----------------|------|--------|----------------|-------------|-------------|-------------|-----------|
| `_sys_as_of`| As of Date| DATETIME| —| The date of the last data request from the platform| No| —| —| — |
| `_sys_co_id`| Company ID| STRING| 50| The Cien company ID| No| —| —| — |
| `_sys_doc_id`| Doc ID| STRING| 50| Unique record identifier, based on the ID of the document in the remote system (such as Salesforce ID)| No| Id| systemuserid| — |
| `_sys_filt_end_date`| Filter End Date| DATE| —| The end date of the record, stripped of time| No| —| —| — |
| `_sys_filt_start_date`| Filter Start Date| DATE| —| The start date of the record, stripped of time| No| —| —| — |
| `_sys_last_modified_on`| Last Modified On| DATETIME| —| The date of the last data modification in the platform| No| SystemModstamp| modifiedon| — |
| `crm_addr_city`| CRM Address City| STRING| 150| User's city in the CRM| No| City| address1_city| — |
| `crm_addr_country`| CRM Address Country| STRING| 150| User's country in the CRM| No| Country| address1_country| — |
| `crm_addr_postal_code`| CRM Address Postal Code| STRING| 150| User's postal code in the CRM| No| PostalCode| address1_postalcode| — |
| `crm_addr_state`| CRM Address State| STRING| 150| User's state in the CRM| No| State| address1_stateorprovince| — |
| `crm_addr_street`| CRM Address Street| STRING| 150| User's street in the CRM| No| Street| address1_line1| — |
| `crm_created_on`| CRM Created On| DATETIME| —| User creation date in the CRM| No| CreatedDate| createdon| — |
| `crm_creator_id`| CRM Creator ID| STRING| 50| User creator's id in the CRM| No| CreatedById| _createdby_value| — |
| `crm_deep_link`| CRM Deep Link| STRING| 500| Link to the user in the remote system (such as Salesforce)| No| —| —| — |
| `crm_dept`| CRM Department| STRING| 50| User's department in the CRM| No| Department| —| — |
| `crm_division`| CRM Division| STRING| 50| User's division in the CRM| No| Division| —| — |
| `crm_email`| CRM Email| STRING| 150| User's email| No| Email| internalemailaddress| — |
| `crm_first_name`| CRM First Name| STRING| 50| User's first name| No| FirstName| firstname| — |
| `crm_language_locale`| CRM Language Locale| STRING| 50| User's language locale| No| LanguageLocaleKey| —| — |
| `crm_last_login_time`| CRM Last Login Time| DATETIME| —| User's last login time in the CRM| No| LastLoginDate| —| — |
| `crm_last_name`| CRM Last Name| STRING| 50| User's last name| No| LastName| lastname| — |
| `crm_locale`| CRM Locale| STRING| 50| User's locale| No| LocaleSidKey| —| — |
| `crm_mgr_id`| CRM Manager ID| STRING| 50| User manager's id in the CRM| No| ManagerId| —| — |
| `crm_profile_url`| CRM Profile URL| STRING| 50| User's avatar URL| No| FullPhotoUrl| —| — |
| `crm_role`| CRM Role| STRING| 50| User's CRM role| No| UserRole.Name| jobtitle| — |
| `crm_time_zone`| CRM Time Zone| STRING| 50| User's time zone| No| TimeZoneSidKey| —| — |
| `crm_title`| CRM Title| STRING| 150| User's CRM title| No| Title| title| — |
| `crm_user_type`| CRM User Type| STRING| 50| User's CRM type| No| UserType| accessmode| — |
| `crm_username`| CRM Username| STRING| 150| User's username| No| UserName| internalemailaddress| — |
| `cust_bool1`| cust_bool1| BOOLEAN| —| cust_bool1| No| —| —| — |
| `cust_bool2`| cust_bool2| BOOLEAN| —| cust_bool2| No| —| —| — |
| `cust_num1`| cust_num1| FLOAT| —| cust_num1| No| —| —| — |
| `cust_num2`| cust_num2| FLOAT| —| cust_num2| No| —| —| — |
| `cust_num3`| cust_num3| FLOAT| —| cust_num3| No| —| —| — |
| `cust_num4`| cust_num4| FLOAT| —| cust_num4| No| —| —| — |
| `cust_num5`| cust_num5| FLOAT| —| cust_num5| No| —| —| — |
| `cust_num6`| cust_num6| FLOAT| —| cust_num6| No| —| —| — |
| `cust_num7`| cust_num7| FLOAT| —| cust_num7| No| —| —| — |
| `cust_text1`| cust_text1| STRING| 50| cust_text1| No| —| —| — |
| `cust_text2`| cust_text2| STRING| 50| cust_text2| No| —| —| — |
| `cust_text3`| cust_text3| STRING| 50| cust_text3| No| —| —| — |
| `cust_text4`| cust_text4| STRING| 50| cust_text4| No| —| —| — |
| `cust_text5`| cust_text5| STRING| 50| cust_text5| No| —| —| — |
| `trueai_addr_city`| Address City| STRING| 50| Lead's city| No| —| —| — |
| `trueai_addr_country`| Address Country| STRING| 50| Lead's country| No| —| —| — |
| `trueai_addr_lat`| Address Lat| FLOAT| —| Lead's latitude| No| —| —| — |
| `trueai_addr_long`| Address Long| FLOAT| —| Lead's longitude| No| —| —| — |
| `trueai_addr_postal_code`| Address Postal Code| STRING| 50| Lead's postal code| No| —| —| — |
| `trueai_addr_state`| Address State| STRING| 50| Lead's state| No| —| —| — |
| `trueai_addr_street`| Address Street| STRING| 50| Lead's street| No| —| —| — |
| `trueai_billable`| Billable| BOOLEAN| —| Boolean flag that indicates whether the user is billable| No| —| —| — |
| `trueai_direct_reports`| Direct Reports| INTEGER| —| User's number of direct reports| No| —| —| — |
| `trueai_ext_match_id`| Ext Match ID| STRING| 50| User ID in the externel HR file| No| —| —| — |
| `trueai_ext_match_rule`| Ext Match Rule| INTEGER| —| Rule used to determine user's match with an external HR file| No| —| —| — |
| `trueai_full_name`| Full Name| STRING| 150| User's full name| No| —| —| — |
| `trueai_group`| Group| STRING| 50| User's group| No| —| —| — |
| `trueai_group_conf`| Group Confidence| FLOAT| —| User's group prediction confidence| No| —| —| — |
| `trueai_group_rule`| Group Rule| INTEGER| —| Rule used to determine user's group| No| —| —| — |
| `trueai_hire_date`| Hire Date| DATETIME| —| User's hire date| No| —| —| — |
| `trueai_is_dummy`| Is Dummy| BOOLEAN| —| Boolean flag that indicates whether the user was added to account for all creation and ownership of entries| No| —| —| — |
| `trueai_is_mgr`| Is Manager| BOOLEAN| —| Boolean flag that indicates whether the user is a manager| No| —| —| — |
| `trueai_mgr_id`| Manager ID| STRING| 50| User manager's id| No| —| —| — |
| `trueai_mgr_id_conf`| Manager ID Confidence| FLOAT| —| User's manager's id prediction confidence| No| —| —| — |
| `trueai_mgr_id_rule`| Manager ID Rule| INTEGER| —| Rule used to determine user's manager's id| No| —| —| — |
| `trueai_mgr_ids`| Manager IDs as JSON array| STRING| 500| User managers' ids| No| —| —| — |
| `trueai_performance_lvl_reached_on`| Performance Level Reached on| DATETIME| —| First date when the user reached the performance tier of "Performer" or "Overperformer"| No| —| —| — |
| `trueai_ramping_status`| Ramping Status| STRING| 50| Ramping or Ramped depending on users tenure| No| —| —| — |
| `trueai_role`| Role| STRING| 50| User's standardized role| No| —| —| — |
| `trueai_role_conf`| Role Confidence| FLOAT| —| User's standardized role prediction confidence| No| —| —| — |
| `trueai_tenure`| Tenure| INTEGER| —| Number of months since the user's hire date| No| —| —| — |
| `trueai_termination_date`| Termination Date| DATETIME| —| User's termination date| No| —| —| — |
| `trueai_test`| Test| STRING| 100| Test model| No| —| —| — |
| `trueai_test_conf`| Test Confidence| FLOAT| —| Test model confidence| No| —| —| — |
| `trueai_test_debug`| Test Debug| STRING| 2000| Test model debug information| No| —| —| — |
| `trueai_test_rule`| Test Rule| STRING| 500| Test model rule| No| —| —| — |
| `trueai_title`| Title| STRING| 50| User's standardized title| No| —| —| — |
| `trueai_title_conf`| Title Confidence| FLOAT| —| User's standardized title prediction confidence| No| —| —| — |
| `trueai_tot_reports`| Total Reports| INTEGER| —| User's number of total reports| No| —| —| — |
| `trueai_user_behavior`| User Behavior| STRING| 50| User's standardized behavior| No| —| —| — |
| `trueai_user_behavior_conf`| User Behavior Confidence| FLOAT| —| User's standardized behavior prediction confidence| No| —| —| — |
| `trueai_user_role`| Standardized Role| STRING| 50| User's standardized and combined role| No| —| —| — |
| `trueai_user_role_alias`| Standardized Role Aliased| STRING| 50| User's standardized and combined role aliased| No| —| —| — |
| `trueai_user_role_dept`| Standardized Role Department| STRING| 50| User's department derived from the standardized and combined role| No| —| —| — |
| `trueai_user_role_function`| Standardized Role Function| STRING| 50| User's function derived from the standardized and combined role| No| —| —| — |
