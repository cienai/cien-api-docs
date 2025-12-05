# `products` Entity

| Field | Display Name | Type | Length | Description | Deprecated | Salesforce | MS Dynamics | Power BI |
|-------|----------------|------|--------|----------------|-------------|-------------|-------------|-----------|
| `_sys_as_of`| As of Date| DATETIME| —| The date of the last data request from the platform| No| —| —| — |
| `_sys_doc_id`| Doc ID| STRING| 50| Unique record identifier, based on the ID of the document in the remote system (such as Salesforce ID)| No| Id| productid| — |
| `_sys_is_active`| Is Active| BOOLEAN| —| Boolean flag that indicates whether the record was set to inactive in the remote system| No| IsActive| statecode| — |
| `_sys_is_deleted`| Is Deleted| BOOLEAN| —| Boolean flag that indicates whether the record was set to deleted in the remote system| No| IsDeleted| —| — |
| `_sys_last_modified_on`| Last Modified On| DATETIME| —| The date of the last data modification in the platform| No| SystemModstamp| modifiedon| — |
| `crm_created_on`| CRM Created On| DATETIME| —| Product's creation date in the CRM| No| CreatedDate| createdon| — |
| `crm_currency`| CRM Currency| STRING| 50| Product's currency in the CRM| No| CurrencyIsoCode| transactioncurrencyid| — |
| `crm_description`| CRM Description| MEMO| 5000| Product's description in the CRM| No| Description| description| — |
| `crm_family`| CRM Family| STRING| 50| Product's family in the CRM| No| Family| —| — |
| `crm_modified_on`| CRM Modified On| DATETIME| —| Product's modified on date in the CRM| No| LastModifiedDate| modifiedon| — |
| `crm_name`| CRM Name| STRING| 500| Product name in the CRM| No| Name| name| — |
| `crm_product_code`| CRM Product Code| STRING| 2000| Product code in the CRM| No| ProductCode| productnumber| — |
| `trueai_family`| Product Family| STRING| 50| Product's family| No| —| —| — |
| `trueai_name`| Product Name| STRING| 500| Product name| No| —| —| — |
