# `activities` Entity

| Field | Display Name | Type | Length | Description | Deprecated | Salesforce | MS Dynamics | Power BI |
|-------|----------------|------|--------|----------------|-------------|-------------|-------------|-----------|
| `_sys_as_of`| As of Date| DATETIME| —| The date of the last data request from the platform| No| —| —| — |
| `_sys_doc_id`| Doc ID| STRING| 50| Unique record identifier, based on the ID of the document in the remote system (such as Salesforce ID)| No| Id| activityid| — |
| `_sys_filt_end_date`| Filter End Date| DATE| —| The end date of the record, stripped of time| No| —| —| — |
| `_sys_filt_start_date`| Filter Start Date| DATE| —| The start date of the record, stripped of time| No| —| —| — |
| `_sys_last_modified_on`| Last Modified On| DATETIME| —| The date of the last data modification in the platform| No| SystemModstamp| modifiedon| — |
| `_sys_ssr_id`| SSR ID| STRING| 50| Id of the SSR document the record belongs to| No| —| —| — |
| `crm_account_id`| CRM Account ID| STRING| 50| Activity's account id in the CRM| No| AccountId| regardingobjectid| — |
| `crm_contact_id`| CRM Contact ID| STRING| 150| Activity's contact id in the CRM| No| WhoId| regardingobjectid| — |
| `crm_created_on`| CRM Created On| DATETIME| —| Activity creation date in the CRM| No| CreatedDate| createdon| — |
| `crm_creator_id`| CRM Creator ID| STRING| 50| Activity creator's id in the CRM| No| CreatedById| _createdby_value| — |
| `crm_description`| CRM Description| MEMO| 5000| Activity's description in the CRM| No| Description| description| — |
| `crm_dur`| CRM Duration| FLOAT| —| Activity's duration in the CRM| No| DurationInMinutes| actualdurationminutes| — |
| `crm_end`| CRM End| DATETIME| —| Activity's end date in the CRM| No| EndDateTime| actualend| — |
| `crm_lead_id`| CRM Lead ID| STRING| 50| Activity's lead id in the CRM| No| WhoId| regardingobjectid| — |
| `crm_modified_by`| CRM Modified By| STRING| 50| Activity's modified by user id in the CRM| No| LastModifiedById| _modifiedby_value| — |
| `crm_modified_on`| CRM Modified On| DATETIME| —| Activity's modified on date in the CRM| No| LastModifiedDate| modifiedon| — |
| `crm_name`| Deprecated field| STRING| 500| Deprecated field| ⚠️ Yes| —| —| — |
| `crm_opp_id`| CRM Opp ID| STRING| 50| Activity's opp id in the CRM| No| WhatId| regardingobjectid| — |
| `crm_owner_id`| CRM Owner ID| STRING| 50| Activity owner's id in the CRM| No| OwnerId| _ownerid_value| — |
| `crm_performed_on`| CRM Performed on| DATETIME| —| Activity's performed on date in the CRM| No| ActivityDate| actualstart| — |
| `crm_start`| CRM Start| DATETIME| —| Activity's start date in the CRM| No| StartDateTime| actualstart| — |
| `crm_subject`| CRM Subject| STRING| 500| Activity's subject in the CRM| No| Subject| subject| — |
| `crm_subtype`| CRM Subtype| STRING| 50| Activity's subtype in the CRM| No| EventSubtype| activitytypecode| — |
| `crm_what_id`| CRM What Id| STRING| 50| Activity's what id in the CRM| No| WhatId| —| — |
| `crm_what_type`| CRM What Type| STRING| 50| Activity's what type in the CRM| No| —| —| — |
| `crm_who_id`| CRM Who Id| STRING| 50| Activity's who id in the CRM| No| WhoId| —| — |
| `crm_who_type`| CRM Who Type| STRING| 50| Activity's who type in the CRM| No| —| —| — |
| `trueai_contact_id`| contactid of the activity| STRING| 150| contactid of the activity| No| —| —| — |
| `trueai_contact_id_rule`| rule lookup for contact id| INTEGER| —| rule lookup for contact id| No| —| —| — |
| `trueai_dur`| Duration| INTEGER| —| Activity's duration| No| —| —| — |
| `trueai_elapsed_time`| Elapsed Time| FLOAT| —| Time passed between the previous activity and the current activity| No| —| —| — |
| `trueai_eng`| Engaged| STRING| 50| Activity engagement prediction| No| —| —| — |
| `trueai_eng_conf`| Engaged Confidence| FLOAT| —| Activity engagement prediction confidence| No| —| —| — |
| `trueai_eng_pred`| Engaged Probability Prediction| FLOAT| —| Activity engagement probability prediction| No| —| —| — |
| `trueai_lead_id`| lead id of the activity| STRING| 150| lead id of the activity| No| —| —| — |
| `trueai_lead_id_rule`| rule lookup for lead id| INTEGER| —| rule lookup for lead id| No| —| —| — |
| `trueai_opp_id`| opp id of the activity| STRING| 150| opp id of the activity| No| —| —| — |
| `trueai_opp_id_rule`| rule lookup for the opp id| INTEGER| —| rule lookup for the opp id| No| —| —| — |
| `trueai_performed_on`| Performed on| DATETIME| —| Activity's performed on date| No| —| —| — |
| `trueai_purpose`| Interaction Purpose| STRING| 50| Activity purpose prediction| No| —| —| — |
| `trueai_purpose_rule`| Interaction Purpose Rule| INTEGER| —| Activity purpose prediction rule| No| —| —| — |
| `trueai_related_to_entity`| Related to Entity| STRING| 50| Entity of the object the activity is primarily related to| No| —| —| — |
| `trueai_related_to_id`| Related to ID| STRING| 50| Id of the object the activity is primarily related to| No| —| —| — |
| `trueai_type`| Interaction Type| STRING| 50| Activity type prediction| No| —| —| — |
| `trueai_type_conf`| Interaction Type Confidence| FLOAT| —| Activity type prediction confidence| No| —| —| — |
