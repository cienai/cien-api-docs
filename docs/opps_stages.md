# `opps_stages` Entity

| Field | Display Name | Type | Length | Description | Deprecated | Salesforce | MS Dynamics | Power BI |
|-------|----------------|------|--------|----------------|-------------|-------------|-------------|-----------|
| `_sys_as_of`| As of Date| DATETIME| —| The date of the last data request from the platform| No| —| —| — |
| `_sys_doc_id`| Doc ID| STRING| 50| Unique record identifier, based on the ID of the document in the remote system (such as Salesforce ID)| No| Id| —| — |
| `_sys_is_deleted`| Is Deleted| BOOLEAN| —| Boolean flag that indicates whether the stage was set to deleted in the remote system| No| IsDeleted| —| — |
| `_sys_last_modified_on`| Last Modified On| DATETIME| —| The date of the last data modification in the platform| No| SystemModstamp| —| — |
| `crm_created_on`| CRM Created On| DATETIME| —| Stage's creation date in the CRM| No| CreatedDate| —| — |
| `crm_creator_id`| CRM Creator ID| STRING| 50| Stage's creator's id in the CRM| No| CreatedById| —| — |
| `crm_description`| CRM Description| STRING| 2000| Stage description in the CRM| No| Description| —| — |
| `crm_is_active`| CRM Is Active| BOOLEAN| —| Boolean flag that indicates whether the stage was set to inactive in CRM| No| IsActive| —| — |
| `crm_is_closed`| CRM Is Closed| BOOLEAN| —| Boolean flag that indicates whether the stage is closed in the CRM| No| IsClosed| —| — |
| `crm_is_won`| CRM Is Won| BOOLEAN| —| Boolean flag that indicates whether the opportunity is won in the CRM| No| IsWon| —| — |
| `crm_modified_by`| CRM Modified By ID| STRING| 50| Stage's modified by user id in the CRM| No| LastModifiedById| —| — |
| `crm_modified_on`| CRM Modified On| DATETIME| —| Stage's modified on date in the CRM| No| LastModifiedDate| —| — |
| `crm_name`| CRM Name| STRING| 500| Stage name in the CRM| No| MasterLabel| —| — |
| `crm_order`| CRM Order| FLOAT| —| Stage's order number in the CRM| No| SortOrder| —| — |
| `crm_pipeline_id`| CRM Pipeline ID| STRING| 50| CRM pipeline id of the opportunity stage| No| —| —| — |
| `crm_pipeline_name`| CRM Pipeline Name| STRING| 50| CRM pipeline name of the opportunity stage| No| —| —| — |
| `crm_prob_of_win`| CRM Probability| FLOAT| —| Stage's probability of win in the CRM| No| DefaultProbability| —| — |
