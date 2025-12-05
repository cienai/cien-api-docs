# `ssr` Entity

| Field | Display Name | Type | Length | Description | Deprecated | Salesforce | MS Dynamics | Power BI |
|-------|----------------|------|--------|----------------|-------------|-------------|-------------|-----------|
| `_sys_as_of`| As of Date| DATETIME| —| The date of the last data request from the platform| No| —| —| — |
| `_sys_doc_id`| Doc ID| STRING| 50| Unique record identifier, based on the ID of the document in the remote system (such as Salesforce ID)| No| —| —| — |
| `_sys_filt_end_date`| Filter End Date| DATE| —| The end date of the record, stripped of time| No| —| —| — |
| `_sys_filt_start_date`| Filter Start Date| DATE| —| The start date of the record, stripped of time| No| —| —| — |
| `crm_account_count`| CRM Total Accounts| INTEGER| —| Number of accounts related to the sales process| No| —| —| — |
| `crm_account_custom_value_1`| CRM Account Custom Value 1| STRING| 150| Custom categorical variable on the account| No| —| —| — |
| `crm_account_custom_value_2`| CRM Account Custom Value 2| STRING| 150| Custom categorical variable on the account| No| —| —| — |
| `crm_account_custom_value_3`| CRM Account Custom Value 3| STRING| 150| Custom categorical variable on the account| No| —| —| — |
| `crm_act_count`| CRM Total Activities| INTEGER| —| Number of activities related to the sales process| No| —| —| — |
| `crm_contact_count`| CRM Total Contacts| INTEGER| —| Number of contacts related to the sales process| No| —| —| — |
| `crm_custom_value_1`| CRM Lead or Account Custom Value 1| STRING| 150| Custom categorical variable| No| —| —| — |
| `crm_custom_value_2`| CRM Lead or Account Custom Value 2| STRING| 150| Custom categorical variable| No| —| —| — |
| `crm_custom_value_3`| CRM Lead or Account Custom Value 3| STRING| 150| Custom categorical variable| No| —| —| — |
| `crm_industry`| CRM Industry| STRING| 500| Account's industry| No| —| —| — |
| `crm_lead_count`| CRM Total Leads| INTEGER| —| Number of leads related to the sales process| No| —| —| — |
| `crm_leadsource`| CRM Leadsource| STRING| 150| Account's leadsource| No| —| —| — |
| `crm_name`| CRM Name| STRING| 500| Account's name| No| —| —| — |
| `crm_num_employees`| CRM Num Employees| INTEGER| —| Account's number of employees| No| —| —| — |
| `crm_opp_count`| CRM Total Opps| INTEGER| —| Number of opportunities related to the sales process| No| —| —| — |
| `crm_owner_id`| CRM Owner ID| STRING| 50| Account owner's id in the CRM| No| —| —| — |
| `crm_parent_id`| CRM Parent ID| STRING| 50| Account's parent id in the CRM| No| —| —| — |
| `crm_type`| CRM Type| STRING| 150| Account's type in the CRM| No| —| —| — |
| `crm_web_url`| CRM Weburl| STRING| 150| Account's URL in the CRM| No| —| —| — |
| `sales_proc_account_prospecting`| Deprecated field| BOOLEAN| —| Deprecated field| ⚠️ Yes| —| —| — |
| `sales_proc_ae_did_new_logo`| Deprecated field| BOOLEAN| —| Deprecated field| ⚠️ Yes| —| —| — |
| `sales_proc_am_did_post_sales`| Deprecated field| BOOLEAN| —| Deprecated field| ⚠️ Yes| —| —| — |
| `sales_proc_determinable`| Deprecated field| BOOLEAN| —| Deprecated field| ⚠️ Yes| —| —| — |
| `sales_proc_handoffs`| Deprecated field| STRING| 50| Deprecated field| ⚠️ Yes| —| —| — |
| `sales_proc_mgr_involved`| Deprecated field| BOOLEAN| —| Deprecated field| ⚠️ Yes| —| —| — |
| `sales_proc_mkt_did_lead_gen`| Deprecated field| BOOLEAN| —| Deprecated field| ⚠️ Yes| —| —| — |
| `sales_proc_multiple_reps_per_stage`| Deprecated field| BOOLEAN| —| Deprecated field| ⚠️ Yes| —| —| — |
| `sales_proc_new_logo_more_than_one_rep`| Deprecated field| BOOLEAN| —| Deprecated field| ⚠️ Yes| —| —| — |
| `sales_proc_post_sales_more_than_one_rep`| Deprecated field| BOOLEAN| —| Deprecated field| ⚠️ Yes| —| —| — |
| `sales_proc_prospecting_end_rule`| Deprecated field| INTEGER| —| Deprecated field| ⚠️ Yes| —| —| — |
| `sales_proc_prospecting_more_than_one_rep`| Deprecated field| BOOLEAN| —| Deprecated field| ⚠️ Yes| —| —| — |
| `sales_proc_sdr_did_prospecting`| Deprecated field| BOOLEAN| —| Deprecated field| ⚠️ Yes| —| —| — |
| `trueai_account_dupe_conf`| Account Duplicate Confidence| STRING| 50| Account's duplication confidence| No| —| —| — |
| `trueai_account_dupe_id`| Account Duplicate ID| STRING| 50| Account's duplication id| No| —| —| — |
| `trueai_account_is_master`| Account Is Master| BOOLEAN| —| Boolean flag that indicates whether the account is the master account in its group of duplicates| No| —| —| — |
| `trueai_added_on`| Added On| DATETIME| —| Start date of the first step in the sales process| No| —| —| — |
| `trueai_addr_city`| Address City| STRING| 50| Record's city| No| —| —| — |
| `trueai_addr_country`| Address Country| STRING| 50| Record's country| No| —| —| — |
| `trueai_addr_lat`| Address Lat| FLOAT| —| Record's latitude| No| —| —| — |
| `trueai_addr_long`| Address Long| FLOAT| —| Record's longitude| No| —| —| — |
| `trueai_addr_postal_code`| Address Postal Code| STRING| 50| Record's postal code| No| —| —| — |
| `trueai_addr_rule`| Address Rule| INTEGER| —| Record's address prediction rule| No| —| —| — |
| `trueai_addr_state`| Address State| STRING| 50| Record's state| No| —| —| — |
| `trueai_addr_street`| Address Street| STRING| 50| Record's street| No| —| —| — |
| `trueai_churned_on`| Churned on| DATETIME| —| Date when the account churned| No| —| —| — |
| `trueai_company_size`| Company Size| STRING| 50| Record's standardized company size| No| —| —| — |
| `trueai_company_size_num`| Company Size Num| INTEGER| —| Company size number of the account| No| —| —| — |
| `trueai_company_size_rule`| Company Size Rule| INTEGER| —| Record's standardized company size prediction rule| No| —| —| — |
| `trueai_complt_accounts`| Average TrueAI Completeness Accounts| FLOAT| —| Average TrueAI Completeness of Accounts| No| —| —| — |
| `trueai_complt_all`| Overall Avg TrueAI Completeness| FLOAT| —| Overall Average TrueAI Completeness Across Entities| No| —| —| — |
| `trueai_complt_contacts`| Average TrueAI Completeness Contacts| FLOAT| —| Average TrueAI Completeness of Contacts| No| —| —| — |
| `trueai_complt_leads`| Average TrueAI Completeness Leads| FLOAT| —| Average TrueAI Completeness of Leads| No| —| —| — |
| `trueai_complt_opps`| Average TrueAI Completeness Opps| FLOAT| —| Average TrueAI Completeness of Opps| No| —| —| — |
| `trueai_creator_id`| Creator ID| STRING| 50| Creator id of the first step in the sales process| No| —| —| — |
| `trueai_crm_complt_accounts`| Average CRM Completeness Accounts| FLOAT| —| Average CRM Completeness of Accounts| No| —| —| — |
| `trueai_crm_complt_all`| Overall Avg CRM Completeness| FLOAT| —| Overall Average CRM Completeness Across Entities| No| —| —| — |
| `trueai_crm_complt_contacts`| Average CRM Completeness Contacts| FLOAT| —| Average CRM Completeness of Contacts| No| —| —| — |
| `trueai_crm_complt_leads`| Average CRM Completeness Leads| FLOAT| —| Average CRM Completeness of Leads| No| —| —| — |
| `trueai_crm_complt_opps`| Average CRM Completeness Opps| FLOAT| —| Average CRM Completeness of Opps| No| —| —| — |
| `trueai_curr_acv`| Curr Acv| CURRENCY| —| Current ACV of the account| No| —| —| — |
| `trueai_curr_step`| Current Step| INTEGER| —| Current step id| No| —| —| — |
| `trueai_curr_step_name`| Current Step Name| STRING| 50| Current step name| No| —| —| — |
| `trueai_days_to_first_touch`| Days to First Touch| INTEGER| —| Number of days from the start to the first touch| No| —| —| — |
| `trueai_first_amt`| First Amount| CURRENCY| —| Booking amount of the first opportunity won| No| —| —| — |
| `trueai_first_purchase`| First Purchase| DATETIME| —| Close date of the first opportunity won| No| —| —| — |
| `trueai_first_touch`| First Touch| DATETIME| —| First time when the record was touched| No| —| —| — |
| `trueai_group`| Group| STRING| 50| Group of the owner of the last step in the sales process| No| —| —| — |
| `trueai_industry`| Industry| STRING| 50| Record's standardized industry| No| —| —| — |
| `trueai_industry_conf`| Industry Confidence| FLOAT| —| Record's standardized industry prediction confidence| No| —| —| — |
| `trueai_industry_rule`| Industry Rule| INTEGER| —| Record's standardized industry prediction rule| No| —| —| — |
| `trueai_last_outcome`| Last Outcome| STRING| 50| Outcome of the last step in the sales process| No| —| —| — |
| `trueai_last_purchase`| Last Purchase| DATETIME| —| Close date of the last opportunity won| No| —| —| — |
| `trueai_last_touch`| Last Touch| DATETIME| —| Last time when the record was touched| No| —| —| — |
| `trueai_latest_amt`| Latest Amount| CURRENCY| —| Booking amount of the last opportunity won| No| —| —| — |
| `trueai_leadsource`| Lead Source| STRING| 50| Record's standardized lead source| No| —| —| — |
| `trueai_leadsource_conf`| Lead Source Confidence| FLOAT| —| Record's standardized lead source prediction confidence| No| —| —| — |
| `trueai_leadsource_is_inbound`| Lead Source Is Inbound| BOOLEAN| —| Boolean flag that indicates whether the record's standardized lead source is inbound| No| —| —| — |
| `trueai_leadsource_rule`| Lead Source Rule| INTEGER| —| Record's standardized lead source prediction rule| No| —| —| — |
| `trueai_owner_id`| Owner ID| STRING| 50| Owner id of the last step in the sales process| No| —| —| — |
| `trueai_parent_name`| Type| STRING| 50| Record's parent account name| No| —| —| — |
| `trueai_potential_acv`| Potential Acv| CURRENCY| —| Potential ACV of the account| No| —| —| — |
| `trueai_potential_acv_factor`| Potential Acv Factor| FLOAT| —| Potential ACV factor of the account| No| —| —| — |
| `trueai_ssr_is_master`| SSR Is Master| BOOLEAN| —| Boolean flag that indicates whether the account is the master account in its group of duplicates taking into account whether it has revenue| No| —| —| — |
| `trueai_tot_amt`| Total Amount| CURRENCY| —| Sum of the booking amounts of all the opportunities won| No| —| —| — |
| `trueai_tot_length_in_days`| Total Days| INTEGER| —| Number of days since the start of the first step until the end of the last step in the sales process| No| —| —| — |
| `trueai_tot_pipeline_amt`| Total Pipeline Amount| CURRENCY| —| Sum of the booking amounts of opportunities created| No| —| —| — |
| `trueai_tot_purchases`| Total Purchases| INTEGER| —| Number of opportunities won| No| —| —| — |
| `trueai_tot_steps`| Total Steps| INTEGER| —| Number of steps in the sales process| No| —| —| — |
| `trueai_type`| Type| STRING| 50| Record's standardized type| No| —| —| — |
| `trueai_type_rule`| Type Rule| INTEGER| —| Record's standardized type rule| No| —| —| — |
