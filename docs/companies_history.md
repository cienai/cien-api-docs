# `companies_history` Entity

| Field | Display Name | Type | Length | Description | Deprecated | Salesforce | MS Dynamics | Power BI |
|-------|----------------|------|--------|----------------|-------------|-------------|-------------|-----------|
| `_sys_as_of`| As of Date| DATETIME| —| The date of the last data request from the platform| No| —| —| — |
| `_sys_co_id`| Company ID| STRING| 50| The Cien company ID| No| —| —| — |
| `_sys_doc_id`| Doc ID| STRING| 50| Unique record identifier| No| —| —| — |
| `_sys_filt_end_date`| Filter End Date| DATE| —| The end date of the record, stripped of time| No| —| —| — |
| `_sys_filt_start_date`| Filter Start Date| DATE| —| The start date of the record, stripped of time| No| —| —| — |
| `_sys_image_size`| Image Size| STRING| 50| The processing cluster imaging size| No| —| —| — |
| `_sys_last_modified_on`| Last Modified On| DATETIME| —| The date of the last data modification in the platform| No| —| —| — |
| `_sys_processed_as_of`| Processed As of Date| DATETIME| —| The date of running the export| No| —| —| — |
| `_sys_reference_date`| Reference Date| DATETIME| —| The reference date used as benchmark for the calculations| No| —| —| — |
| `_sys_scheduled_daily`| Scheduled Daily| BOOLEAN| —| Boolean flag indicating whether the company is scheduled daily| No| —| —| — |
| `_sys_scheduled_weekly`| Scheduled Weekly| BOOLEAN| —| Boolean flag indicating whether the company is scheduled weekly| No| —| —| — |
| `_sys_version`| Version| STRING| 50| The current release version| No| —| —| — |
| `accounts_avg_match_conf`| Accounts Avg Match Confidence| FLOAT| —| Average match confidence for accounts| No| —| —| — |
| `added_on`| added on| DATETIME| —| Added On Date| No| —| —| — |
| `co_hq_country`| co_hq_country| STRING| 100| co_hq_country| No| —| —| — |
| `co_target_geo`| co_target_geo| STRING| 100| co_target_geo| No| —| —| — |
| `co_target_market`| co_target_market| STRING| 100| co_target_market| No| —| —| — |
| `co_type_industry`| co_type_industry| STRING| 100| co_type_industry| No| —| —| — |
| `company_currency`| Company Currency| STRING| 50| Company's currency| No| —| —| — |
| `company_currency_symbol`| Company Currency Symbol| STRING| 50| Company's currency symbol| No| —| —| — |
| `company_logo`| Company Logo| STRING| 50| Company's logo URL| No| —| —| — |
| `company_name`| Company Name| STRING| 50| Company name| No| —| —| — |
| `consolidation_status`| consolidation_status| STRING| 100| consolidation_status| No| —| —| — |
| `contacts_avg_match_conf`| Contacts Avg Match Confidence| FLOAT| —| Average match confidence for contacts| No| —| —| — |
| `crm_conn_status`| crm_conn_status| STRING| 100| crm_conn_status| No| —| —| — |
| `deactivated_on`| deactivated_on| DATETIME| —| deactivated_on| No| —| —| — |
| `dev_tracked`| Dev Tracked| BOOLEAN| —| Boolean flag indicating whether the company is dev tracked| No| —| —| — |
| `di_acv_company_size_factors`| Acv Company Size Factors| OBJECT| 500000| Company size factors impacting the ACV| No| —| —| — |
| `di_acv_country_factors`| Acv Country Factors| OBJECT| 500000| Country factors impacting the ACV| No| —| —| — |
| `di_acv_industry_factors`| Acv Industry Factors| OBJECT| 500000| Industry factors impacting the ACV| No| —| —| — |
| `di_amt_won_last12months`| Amount Won Last12months| CURRENCY| —| Sum of booking amounts of opportunities won in the past 12 months| No| —| —| — |
| `di_pred_all_label`| Quality Score All Label| STRING| 50| Overall quality score label| No| —| —| — |
| `di_pred_all_score`| Quality Score All| FLOAT| —| Overall quality score| No| —| —| — |
| `di_pred_existing_customer_selling_attempts`| Predicted Existing Customer Selling Attempts| INTEGER| —| Number of datapoints used to determine the R2 score of the probability of existing customer selling win| No| —| —| — |
| `di_pred_existing_customer_selling_auc`| Predicted Existing Customer Selling AUC| FLOAT| —| AUC score of the probability of existing customer selling win| No| —| —| — |
| `di_pred_existing_customer_selling_avg_p_val`| Predicted Existing Customer Selling Avg. P Val| FLOAT| —| Average predicted probability of existing customer selling win| No| —| —| — |
| `di_pred_existing_customer_selling_end_date`| Predicted Existing Customer Selling End Date| DATETIME| —| End of the period used to compute the R2 score of the probability of existing customer selling win| No| —| —| — |
| `di_pred_existing_customer_selling_r2`| Predicted Existing Customer Selling R2| FLOAT| —| R2 score of the probability of existing customer selling win| No| —| —| — |
| `di_pred_existing_customer_selling_r2_data`| Predicted Existing Customer Selling R2 Data| OBJECT| 2000| Coordinates data used to determine the R2 score of the probability of existing customer selling win| No| —| —| — |
| `di_pred_existing_customer_selling_score`| Quality Score Existing Customer Selling| FLOAT| —| Quality score for existing customer selling activities| No| —| —| — |
| `di_pred_existing_customer_selling_start_date`| Predicted Existing Customer Selling Start Date| DATETIME| —| Start of the period used to compute the R2 score of the probability of existing customer selling win| No| —| —| — |
| `di_pred_existing_customer_selling_successes`| Predicted Existing Customer Selling Successes| INTEGER| —| Number of successful outcomes in the sample used to determine the R2 score of the probability of existing customer selling win| No| —| —| — |
| `di_pred_new_logo_attempts`| Predicted New Logo Attempts| INTEGER| —| Number of datapoints used to determine the R2 score of the probability of new logo win| No| —| —| — |
| `di_pred_new_logo_auc`| Predicted New Logo AUC| FLOAT| —| AUC score of the probability of new logo win| No| —| —| — |
| `di_pred_new_logo_avg_p_val`| Predicted New Logo Avg. P Val| FLOAT| —| Average predicted probability of new logo win| No| —| —| — |
| `di_pred_new_logo_end_date`| Predicted New Logo End Date| DATETIME| —| End of the period used to compute the R2 score of the probability of new logo win| No| —| —| — |
| `di_pred_new_logo_r2`| Predicted New Logo R2| FLOAT| —| R2 score of the probability of new logo win| No| —| —| — |
| `di_pred_new_logo_r2_data`| Predicted New Logo R2 Data| OBJECT| 2000| Coordinates data used to determine the R2 score of the probability of new logo win| No| —| —| — |
| `di_pred_new_logo_score`| Quality Score New Logo Selling| FLOAT| —| Quality score for new logo selling activities| No| —| —| — |
| `di_pred_new_logo_start_date`| Predicted New Logo Start Date| DATETIME| —| Start of the period used to compute the R2 score of the probability of new logo win| No| —| —| — |
| `di_pred_new_logo_successes`| Predicted New Logo Successes| INTEGER| —| Number of successful outcomes in the sample used to determine the R2 score of the probability of new logo win| No| —| —| — |
| `di_pred_post_sales_attempts`| Predicted Post Sales Attempts| INTEGER| —| Number of datapoints used to determine the R2 score of the probability of next opportunity creation| No| —| —| — |
| `di_pred_post_sales_auc`| Predicted Post Sales AUC| FLOAT| —| AUC score of the probability of next opportunity creation| No| —| —| — |
| `di_pred_post_sales_avg_p_val`| Predicted Post Sales Avg. P Val| FLOAT| —| Average predicted probability of next opportunity creation| No| —| —| — |
| `di_pred_post_sales_end_date`| Predicted Post Sales End Date| DATETIME| —| End of the period used to compute the R2 score of the probability of next opportunity creation| No| —| —| — |
| `di_pred_post_sales_qual_bucket_tiers`| Predicted Post Sales Quality Bucket Tiers| OBJECT| 2000| Tiers for the probability of next opportunity creation prediction buckets| No| —| —| — |
| `di_pred_post_sales_r2`| Predicted Post Sales R2| FLOAT| —| R2 score of the probability of next opportunity creation| No| —| —| — |
| `di_pred_post_sales_r2_data`| Predicted Post Sales R2 Data| OBJECT| 2000| Coordinates data used to determine the R2 score of the probability of next opportunity creation| No| —| —| — |
| `di_pred_post_sales_score`| Quality Score Post Sales Support| FLOAT| —| Quality score for post sales support activities| No| —| —| — |
| `di_pred_post_sales_start_date`| Predicted Post Sales Start Date| DATETIME| —| Start of the period used to compute the R2 score of the probability of next opportunity creation| No| —| —| — |
| `di_pred_post_sales_successes`| Predicted Post Sales Successes| INTEGER| —| Number of successful outcomes in the sample used to determine the R2 score of the probability of next opportunity creation| No| —| —| — |
| `di_pred_prospecting_attempts`| Predicted Prospecting Attempts| INTEGER| —| Number of datapoints used to determine the R2 score of the probability of conversion| No| —| —| — |
| `di_pred_prospecting_auc`| Predicted Prospecting AUC| FLOAT| —| AUC score of the probability of conversion| No| —| —| — |
| `di_pred_prospecting_avg_p_val`| Predicted Prospecting Avg. P Val| FLOAT| —| Average predicted probability of conversion| No| —| —| — |
| `di_pred_prospecting_end_date`| Predicted Prospecting End Date| DATETIME| —| End of the period used to compute the R2 score of the probability of conversion| No| —| —| — |
| `di_pred_prospecting_model_reset_on`| Predicted Prospecting Model Reset on| DATETIME| —| Date when the probability of conversion model was last trained| No| —| —| — |
| `di_pred_prospecting_qual_bucket_tiers`| Predicted Prospecting Quality Bucket Tiers| OBJECT| 2000| Tiers for the probability of conversion prediction buckets| No| —| —| — |
| `di_pred_prospecting_r2`| Predicted Prospecting R2| FLOAT| —| R2 score of the probability of conversion| No| —| —| — |
| `di_pred_prospecting_r2_data`| Predicted Prospecting R2 Data| OBJECT| 2000| Coordinates data used to determine the R2 score of the probability of conversion| No| —| —| — |
| `di_pred_prospecting_score`| Quality Score Prospecting| FLOAT| —| Quality score for prospecting activities| No| —| —| — |
| `di_pred_prospecting_start_date`| Predicted Prospecting Start Date| DATETIME| —| Start of the period used to compute the R2 score of the probability of conversion| No| —| —| — |
| `di_pred_prospecting_successes`| Predicted Prospecting Successes| INTEGER| —| Number of successful outcomes in the sample used to determine the R2 score of the probability of conversion| No| —| —| — |
| `di_pred_selling_existing_customer_qual_bucket_tiers`| Predicted Exsiting Customer Selling Quality Bucket Tiers| OBJECT| 2000| Tiers for the probability of existing_customer_selling opportunity win prediction buckets| No| —| —| — |
| `di_pred_selling_new_logo_qual_bucket_tiers`| Predicted Selling New Logo Quality Bucket Tiers| OBJECT| 2000| Tiers for the probability of new logo opportunity win prediction buckets| No| —| —| — |
| `di_success_prob_training_score`| Success Probability Training Score| FLOAT| —| Average AUC score of the success probability when training| No| —| —| — |
| `di_success_prob_validation_score`| Success Probability Validation Score| FLOAT| —| Average AUC score of the success probability on the validation set| No| —| —| — |
| `erp_conn_status`| erp_conn_status| STRING| 100| erp_conn_status| No| —| —| — |
| `fiscal_year_offset`| Fiscal Year Offset| INTEGER| —| Fiscal year offset| No| —| —| — |
| `founded_year`| founded_year| INTEGER| —| founded_year| No| —| —| — |
| `geo_api_requests_accounts`| geo_api_requests_accounts| INTEGER| —| Number of geocoding API requests sent| No| —| —| — |
| `geo_api_requests_contacts`| geo_api_requests_contacts| INTEGER| —| Number of geocoding API requests sent| No| —| —| — |
| `geo_api_requests_hr_users`| geo_api_requests_hr_users| INTEGER| —| Number of geocoding API requests sent| No| —| —| — |
| `geo_api_requests_leads`| geo_api_requests_leads| INTEGER| —| Number of geocoding API requests sent| No| —| —| — |
| `geo_api_requests_users`| geo_api_requests_users| INTEGER| —| Number of geocoding API requests sent| No| —| —| — |
| `geo_required_accounts`| geo_required_accounts| INTEGER| —| Number of docs that require geocoding API requests| No| —| —| — |
| `geo_required_contacts`| geo_required_contacts| INTEGER| —| Number of docs that require geocoding API requests| No| —| —| — |
| `geo_required_hr_users`| geo_required_hr_users| INTEGER| —| Number of docs that require geocoding API requests| No| —| —| — |
| `geo_required_leads`| geo_required_leads| INTEGER| —| Number of docs that require geocoding API requests| No| —| —| — |
| `geo_required_users`| geo_required_users| INTEGER| —| Number of docs that require geocoding API requests| No| —| —| — |
| `job_status`| job_status| STRING| 100| job_status| No| —| —| — |
| `leads_avg_match_conf`| Leads Avg Match Confidence| FLOAT| —| Average match confidence for leads| No| —| —| — |
| `matched_accounts_percentage`| Matched Accounts Percentage| FLOAT| —| Percentage of matched accounts| No| —| —| — |
| `matched_contacts_percentage`| Matched Contacts Percentage| FLOAT| —| Percentage of matched contacts| No| —| —| — |
| `matched_leads_percentage`| Matched Leads Percentage| FLOAT| —| Percentage of matched leads| No| —| —| — |
| `min_ext_match_confidence`| Min Ext Match Confidence| FLOAT| —| Minimum external match confidence| No| —| —| — |
| `partner_base64_logo`| Partner Base64 Logo| OBJECT| 10000| Partner company logo| No| —| —| — |
| `partner_co_id`| Partner Company ID| STRING| 50| Partner company ID| No| —| —| — |
| `partner_name`| Partner Name| STRING| 50| Partner company name| No| —| —| — |
| `partner_product_name`| Partner Product Name| STRING| 50| Partner company product name| No| —| —| — |
| `pbi_report_links`| pbi_report_links| OBJECT| 50000| PBI report page links| No| —| —| — |
| `pbi_version`| pbi_version| STRING| 50| PBI report version| No| —| —| — |
| `pbi_workspace_name`| PowerBI workspace Name| STRING| 100| Workspace or group name in powerBI| No| —| —| — |
| `pbi_workspace_url`| PowerBI workspace url| STRING| 100| Workspace or group url in powerBI| No| —| —| — |
| `primary_contact`| primary_contact| STRING| 100| primary_contact| No| —| —| — |
| `processing_all_last_attempt`| Processing All Last Attempt| DATETIME| —| Date of last attempt to run the company's processing| No| —| —| — |
| `processing_all_last_success`| Processing All Last Success| DATETIME| —| Date of last successful attempt to run the company's processing| No| —| —| — |
| `processing_all_last_success_time_sec`| Processing All Last Success Time Sec| FLOAT| —| Time in seconds it took to run the company's processing| No| —| —| — |
| `processing_api_export_last_attempt`| Processing Api Export Last Attempt| DATETIME| —| Date of last attempt to run the company's API exports| No| —| —| — |
| `processing_api_export_last_success`| Processing Api Export Last Success| DATETIME| —| Date of last successful attempt to run the company's API exports| No| —| —| — |
| `processing_api_export_last_success_time_sec`| Processing Api Export Last Success Time Sec| FLOAT| —| Time in seconds it took to run the company's API exports| No| —| —| — |
| `processing_max_last_modified_on_act`| Processing Max Last Modified On Activities| DATETIME| —| Latest system modstamp date on activities| No| —| —| — |
| `processing_max_last_modified_on_opp_histories`| Processing Max Last Modified On Opp Histories| DATETIME| —| Latest system modstamp date on opp_histories| No| —| —| — |
| `processing_max_last_modified_on_opps`| Processing Max Last Modified On Opps| DATETIME| —| Latest system modstamp date on opps| No| —| —| — |
| `processing_max_last_modified_on_users`| Processing Max Last Modified On Users| DATETIME| —| Latest system modstamp date on users| No| —| —| — |
| `processing_mode`| Processing Mode| STRING| 50| Processing mode| No| —| —| — |
| `processing_post_ssr_ml_last_attempt`| Post ssr last attempt| DATETIME| —| Last time the post ssr jobstep was attempted| No| —| —| — |
| `processing_post_ssr_ml_last_success`| Post ssr last attempt| DATETIME| —| Last time the post ssr jobstep was successful| No| —| —| — |
| `processing_post_ssr_ml_last_success_time_sec`| Post ssr last attempt| FLOAT| —| Time taken for the last time the post ssr jobstep was successful| No| —| —| — |
| `processing_pre_ssr_ml_last_attempt`| Last time the pre ssr jobstep was attempted| DATETIME| —| Last time the pre ssr jobstep was attempted| No| —| —| — |
| `processing_pre_ssr_ml_last_success`| Last time the pre ssr jobstep was successful| DATETIME| —| Last time the pre ssr jobstep was successful| No| —| —| — |
| `processing_pre_ssr_ml_last_success_time_sec`| Time taken for the Last time the pre ssr jobstep was successful| FLOAT| —| Time taken for the Last time the pre ssr jobstep was successful| No| —| —| — |
| `processing_sync_last_attempt`| Processing Sync Last Attempt| DATETIME| —| Date of last attempt to run the company's sync| No| —| —| — |
| `processing_sync_last_success`| Processing Sync Last Success| DATETIME| —| Date of last successful attempt to run the company's sync| No| —| —| — |
| `processing_sync_last_success_time_sec`| Processing Sync Last Success Time Sec| FLOAT| —| Time in seconds it took to run the company's sync| No| —| —| — |
| `processing_transform_last_attempt`| Processing Transform Last Attempt| DATETIME| —| Date of last attempt to run the company's raw transform| No| —| —| — |
| `processing_transform_last_success`| Processing Transform Last Success| DATETIME| —| Date of last successful attempt to run the company's raw transform| No| —| —| — |
| `processing_transform_last_success_time_sec`| Processing Transform Last Success Time Sec| FLOAT| —| Time in seconds it took to run the company's raw transform| No| —| —| — |
| `purged_on`| purged_on| DATETIME| —| purged_on| No| —| —| — |
| `ref_currency`| ref_currency| STRING| 100| ref_currency| No| —| —| — |
| `ref_dare_potential_growth_rate`| ref_dare_potential_growth_rate| FLOAT| —| ref_dare_potential_growth_rate| No| —| —| — |
| `region`| region| STRING| 100| region| No| —| —| — |
| `status`| status| STRING| 100| STATUS| No| —| —| — |
| `total_employees`| total_employees| INTEGER| —| total_employees| No| —| —| — |
| `ttm_ref_date_bookings`| TTM_ref_date_bookings| INTEGER| —| TTM_ref_date_bookings| No| —| —| — |
| `ttm_ref_date_revenue`| TTM_ref_date_revenue| INTEGER| —| TTM_ref_date_revenue| No| —| —| — |
| `users`| Users| INTEGER| —| Number of users| No| —| —| — |
| `users_active`| Users Active| INTEGER| —| Number of active users| No| —| —| — |
| `users_hr_file`| users_hr_file| INTEGER| —| users_hr_file| No| —| —| — |
| `users_match_hr_id`| users_match_hr_id| INTEGER| —| users_match_hr_id| No| —| —| — |
| `users_match_hr_id_nd_role`| users_match_hr_id_nd_role| INTEGER| —| users_match_hr_id_nd_role| No| —| —| — |
| `users_non_match_hr_id_leads`| users_non_match_hr_id_leads| INTEGER| —| users_non_match_hr_id_leads| No| —| —| — |
| `users_non_match_hr_id_nd_group`| users_non_match_hr_id_nd_group| INTEGER| —| users_non_match_hr_id_nd_group| No| —| —| — |
| `users_non_match_hr_id_pipeline`| users_non_match_hr_id_pipeline| INTEGER| —| users_non_match_hr_id_pipeline| No| —| —| — |
| `users_non_match_hr_id_won_deals`| users_non_match_hr_id_won_deals| INTEGER| —| users_non_match_hr_id_won_deals| No| —| —| — |
| `users_sales`| Users Sales| INTEGER| —| Number of active sales users| No| —| —| — |
