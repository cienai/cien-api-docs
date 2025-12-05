# `opps` Entity

| Field | Display Name | Type | Length | Description | Deprecated | Salesforce | MS Dynamics | Power BI |
|-------|----------------|------|--------|----------------|-------------|-------------|-------------|-----------|
| `_sys_as_of`| As of Date| DATETIME| —| The date of the last data request from the platform| No| —| —| — |
| `_sys_doc_id`| Doc ID| STRING| 50| Unique record identifier, based on the ID of the document in the remote system (such as Salesforce ID)| No| Id| opportunityid| — |
| `_sys_filt_end_date`| Filter End Date| DATE| —| The end date of the record, stripped of time| No| —| —| — |
| `_sys_filt_start_date`| Filter Start Date| DATE| —| The start date of the record, stripped of time| No| —| —| — |
| `_sys_is_active`| Is Active| BOOLEAN| —| Boolean flag that indicates whether the opportunity is active| No| —| —| — |
| `_sys_last_modified_on`| Last Modified On| DATETIME| —| The date of the last data modification in the platform| No| SystemModstamp| modifiedon| — |
| `_sys_ssr_id`| SSR ID| STRING| 50| Id of the SSR document the record belongs to| No| —| —| — |
| `crm_account_custom_value_1`| CRM Account Custom Value 1| STRING| 150| Custom categorical variable on the account| No| —| —| — |
| `crm_account_custom_value_2`| CRM Account Custom Value 2| STRING| 150| Custom categorical variable on the account| No| —| —| — |
| `crm_account_custom_value_3`| CRM Account Custom Value 3| STRING| 150| Custom categorical variable on the account| No| —| —| — |
| `crm_account_id`| CRM Account ID| STRING| 50| CRM account id of the opportunity| No| AccountId| _parentaccountid_value| — |
| `crm_booking_amt`| CRM Booking Amount| CURRENCY| —| Opportunity's booking amount in the CRM| No| Amount| totalamount| — |
| `crm_close_date`| CRM Close Date| DATETIME| —| Opportunity's close date in the CRM| No| CloseDate| actualclosedate| — |
| `crm_complt`| CRM Completeness| FLOAT| —| Opportunity's completeness score based on the CRM data| No| —| —| — |
| `crm_complt_contact`| CRM Completeness Contact| FLOAT| —| Opportunity's contact information completeness score based on the CRM data| No| —| —| — |
| `crm_complt_custom`| CRM Completeness Custom| FLOAT| —| Opportunity's custom completeness score based on the CRM data| No| —| —| — |
| `crm_complt_marketing`| CRM Completeness Marketing| FLOAT| —| Opportunity's marketing completeness score based on the CRM data| No| —| —| — |
| `crm_created_on`| CRM Created On| DATETIME| —| Opportunity creation date in the CRM| No| CreatedDate| createdon| — |
| `crm_creator_id`| CRM Creator ID| STRING| 50| Opportunity creator's id in the CRM| No| CreatedById| _createdby_value| — |
| `crm_currency`| CRM Currency| STRING| 50| Opportunity's currency in the CRM| No| CurrencyIsoCode| transactioncurrencyid| — |
| `crm_custom_value_1`| CRM Custom Value 1| STRING| 150| Custom categorical variable| No| —| —| — |
| `crm_custom_value_2`| CRM Custom Value 2| STRING| 150| Custom categorical variable| No| —| —| — |
| `crm_custom_value_3`| CRM Custom Value 3| STRING| 150| Custom categorical variable| No| —| —| — |
| `crm_deep_link`| CRM Deep Link| STRING| 500| Link to the opportunity in the remote system (such as Salesforce)| No| —| —| — |
| `crm_is_closed`| CRM Is Closed| BOOLEAN| —| Boolean flag that indicates whether the opportunity is closed in the CRM| No| IsClosed| statecode| — |
| `crm_is_won`| CRM Is Won| BOOLEAN| —| Boolean flag that indicates whether the opportunity is won in the CRM| No| IsWon| statecode| — |
| `crm_last_act_time`| CRM Last Activity Time| DATETIME| —| Opportunity's last activity time in the CRM| No| LastActivityDate| —| — |
| `crm_leadsource`| CRM Lead Source| STRING| 150| Opportunity's lead source in the CRM| No| LeadSource| —| — |
| `crm_loss_reason`| CRM Loss Reason| STRING| 150| Opportunity's loss reason in the CRM| No| —| —| — |
| `crm_modified_on`| CRM Modified On| DATETIME| —| Opportunity modified on date in the CRM| No| LastModifiedDate| modifiedon| — |
| `crm_name`| CRM Name| STRING| 500| Name of the opportunity| No| Name| name| — |
| `crm_owner_id`| CRM Owner ID| STRING| 50| Opportunity owner's id in the CRM| No| OwnerId| _ownerid_value| — |
| `crm_pipeline_id`| CRM Pipeline ID| STRING| 50| CRM pipeline id of the opportunity| No| —| —| — |
| `crm_pipeline_name`| CRM Pipeline Name| STRING| 50| CRM pipeline name of the opportunity| No| —| —| — |
| `crm_stage_id`| CRM Stage ID| STRING| 150| Opportunity's stage ID in the CRM| No| —| —| — |
| `crm_stage_name`| CRM Stage Name| STRING| 150| Opportunity's stage name in the CRM| No| StageName| stepname| — |
| `crm_stage_num`| CRM Stage Num| INTEGER| 150| Opportunity's stage number in the CRM| No| Probability| closeprobability| — |
| `crm_type`| CRM Type| STRING| 150| Opportunity's type in the CRM| No| Type| —| — |
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
| `trueai_account_id`| Opp Account Id| STRING| 50| Opportunity's account id| No| —| —| — |
| `trueai_account_id_conf`| Opp Account Confidence| FLOAT| —| Opportunity's account id confidence| No| —| —| — |
| `trueai_account_id_rule`| Opp Account Rule| INTEGER| —| Opportunity's account id rule| No| —| —| — |
| `trueai_addr_city`| Address City| STRING| 50| Opportunity's city| No| —| —| — |
| `trueai_addr_country`| Address Country| STRING| 50| Opportunity's country| No| —| —| — |
| `trueai_addr_lat`| Address Lat| FLOAT| —| Opportunity's latitude| No| —| —| — |
| `trueai_addr_long`| Address Long| FLOAT| —| Opportunity's longitude| No| —| —| — |
| `trueai_addr_postal_code`| Address Postal Code| STRING| 50| Opportunity's postal code| No| —| —| — |
| `trueai_addr_rule`| Address Rule| INTEGER| —| Opportunity's address prediction rule| No| —| —| — |
| `trueai_addr_state`| Address State| STRING| 50| Opportunity's state| No| —| —| — |
| `trueai_addr_street`| Address Street| STRING| 50| Opportunity's street| No| —| —| — |
| `trueai_age`| Opportunity Age| INTEGER| —| Opportunity Age| No| —| —| — |
| `trueai_arr_amt`| ARR Amount| CURRENCY| —| Opportunity's ARR amount| No| —| —| — |
| `trueai_booking_amt`| Booking Amount| CURRENCY| —| Opportunity's booking amount| No| —| —| — |
| `trueai_booking_amt_currency_rule`| Booking Amount Currency Rule| INTEGER| —| Opportunity's booking amount currency conversion rule| No| —| —| — |
| `trueai_booking_amt_rule`| Booking Amount Rule| INTEGER| —| Opportunity's booking amount rule related to the presence or absence of opp line items and custom mappings| No| —| —| — |
| `trueai_close_date`| Close Date| DATETIME| —| Opportunity's close date| No| —| —| — |
| `trueai_close_date_rule`| Close Date Rule| INTEGER| —| Opportunity's close date rule| No| —| —| — |
| `trueai_company_size`| Company Size| STRING| 50| Opportunity's standardized company size| No| —| —| — |
| `trueai_company_size_rule`| Company Size Rule| INTEGER| —| Opportunity's standardized company size prediction rule| No| —| —| — |
| `trueai_complt`| Completeness| FLOAT| —| Completeness score of the opportunity based on the standardized data| No| —| —| — |
| `trueai_complt_contact`| Completeness Contact| FLOAT| —| Contact information completeness score of the opportunity based on the standardized data| No| —| —| — |
| `trueai_complt_marketing`| Completeness Marketing| FLOAT| —| Marketing completeness score of the opportunity based on the standardized data| No| —| —| — |
| `trueai_created_from_entity`| Created from Entity| STRING| 50| Opportunity's prospecting entity| No| —| —| — |
| `trueai_created_from_id`| Created from ID| STRING| 50| Opportunity's prospecting object's id| No| —| —| — |
| `trueai_created_on`| Created On| DATETIME| —| Opportunity creation date| No| —| —| — |
| `trueai_created_on_rule`| Created On Rule| INTEGER| —| Opportunity creation date rule| No| —| —| — |
| `trueai_creator_id`| Creator ID| STRING| 50| Opportunity creator's id| No| —| —| — |
| `trueai_creator_id_rule`| Creator ID Rule| INTEGER| —| Opportunity creator's id rule| No| —| —| — |
| `trueai_cross_sale_amt`| Cross-Sale Amount| CURRENCY| —| Opportunity's Cross-Sale amount| No| —| —| — |
| `trueai_discount`| Deprecated field| CURRENCY| —| Deprecated field| ⚠️ Yes| —| —| — |
| `trueai_discount_amt`| Discount Amount| CURRENCY| —| Opportunity discount amount| No| —| —| — |
| `trueai_discount_pct`| Discount Percentage| FLOAT| —| Opportunity discount percentage| No| —| —| — |
| `trueai_discount_pct_tier`| Discount Percentage Tier| STRING| 50| Opportunity discount percentage tier| No| —| —| — |
| `trueai_downgrade_amt`| Downgrade Amount| CURRENCY| —| Opportunity's downgrade amount| No| —| —| — |
| `trueai_dur`| Duration| INTEGER| —| Total duration of activities performed on the opportunity| No| —| —| — |
| `trueai_expansion_amt`| Expansion Amount| CURRENCY| —| Opportunity's expansion amount| No| —| —| — |
| `trueai_industry`| Industry| STRING| 50| Opportunity's standardized industry| No| —| —| — |
| `trueai_industry_conf`| Industry Confidence| FLOAT| —| Opportunity's standardized industry prediction confidence| No| —| —| — |
| `trueai_industry_rule`| Industry Rule| INTEGER| —| Opportunity's standardized industry prediction rule| No| —| —| — |
| `trueai_is_erp`| Deprecated field| BOOLEAN| —| Deprecated field| ⚠️ Yes| —| —| — |
| `trueai_is_new_logo`| Is New Logo| BOOLEAN| —| Boolean flag that indicates whether the opportunity is a new logo| No| —| —| — |
| `trueai_is_won`| Is Won| BOOLEAN| —| Boolean flag that indicates whether the opportunity is won| No| —| —| — |
| `trueai_leadsource`| Lead Source| STRING| 50| Opportunity's standardized lead source| No| —| —| — |
| `trueai_leadsource_conf`| Lead Source Confidence| FLOAT| —| Opportunity's standardized lead source prediction confidence| No| —| —| — |
| `trueai_leadsource_rule`| Lead Source Rule| INTEGER| —| Opportunity's standardized lead source prediction rule| No| —| —| — |
| `trueai_loss_reason`| Loss Reason| STRING| 150| Opportunity's loss reason| No| —| —| — |
| `trueai_nd_amt`| ND Amount| CURRENCY| —| Opportunity's non determinable amount| No| —| —| — |
| `trueai_nnb_amt`| NNB Amount| CURRENCY| —| Opportunity's NNB amount| No| —| —| — |
| `trueai_one_time_amt`| One Time Amount| CURRENCY| —| Opportunity's one time amount| No| —| —| — |
| `trueai_opp_stage_late_date`| Opp Stage Late Date| DATETIME| —| Date when the opportunity entered the late stage| No| —| —| — |
| `trueai_opp_stage_mid_date`| Opp Stage Mid Date| DATETIME| —| Date when the opportunity entered the middle stage| No| —| —| — |
| `trueai_owner_id`| Owner ID| STRING| 50| Opportunity owner's id| No| —| —| — |
| `trueai_owner_id_rule`| Owner ID Rule| INTEGER| —| Opportunity owner's id rule| No| —| —| — |
| `trueai_pipeline_name`| Pipeline Name| STRING| 150| Pipeline name of the opportunity| No| —| —| — |
| `trueai_pred_booking_amt`| Deprecated field| CURRENCY| —| Deprecated field| ⚠️ Yes| —| —| — |
| `trueai_prob_of_next_opp`| Deprecated field| FLOAT| —| Deprecated field| ⚠️ Yes| —| —| — |
| `trueai_prob_of_next_opp_explained`| Deprecated field| OBJECT| 500000| Deprecated field| ⚠️ Yes| —| —| — |
| `trueai_prob_of_win`| Probability of Win| FLOAT| —| Probability of win| No| —| —| — |
| `trueai_prob_of_win_explained`| Deprecated field| OBJECT| 500000| Deprecated field| ⚠️ Yes| —| —| — |
| `trueai_qual_bucket`| Quality Bucket| STRING| 50| Quality bucket based on the probability of win| No| —| —| — |
| `trueai_qual_bucket_num`| Quality Bucket Num| INTEGER| —| Quality bucket expressed as an integer from 1 to 5 based on the probability of win| No| —| —| — |
| `trueai_renewal_amt`| Renewal Amount| CURRENCY| —| Opportunity's renewal amount| No| —| —| — |
| `trueai_sale_type`| Sale Type| STRING| 50| Opportunity's sale type| No| —| —| — |
| `trueai_sale_type_conf`| Sale Type Confidence| FLOAT| —| Opportunity's sale type prediction confidence| No| —| —| — |
| `trueai_stage`| Normalized Stage| STRING| 50| Opportunity's normalized stage| No| —| —| — |
| `trueai_stage_id`| Stage ID| STRING| 150| Opportunity's stage ID| No| —| —| — |
| `trueai_stage_name`| Stage Name| STRING| 150| Opportunity's stage name| No| —| —| — |
| `trueai_start_date_rule`| Start Date Rule| INTEGER| —| Opportunity's start date rule| No| —| —| — |
| `trueai_test`| Test| STRING| 100| Test model| No| —| —| — |
| `trueai_test_conf`| Test Confidence| FLOAT| —| Test model confidence| No| —| —| — |
| `trueai_test_debug`| Test Debug| STRING| 2000| Test model debug information| No| —| —| — |
| `trueai_test_rule`| Test Rule| STRING| 500| Test model rule| No| —| —| — |
| `trueai_vi_opp_value`| Deprecated field| CURRENCY| —| Deprecated field| ⚠️ Yes| —| —| — |
| `trueai_vi_post_sales_value`| Deprecated field| CURRENCY| —| Deprecated field| ⚠️ Yes| —| —| — |
| `trueai_vi_prospecting_value`| Deprecated field| CURRENCY| —| Deprecated field| ⚠️ Yes| —| —| — |
| `trueai_vi_repeat_value`| Deprecated field| CURRENCY| —| Deprecated field| ⚠️ Yes| —| —| — |
