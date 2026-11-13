// Snapshot of trigger metadata from https://notifconfig-xwtlkqyx.onslate.in/ .
// Allocation values are reference/demo data, not live CRM entitlements.
export interface UsageProperty {
  name: string; kind: 'constant' | 'total' | 'event'; unit?: string;
  aggs: string[]; limits?: string[]; noAgg?: boolean; description: string;
}
export interface UsageFeature {
  label: string; recordNoun: string; blank: boolean; properties: UsageProperty[];
}

export const USAGE_FEATURES: Record<string, UsageFeature> = {
  "api": {
    "label": "API",
    "recordNoun": "API calls",
    "blank": false,
    "properties": [
      {
        "name": "free_limit",
        "kind": "constant",
        "unit": "credit",
        "aggs": [],
        "description": "Credits included free with your edition. Read from your subscription when the check runs, so it follows an upgrade by itself."
      },
      {
        "name": "paid_limit",
        "kind": "constant",
        "unit": "credit",
        "aggs": [],
        "description": "Credits you have purchased on top of the free allowance."
      },
      {
        "name": "overall_limit",
        "kind": "constant",
        "unit": "credit",
        "aggs": [],
        "description": "Free plus paid credits. Surge capacity is not included."
      },
      {
        "name": "free_credits_used_this_cycle",
        "kind": "total",
        "unit": "credit",
        "aggs": [
          "max"
        ],
        "limits": [
          "free_limit"
        ],
        "description": "Free credits spent so far this cycle. Resets when the cycle rolls over."
      },
      {
        "name": "paid_credits_used_this_cycle",
        "kind": "total",
        "unit": "credit",
        "aggs": [
          "max"
        ],
        "limits": [
          "paid_limit"
        ],
        "description": "Purchased credits spent so far this cycle. Only starts moving once the free allowance is gone."
      },
      {
        "name": "overall_credits_used_this_cycle",
        "kind": "total",
        "unit": "credit",
        "aggs": [
          "max"
        ],
        "limits": [
          "overall_limit"
        ],
        "description": "All credits spent so far this cycle, across every tier."
      },
      {
        "name": "paid_credits_used_per_api",
        "kind": "event",
        "unit": "credit",
        "aggs": [
          "sum",
          "count",
          "avg",
          "max",
          "min"
        ],
        "limits": [
          "paid_limit"
        ],
        "description": "Paid credits charged by one API call. A bulk read costs more than a single record fetch."
      },
      {
        "name": "credits_used_per_api",
        "kind": "event",
        "unit": "credit",
        "aggs": [
          "sum",
          "count",
          "avg",
          "max",
          "min"
        ],
        "limits": [
          "overall_limit",
          "paid_limit"
        ],
        "description": "Credits charged by one API call across every tier."
      },
      {
        "name": "execution_time",
        "kind": "event",
        "unit": "millisecond",
        "aggs": [
          "avg",
          "max",
          "min",
          "count"
        ],
        "noAgg": true,
        "description": "How long one API call took to serve, in milliseconds."
      },
      {
        "name": "status",
        "kind": "event",
        "aggs": [
          "count",
          "count_distinct"
        ],
        "noAgg": true,
        "description": "HTTP status the call returned. Count it alongside a condition to alert on failures — for example, calls where status is at least 500."
      }
    ]
  },
  "functions": {
    "label": "Functions",
    "recordNoun": "executions",
    "blank": false,
    "properties": [
      {
        "name": "execution_limit",
        "kind": "constant",
        "unit": "execution",
        "aggs": [],
        "description": "Function executions included in your plan for the current cycle."
      },
      {
        "name": "executions_used_this_cycle",
        "kind": "total",
        "unit": "execution",
        "aggs": [
          "max"
        ],
        "limits": [
          "execution_limit"
        ],
        "description": "Executions consumed so far this cycle. Resets when the cycle rolls over."
      },
      {
        "name": "credits_used_per_execution",
        "kind": "event",
        "unit": "credit",
        "aggs": [
          "sum",
          "count",
          "avg",
          "max",
          "min"
        ],
        "description": "Credits charged by one function run. Heavier functions cost more per run."
      },
      {
        "name": "execution_time",
        "kind": "event",
        "unit": "millisecond",
        "aggs": [
          "avg",
          "max",
          "min",
          "count"
        ],
        "noAgg": true,
        "description": "How long one execution took, in milliseconds."
      },
      {
        "name": "status",
        "kind": "event",
        "aggs": [
          "count",
          "count_distinct"
        ],
        "noAgg": true,
        "description": "Whether the run succeeded or failed. Count it alongside a condition to alert on failing functions."
      }
    ]
  },
  "webhooks": {
    "label": "Webhooks",
    "recordNoun": "webhook calls",
    "blank": false,
    "properties": [
      {
        "name": "webhook_limit",
        "kind": "constant",
        "unit": "call",
        "aggs": [],
        "description": "Webhook calls your edition allows per day."
      },
      {
        "name": "webhook_calls_today",
        "kind": "total",
        "unit": "call",
        "aggs": [
          "max"
        ],
        "limits": [
          "webhook_limit"
        ],
        "description": "Webhook calls fired so far today. Resets at midnight in your org’s time zone."
      },
      {
        "name": "response_time",
        "kind": "event",
        "unit": "millisecond",
        "aggs": [
          "avg",
          "max",
          "min",
          "count"
        ],
        "description": "How long the receiving endpoint took to respond, in milliseconds."
      },
      {
        "name": "retries_per_call",
        "kind": "event",
        "unit": "retry",
        "aggs": [
          "sum",
          "count",
          "avg",
          "max",
          "min"
        ],
        "description": "Retries needed before a call succeeded or was dropped."
      },
      {
        "name": "status",
        "kind": "event",
        "aggs": [
          "count",
          "count_distinct"
        ],
        "noAgg": true,
        "description": "HTTP status the endpoint returned. Count it alongside a condition to alert on failing endpoints."
      }
    ]
  },
  "email_notifications": {
    "label": "Email notifications",
    "recordNoun": "emails",
    "blank": false,
    "properties": [
      {
        "name": "email_limit",
        "kind": "constant",
        "unit": "email",
        "aggs": [],
        "description": "Emails your org may send per day, set by edition and user count."
      },
      {
        "name": "emails_sent_today",
        "kind": "total",
        "unit": "email",
        "aggs": [
          "max"
        ],
        "description": "Emails sent so far today. Resets at midnight in your org’s time zone."
      },
      {
        "name": "recipients_per_email",
        "kind": "event",
        "unit": "recipient",
        "aggs": [
          "sum",
          "count",
          "avg",
          "max",
          "min"
        ],
        "description": "Recipients on one email. A mass email to a large view produces a single record with a high value."
      },
      {
        "name": "bounces_per_email",
        "kind": "event",
        "unit": "bounce",
        "aggs": [
          "sum",
          "count",
          "avg"
        ],
        "description": "Bounces recorded against one send."
      },
      {
        "name": "status",
        "kind": "event",
        "aggs": [
          "count",
          "count_distinct"
        ],
        "noAgg": true,
        "description": "Delivered, bounced or failed. Count it alongside a condition to alert on delivery problems."
      }
    ]
  },
  "data_storage": {
    "label": "Data storage",
    "recordNoun": "storage events",
    "blank": false,
    "properties": [
      {
        "name": "storage_limit",
        "kind": "constant",
        "unit": "gigabyte",
        "aggs": [],
        "description": "Total storage included in your plan."
      },
      {
        "name": "storage_used_total",
        "kind": "total",
        "unit": "gigabyte",
        "aggs": [
          "max"
        ],
        "limits": [
          "storage_limit"
        ],
        "description": "Storage your org occupies right now, across all modules. Only goes down when data is deleted."
      },
      {
        "name": "storage_used_per_operation",
        "kind": "event",
        "unit": "gigabyte",
        "aggs": [
          "sum",
          "count",
          "avg",
          "max",
          "min"
        ],
        "limits": [
          "storage_limit"
        ],
        "description": "Storage added by one operation — an import, a bulk create or a single record create."
      }
    ]
  },
  "file_storage": {
    "label": "File storage",
    "recordNoun": "uploads",
    "blank": false,
    "properties": [
      {
        "name": "file_storage_limit",
        "kind": "constant",
        "unit": "gigabyte",
        "aggs": [],
        "description": "File storage included in your plan, across attachments, documents and inline images."
      },
      {
        "name": "file_storage_used_total",
        "kind": "total",
        "unit": "gigabyte",
        "aggs": [
          "max"
        ],
        "limits": [
          "file_storage_limit"
        ],
        "description": "File storage your org occupies right now. Only goes down when files are deleted."
      },
      {
        "name": "file_size_per_upload",
        "kind": "event",
        "unit": "megabyte",
        "aggs": [
          "sum",
          "count",
          "avg",
          "max",
          "min"
        ],
        "description": "Size of one uploaded file, in megabytes."
      }
    ]
  },
  "email_parser": {
    "label": "Email parser",
    "recordNoun": "parsed emails",
    "blank": false,
    "properties": [
      {
        "name": "parser_limit",
        "kind": "constant",
        "unit": "email",
        "aggs": [],
        "description": "Inbound emails your plan lets the parser process in a cycle."
      },
      {
        "name": "emails_parsed_this_cycle",
        "kind": "total",
        "unit": "email",
        "aggs": [
          "max"
        ],
        "limits": [
          "parser_limit"
        ],
        "description": "Inbound emails parsed so far this cycle. Resets when the cycle rolls over."
      },
      {
        "name": "parse_time",
        "kind": "event",
        "unit": "millisecond",
        "aggs": [
          "avg",
          "max",
          "min",
          "count"
        ],
        "description": "How long the parser took to read one email, in milliseconds."
      },
      {
        "name": "fields_extracted",
        "kind": "event",
        "unit": "field",
        "aggs": [
          "sum",
          "count",
          "avg",
          "min"
        ],
        "description": "Fields the parser pulled out of one email. A low value can mean the template no longer matches."
      },
      {
        "name": "status",
        "kind": "event",
        "aggs": [
          "count",
          "count_distinct"
        ],
        "noAgg": true,
        "description": "Parsed or failed. Count it alongside a condition to alert on emails the parser could not read."
      }
    ]
  },
  "zoho_flow": {
    "label": "Actions by Zoho Flow",
    "recordNoun": "flow actions",
    "blank": false,
    "properties": [
      {
        "name": "task_limit",
        "kind": "constant",
        "unit": "task",
        "aggs": [],
        "description": "Flow tasks included in your plan for the current cycle."
      },
      {
        "name": "tasks_used_this_cycle",
        "kind": "total",
        "unit": "task",
        "aggs": [
          "max"
        ],
        "limits": [
          "task_limit"
        ],
        "description": "Tasks consumed so far this cycle. Resets when the cycle rolls over."
      },
      {
        "name": "tasks_per_run",
        "kind": "event",
        "unit": "task",
        "aggs": [
          "sum",
          "count",
          "avg",
          "max",
          "min"
        ],
        "description": "Tasks consumed by one flow run. Flows with many steps cost more."
      },
      {
        "name": "execution_time",
        "kind": "event",
        "unit": "millisecond",
        "aggs": [
          "avg",
          "max",
          "min",
          "count"
        ],
        "noAgg": true,
        "description": "How long one flow action took, in milliseconds."
      },
      {
        "name": "status",
        "kind": "event",
        "aggs": [
          "count",
          "count_distinct"
        ],
        "noAgg": true,
        "description": "Succeeded or failed. Count it alongside a condition to alert on failing flows."
      }
    ]
  },
  "circuits": {
    "label": "Circuits",
    "recordNoun": "circuit runs",
    "blank": false,
    "properties": [
      {
        "name": "circuit_limit",
        "kind": "constant",
        "unit": "execution",
        "aggs": [],
        "description": "Circuit executions included in your plan for the current cycle."
      },
      {
        "name": "circuit_runs_this_cycle",
        "kind": "total",
        "unit": "execution",
        "aggs": [
          "max"
        ],
        "limits": [
          "circuit_limit"
        ],
        "description": "Circuit executions so far this cycle. Resets when the cycle rolls over."
      },
      {
        "name": "steps_per_run",
        "kind": "event",
        "unit": "step",
        "aggs": [
          "sum",
          "count",
          "avg",
          "max",
          "min"
        ],
        "description": "Steps one circuit run went through."
      },
      {
        "name": "execution_time",
        "kind": "event",
        "unit": "millisecond",
        "aggs": [
          "avg",
          "max",
          "min",
          "count"
        ],
        "noAgg": true,
        "description": "How long one circuit run took, in milliseconds."
      },
      {
        "name": "status",
        "kind": "event",
        "aggs": [
          "count",
          "count_distinct"
        ],
        "noAgg": true,
        "description": "Completed, failed or timed out. Count it alongside a condition to alert on failing circuits."
      }
    ]
  },
  "mail_merge": {
    "label": "Mail merge email",
    "recordNoun": "merges",
    "blank": false,
    "properties": [
      {
        "name": "merge_limit",
        "kind": "constant",
        "unit": "merge",
        "aggs": [],
        "description": "Mail merges your org can run per day. The limit is the same in every edition, and extra merges can be purchased."
      },
      {
        "name": "merges_used_today",
        "kind": "total",
        "unit": "merge",
        "aggs": [
          "max"
        ],
        "limits": [
          "merge_limit"
        ],
        "description": "Merges run so far today. Both the mail merge action and print preview from a mail merge template count."
      }
    ]
  },
  "export": {
    "label": "Export",
    "recordNoun": "exports",
    "blank": false,
    "properties": [
      {
        "name": "export_limit",
        "kind": "constant",
        "unit": "export",
        "aggs": [],
        "description": "Exports your org can start per day. It depends on the edition, from 10 on Free up to 1,000 on Ultimate."
      },
      {
        "name": "exports_today",
        "kind": "total",
        "unit": "export",
        "aggs": [
          "max"
        ],
        "limits": [
          "export_limit"
        ],
        "description": "Exports started so far today. Resets daily."
      }
    ]
  },
  "email_storage": {
    "label": "Email storage",
    "recordNoun": "emails",
    "blank": false,
    "properties": [
      {
        "name": "email_storage_limit",
        "kind": "constant",
        "unit": "gigabyte",
        "aggs": [],
        "description": "Email storage for the org: 5 GB per user, up to 500 GB, pooled across all users. It is separate from Zoho Mail storage."
      },
      {
        "name": "email_storage_used_total",
        "kind": "total",
        "unit": "gigabyte",
        "aggs": [
          "max"
        ],
        "limits": [
          "email_storage_limit"
        ],
        "description": "Storage used by emails kept in CRM, content and attachments, across all users. It goes down when emails are deleted."
      },
      {
        "name": "email_size",
        "kind": "event",
        "unit": "megabyte",
        "aggs": [
          "avg",
          "max",
          "min",
          "sum",
          "count"
        ],
        "description": "Size of one stored email, including its attachments."
      }
    ]
  },
  "data_backup": {
    "label": "Data backup",
    "recordNoun": "backups",
    "blank": false,
    "properties": [
      {
        "name": "backup_limit",
        "kind": "constant",
        "unit": "backup",
        "aggs": [],
        "description": "Free backups per month: 2 on Standard, Professional and Enterprise, and 4 on Ultimate. Extra backups are paid."
      },
      {
        "name": "backups_used_this_month",
        "kind": "total",
        "unit": "backup",
        "aggs": [
          "max"
        ],
        "limits": [
          "backup_limit"
        ],
        "description": "Backups taken so far this month. Resets each month."
      }
    ]
  },
  "data_enrichment": {
    "label": "Data enrichment",
    "recordNoun": "enrichments",
    "blank": false,
    "properties": [
      {
        "name": "enrichment_limit",
        "kind": "constant",
        "unit": "record",
        "aggs": [],
        "description": "Records Zia can enrich per month: 500 per user license on Enterprise and 2,000 on Ultimate, up to 50,000 records."
      },
      {
        "name": "records_enriched_this_month",
        "kind": "total",
        "unit": "record",
        "aggs": [
          "max"
        ],
        "limits": [
          "enrichment_limit"
        ],
        "description": "Records enriched so far this month, across all modules. Resets each month."
      }
    ]
  },
  "kiosk": {
    "label": "Kiosk",
    "recordNoun": "kiosks",
    "blank": true,
    "properties": [
      {
        "name": "kiosk_limit",
        "kind": "constant",
        "unit": "kiosk",
        "aggs": [],
        "description": "Kiosks your org can create: 2 on Standard, 7 on Professional, 25 on Enterprise, and 50 on Ultimate, CRM Plus and Zoho One."
      },
      {
        "name": "kiosk_component_limit",
        "kind": "constant",
        "unit": "component",
        "aggs": [],
        "description": "Components allowed in a single kiosk."
      },
      {
        "name": "kiosks_created",
        "kind": "total",
        "unit": "kiosk",
        "aggs": [
          "max"
        ],
        "limits": [
          "kiosk_limit"
        ],
        "description": "Kiosks created so far. It goes down when a kiosk is deleted."
      },
      {
        "name": "components_per_kiosk",
        "kind": "event",
        "unit": "component",
        "aggs": [
          "max",
          "min",
          "avg",
          "count"
        ],
        "limits": [
          "kiosk_component_limit"
        ],
        "description": "Components in one kiosk when it is saved."
      }
    ]
  }
};

export const DEMO_LIMITS: Record<string, number> = {
  "free_limit": 25000,
  "paid_limit": 100000,
  "overall_limit": 125000,
  "execution_limit": 100000,
  "storage_limit": 500,
  "email_limit": 10000,
  "webhook_limit": 50000,
  "file_storage_limit": 200,
  "parser_limit": 5000,
  "task_limit": 20000,
  "circuit_limit": 10000,
  "merge_limit": 1000,
  "export_limit": 500,
  "email_storage_limit": 50,
  "backup_limit": 4,
  "enrichment_limit": 50000,
  "kiosk_limit": 25,
  "kiosk_component_limit": 50
};

export const UNIT_LABELS: Record<string, string> = {
  "gigabyte": "GB",
  "megabyte": "MB",
  "millisecond": "ms",
  "credit": "credits",
  "execution": "executions",
  "email": "emails",
  "recipient": "recipients",
  "bounce": "bounces",
  "call": "calls",
  "retry": "retries",
  "task": "tasks",
  "step": "steps",
  "field": "fields",
  "merge": "merges",
  "export": "exports",
  "record": "records",
  "backup": "backups",
  "kiosk": "kiosks",
  "component": "components"
};
