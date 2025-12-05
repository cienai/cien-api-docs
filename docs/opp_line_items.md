# `opp_line_items` Entity

| Field | Display Name | Type | Length | Description | Deprecated | Salesforce | MS Dynamics | Power BI |
|-------|----------------|------|--------|----------------|-------------|-------------|-------------|-----------|
| `_sys_as_of`| As of Date| DATETIME| —| The date of the last data request from the platform| No| —| —| — |
| `_sys_doc_id`| Doc ID| STRING| 50| Unique record identifier, based on the ID of the document in the remote system (such as Salesforce ID)| No| Id| opportunityproductid| — |
| `_sys_is_deleted`| Is Deleted| BOOLEAN| —| Boolean flag that indicates whether the stage was set to deleted in the remote system| No| IsDeleted| —| — |
| `_sys_last_modified_on`| Last Modified On| DATETIME| —| The date of the last data modification in the platform| No| SystemModstamp| modifiedon| — |
| `_sys_ssr_id`| SSR ID| STRING| 50| Id of the SSR document the record belongs to| No| —| —| — |
| `crm_created_on`| CRM Created On| DATETIME| —| Product's creation date in the CRM| No| CreatedDate| createdon| — |
| `crm_currency`| CRM Currency| STRING| 50| Product's currency in the CRM| No| CurrencyIsoCode| transactioncurrencyid| — |
| `crm_description`| CRM Description| MEMO| 5000| Product's description in the CRM| No| Description| description| — |
| `crm_list_price`| CRM List Price| CURRENCY| —| Product's list_price in the CRM| No| ListPrice| priceperunit_base| — |
| `crm_modified_on`| CRM Modified On| DATETIME| —| Product's modified on date in the CRM| No| LastModifiedDate| modifiedon| — |
| `crm_name`| CRM Name| STRING| 500| Product name in the CRM| No| Name| opportunityproductname| — |
| `crm_opp_id`| CRM Opp ID| STRING| 500| Product oppid in the CRM| No| OpportunityId| _opportunityid_value| — |
| `crm_product_code`| CRM Product Code| STRING| 2000| Product code in the CRM| No| ProductCode| producttypecode| — |
| `crm_product_id`| CRM Product ID| STRING| 500| Product product_id in the CRM| No| Product2Id| _productid_value| — |
| `crm_qty`| CRM Qty| INTEGER| —| Product's qty in the CRM| No| Quantity| quantity| — |
| `crm_total_price`| CRM Total Price| CURRENCY| —| Product's total_price in the CRM| No| TotalPrice| extendedamount| — |
| `crm_unit_price`| CRM Unit Price| CURRENCY| —| Product's unit_price in the CRM| No| UnitPrice| priceperunit| — |
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
| `trueai_discount_amt`| Discount Amount| CURRENCY| —| Product's discount amount| No| —| —| — |
| `trueai_discount_pct`| Discount Percentage| FLOAT| —| Product's discount percentage| No| —| —| — |
| `trueai_list_price`| List Price| CURRENCY| —| Product's list price| No| —| —| — |
| `trueai_list_price_rule`| List Price Rule| INTEGER| —| Product's list price rule| No| —| —| — |
| `trueai_qty`| Quantity| FLOAT| —| Products quantity| No| —| —| — |
| `trueai_revenue_type`| Revenue Type| STRING| 50| Revenue Type| No| —| —| — |
| `trueai_revenue_type_context`| Prompt Used To Classify Revenue Type| STRING| 2000| Prompt Used To Classify Revenue Type| No| —| —| — |
| `trueai_total_price`| Total Price| CURRENCY| —| Product's total price| No| —| —| — |
| `trueai_total_price_rule`| Total Price Rule| INTEGER| —| Product's total price rule| No| —| —| — |
| `trueai_unit_price`| Unit Price| CURRENCY| —| Product's unit price| No| —| —| — |
| `trueai_unit_price_rule`| Unit Price Rule| INTEGER| —| Product's unit price rule| No| —| —| — |
