# `erp_orders` Entity

| Field | Display Name | Type | Length | Description | Deprecated | Salesforce | MS Dynamics | Power BI |
|-------|----------------|------|--------|----------------|-------------|-------------|-------------|-----------|
| `_sys_as_of`| As of Date| DATETIME| —| The date of the last data request from the platform| No| —| —| `\{"_sys_as_of", type datetime\},` |
| `_sys_doc_id`| Doc ID| STRING| 50| Unique record identifier, based on the ID of the document in the remote system (such as Salesforce ID)| No| —| —| `\{"_sys_doc_id", type text\},` |
| `_sys_filt_end_date`| Filter End Date| DATE| —| The end date of the record, stripped of time| No| —| —| `\{"_sys_filt_end_date", type date\},` |
| `_sys_filt_start_date`| Filter Start Date| DATE| —| The start date of the record, stripped of time| No| —| —| `\{"_sys_filt_start_date", type date\},` |
| `_sys_last_modified_on`| Last Modified On| DATETIME| —| The date of the last data modification in the platform| No| —| —| `\{"_sys_last_modified_on", type datetime\},` |
| `crm_opp_id`| CRM Opportunity ID| STRING| 50| A matching opportunity id (if supplied)| No| —| —| `\{"crm_opp_id", type text\},` |
| `erp_account_id`| ERP Account ID| STRING| 50| The ERP Account ID| No| —| —| `\{"erp_account_id", type text\},` |
| `erp_arr_amt`| ERP Annual Recurring Amount| CURRENCY| —| Any recurring fees normalized.| No| —| —| `\{"erp_arr_amt", type number\},` |
| `erp_arr_delta`| ERP Annual Change (delta)| CURRENCY| —| —| No| —| —| `\{"erp_arr_delta", type number\},` |
| `erp_created_on`| ERP Created On| DATETIME| —| Account creation date in the ERP| No| —| —| `\{"erp_created_on", type datetime\},` |
| `erp_creator_email`| ERP Creator Email| STRING| 150| The creators email to be used for lookups| No| —| —| `\{"erp_creator_email", type text\},` |
| `erp_creator_id`| ERP Creator ID| STRING| 50| Order creator's ID in the ERP| No| —| —| `\{"erp_creator_id", type text\},` |
| `erp_creator_name`| ERP Creator| STRING| 150| The creators name to be used for lookups| No| —| —| `\{"erp_creator_name", type text\},` |
| `erp_currency`| ERP order currency| STRING| 50| The currency of the order.| No| —| —| `\{"erp_currency", type text\},` |
| `erp_description`| ERP Description| STRING| 500| description of the order| No| —| —| `\{"erp_description", type text\},` |
| `erp_discount_amt`| ERP order Discount| CURRENCY| —| The discount deducted from the order| No| —| —| `\{"erp_discount_amt", type number\},` |
| `erp_leadsource`| ERP lead source| STRING| 50| The channel the order came through| No| —| —| `\{"erp_leadsource", type text\},` |
| `erp_modified_on`| CRM Modified On| DATETIME| —| Order modified on the date in the CRM| No| —| —| `\{"erp_modified_on", type datetime\},` |
| `erp_name`| ERP Name| STRING| 150| Name of the order| No| —| —| `\{"erp_name", type text\},` |
| `erp_one_time_amt`| ERP One-Time Amount| CURRENCY| —| Any one-time fees| No| —| —| `\{"erp_one_time_amt", type number\},` |
| `erp_order_end_date`| ERP Order End Date| DATE| —| The end date| No| —| —| `\{"erp_order_end_date", type date\},` |
| `erp_order_start_date`| ERP Order Start Date| DATE| —| The effective date of the order| No| —| —| `\{"erp_order_start_date", type date\},` |
| `erp_status`| ERP order Status| STRING| 150| The status of the order| No| —| —| `\{"erp_status", type text\},` |
| `erp_sub_total_amt`| ERP order amount| CURRENCY| —| The amount of the order before taxes and discounts| No| —| —| `\{"erp_sub_total_amt", type number\},` |
| `erp_tax_amt`| ERP order| CURRENCY| —| The taxes added to the oder| No| —| —| `\{"erp_tax_amt", type number\},` |
| `erp_total_amt`| ERP Total Amount| CURRENCY| —| —| No| —| —| `\{"erp_total_amt", type number\},` |
| `erp_type`| ERP order type| STRING| 150| The type of order in the ERP system| No| —| —| `\{"erp_type", type text\},` |
| `trueai_account_id`| TrueAI Account ID| STRING| 50| The matched-up CRM account sys id| No| —| —| `\{"trueai_account_id", type text\},` |
| `trueai_arr_amt`| Annual Recurring Amount| CURRENCY| —| Any recurring fees normalized.| No| —| —| `\{"trueai_arr_amt", type number\},` |
| `trueai_arr_delta`| Annual Change (delta)| CURRENCY| —| —| No| —| —| `\{"trueai_arr_delta", type number\},` |
| `trueai_created_on`| Created On| DATETIME| —| Order creation date| No| —| —| `\{"trueai_created_on", type datetime\},` |
| `trueai_creator_id`| Creator ID| STRING| 50| Order creator's id| No| —| —| `\{"trueai_creator_id", type text\},` |
| `trueai_discount_amt`| Order Discount| CURRENCY| —| The discount deducted from the order| No| —| —| `\{"trueai_discount_amt", type number\},` |
| `trueai_leadsource`| Lead Source| STRING| 50| The leadsource| No| —| —| `\{"trueai_leadsource", type text\},` |
| `trueai_one_time_amt`| One-Time Amount| CURRENCY| —| Any one-time fees| No| —| —| `\{"trueai_one_time_amt", type number\},` |
| `trueai_opp_id`| Opp ID| STRING| 50| Any Opp matched to the Order.| No| —| —| `\{"trueai_opp_id", type text\},` |
| `trueai_opp_id_conf`| Opp ID link Confidence| FLOAT| —| The confidence in the association between an opp and an Order.| No| —| —| `\{"trueai_opp_id_conf", type number\},` |
| `trueai_order_end_date`| the end date of the order.| DATETIME| —| If an annual order 12 months from now. Otherwise today. Used for churn calculation.| No| —| —| `\{"trueai_order_end_date", type datetime\},` |
| `trueai_owner_id`| Owner ID| STRING| 50| Order owner's id| No| —| —| `\{"trueai_owner_id", type text\},` |
| `trueai_status`| Order Status| STRING| 50| The status of the Order (Placed, Cancelled)| No| —| —| `\{"trueai_status", type text\},` |
| `trueai_sub_total_amt`| Order amount| CURRENCY| —| The amount of the order before taxes and discounts| No| —| —| `\{"trueai_sub_total_amt", type number\},` |
| `trueai_tax_amt`| Order tax amt| CURRENCY| —| The taxes added to the oder| No| —| —| `\{"trueai_tax_amt", type number\},` |
| `trueai_total_amt`| Total Amount| CURRENCY| —| Total final amount| No| —| —| `\{"trueai_total_amt", type number\},` |
| `trueai_type`| Type| STRING| 50| Standardized Order Type (eCommerce New, eCommerce Upgrade, eCommerce Downgrade, eCommerce Cancellation, Manual New, Manual Existing, Manual Cancellation)| No| —| —| `\{"trueai_type", type text\},` |
