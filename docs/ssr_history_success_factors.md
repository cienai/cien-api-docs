# `ssr_history_success_factors` Entity

| Field | Display Name | Type | Length | Description | Deprecated | Salesforce | MS Dynamics | Power BI |
|-------|----------------|------|--------|----------------|-------------|-------------|-------------|-----------|
| `_sys_doc_id`| Doc ID| STRING| 150| Unique record identifier, based on the ID of the document in the remote system (such as Salesforce ID)| No| —| —| — |
| `_sys_ssr_history_id`| SSR History ID| STRING| 50| The link to a specific ssr history id| No| —| —| — |
| `trueai_factor_impact`| Feature Impact| FLOAT| —| The impact of the success factor| No| —| —| — |
| `trueai_factor_name`| Readable Name| STRING| 50| The name of the success factor| No| —| —| — |
| `trueai_is_significant`| Significant| BOOLEAN| —| Boolean flag indicating if the value is significant| No| —| —| — |
| `trueai_model_name`| Model| STRING| 50| The model used to generate the success factor| No| —| —| — |
| `trueai_ordering_factor`| Ordering Factor| FLOAT| —| The ordering factor of the value within its success factor| No| —| —| — |
| `trueai_sort`| Sort| FLOAT| —| The sort order of the value within its success factor| No| —| —| — |
| `trueai_ssr_history_name`| Success Factor Name| STRING| 50| Name of the ssr history step| No| —| —| — |
| `trueai_value`| Value| STRING| 50| The value of the success factor| No| —| —| — |
| `trueai_value_impact`| Impact| FLOAT| —| The impact of the value of the success factor| No| —| —| — |
| `trueai_value_impact_sign`| Significance| STRING| 50| The sign (direction) of the success factor: positive, negative or neutral| No| —| —| — |
