# `contacts` Entity

| Field | Display Name | Type | Length | Description | Deprecated | Salesforce | MS Dynamics | Power BI |
|-------|----------------|------|--------|----------------|-------------|-------------|-------------|-----------|
| `_sys_as_of`| As of Date| DATETIME| —| The date of the last data request from the platform| No| —| —| — |
| `_sys_doc_id`| Doc ID| STRING| 50| Unique record identifier, based on the ID of the document in the remote system (such as Salesforce ID)| No| Id| contactid| — |
| `_sys_filt_end_date`| Filter End Date| DATE| —| The end date of the record, stripped of time| No| —| —| — |
| `_sys_filt_start_date`| Filter Start Date| DATE| —| The start date of the record, stripped of time| No| —| —| — |
| `_sys_last_modified_on`| Last Modified On| DATETIME| —| The date of the last data modification in the platform| No| SystemModstamp| modifiedon| — |
| `_sys_ssr_id`| SSR ID| STRING| 50| Id of the SSR document the record belongs to| No| —| —| — |
| `crm_account_id`| CRM Account ID| STRING| 50| CRM account id of the contact| No| AccountId| _parentcustomerid_value| — |
| `crm_addr_city`| CRM Address City| STRING| 150| Contact's city in the CRM| No| MailingCity| address1_city| — |
| `crm_addr_country`| CRM Address Country| STRING| 150| Contact's country in the CRM| No| MailingCountry| address1_country| — |
| `crm_addr_postal_code`| CRM Address Postal Code| STRING| 150| Contact's postal code in the CRM| No| MailingPostalCode| address1_postalcode| — |
| `crm_addr_state`| CRM Address State| STRING| 150| Contact's state in the CRM| No| MailingState| address1_stateorprovince| — |
| `crm_addr_street`| CRM Address Street| STRING| 150| Contact's street in the CRM| No| MailingStreet| address1_line1| — |
| `crm_complt`| CRM Completeness| FLOAT| —| Contact's completeness score based on the CRM data| No| —| —| — |
| `crm_complt_contact`| CRM Completeness Contact| FLOAT| —| Contact's contact information completeness score based on the CRM data| No| —| —| — |
| `crm_complt_contact_method`| CRM Completeness Contact Method| FLOAT| —| Contact's contact method completeness score based on the CRM data| No| —| —| — |
| `crm_complt_geo`| CRM Completeness Geo| FLOAT| —| Contact's location completeness score based on the CRM data| No| —| —| — |
| `crm_complt_marketing`| CRM Completeness Marketing| FLOAT| —| Contact's marketing completeness score based on the CRM data| No| —| —| — |
| `crm_created_on`| CRM Created On| DATETIME| —| Contact creation date in the CRM| No| CreatedDate| createdon| — |
| `crm_creator_id`| CRM Creator ID| STRING| 50| Contact creator's id in the CRM| No| CreatedById| _createdby_value| — |
| `crm_deep_link`| CRM Deep Link| STRING| 500| Link to the contact in the remote system (such as Salesforce)| No| —| —| — |
| `crm_email`| CRM Email| STRING| 150| Contact's email| No| Email| emailaddress1| — |
| `crm_first_name`| CRM First Name| STRING| 150| Contact's first name| No| FirstName| firstname| — |
| `crm_last_act_time`| CRM Last Activity Time| DATETIME| —| Contact's last activity time in the CRM| No| LastActivityDate| —| — |
| `crm_last_name`| CRM Last Name| STRING| 150| Contact's last name| No| LastName| lastname| — |
| `crm_leadsource`| CRM Lead Source| STRING| 150| Contact's lead source in the CRM| No| LeadSource| leadsourcecode| — |
| `crm_modified_on`| CRM Modified On| DATETIME| —| Contact modified on date in the CRM| No| LastModifiedDate| modifiedon| — |
| `crm_owner_id`| CRM Owner ID| STRING| 50| Contact owner's id in the CRM| No| OwnerId| _ownerid_value| — |
| `crm_phone`| CRM Phone| STRING| 150| Contact's phone number| No| Phone| telephone1| — |
| `crm_salutation`| CRM Salutation| STRING| 150| Contact's salutation in the CRM| No| Salutation| salutation| — |
| `crm_title`| CRM Title| STRING| 150| Contact's title in the CRM| No| Title| jobtitle| — |
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
| `trueai_addr_city`| Address City| STRING| 50| Contact's city| No| —| —| — |
| `trueai_addr_country`| Address Country| STRING| 50| Contact's country| No| —| —| — |
| `trueai_addr_lat`| Address Lat| FLOAT| —| Contact's latitude| No| —| —| — |
| `trueai_addr_long`| Address Long| FLOAT| —| Contact's longitude| No| —| —| — |
| `trueai_addr_postal_code`| Address Postal Code| STRING| 50| Contact's postal code| No| —| —| — |
| `trueai_addr_rule`| Address Rule| INTEGER| —| Contact's address prediction rule| No| —| —| — |
| `trueai_addr_state`| Address State| STRING| 50| Contact's state| No| —| —| — |
| `trueai_addr_street`| Address Street| STRING| 50| Contact's street| No| —| —| — |
| `trueai_complt`| Completeness| FLOAT| —| Completeness score of the contact based on the standardized data| No| —| —| — |
| `trueai_complt_contact`| Completeness Contact| FLOAT| —| Contact information completeness score of the contact based on the standardized data| No| —| —| — |
| `trueai_complt_contact_method`| Completeness Contact Method| FLOAT| —| Contact method completeness score of the contact based on the standardized data| No| —| —| — |
| `trueai_complt_geo`| Completeness Geo| FLOAT| —| Location completeness score of the contact based on the standardized data| No| —| —| — |
| `trueai_complt_marketing`| Completeness Marketing| FLOAT| —| Marketing completeness score of the contact based on the standardized data| No| —| —| — |
| `trueai_created_on`| Created On| DATE| —| Contact creation date| No| —| —| — |
| `trueai_creator_id`| Creator ID| STRING| 50| Contact creator's id| No| —| —| — |
| `trueai_leadsource`| Lead Source| STRING| 50| Contact's standardized lead source| No| —| —| — |
| `trueai_leadsource_conf`| Lead Source Confidence| FLOAT| —| Contact's standardized lead source prediction confidence| No| —| —| — |
| `trueai_leadsource_rule`| Lead Source Rule| INTEGER| —| Contact's standardized lead source prediction rule| No| —| —| — |
| `trueai_owner_id`| Owner ID| STRING| 50| Contact owner's id| No| —| —| — |
| `trueai_test`| Test| STRING| 100| Test model| No| —| —| — |
| `trueai_test_conf`| Test Confidence| FLOAT| —| Test model confidence| No| —| —| — |
| `trueai_test_debug`| Test Debug| STRING| 2000| Test model debug information| No| —| —| — |
| `trueai_test_rule`| Test Rule| STRING| 500| Test model rule| No| —| —| — |
| `trueai_title_dept`| Title Department| STRING| 50| Contact's standardized department| No| —| —| — |
| `trueai_title_dept_conf`| Title Department Confidence| FLOAT| —| Contact's standardized department prediction confidence| No| —| —| — |
| `trueai_title_seniority`| Title Seniority| STRING| 50| Contact's standardized seniority| No| —| —| — |
| `trueai_title_seniority_conf`| Title Seniority Confidence| FLOAT| —| Contact's standardized seniority prediction confidence| No| —| —| — |
