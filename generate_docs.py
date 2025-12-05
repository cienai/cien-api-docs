import csv
from collections import defaultdict
from pathlib import Path

OUTPUT_DIR = Path("docs")
OUTPUT_DIR.mkdir(exist_ok=True)

def clean(val):
    if not val:
        return "—"

    return (
        val.replace("&", "&amp;")
           .replace("<", "&lt;")
           .replace(">", "&gt;")
           .replace("{", "\\{")
           .replace("}", "\\}")
           .replace("|", "\\|")
           .replace("\n", " ")
           .strip()
    )

entities = defaultdict(list)

with open("metadata_fields.csv", newline="", encoding="utf-8-sig") as f:
    reader = csv.DictReader(f)
    for row in reader:
        entity = row["entity"].strip().lower()
        entities[entity].append(row)

# wipe old docs
for file in OUTPUT_DIR.glob("*.md"):
    if file.name != "intro.md":
        file.unlink()

for entity, fields in sorted(entities.items()):
    with open(OUTPUT_DIR / f"{entity}.md", "w", encoding="utf-8") as md:

        md.write(f"# `{entity}` Entity\n\n")

        md.write("| Field | Display Name | Type | Length | Description | Deprecated | Salesforce | MS Dynamics | Power BI |\n")
        md.write("|-------|----------------|------|--------|----------------|-------------|-------------|-------------|-----------|\n")

        for f in fields:
            deprecated = "⚠️ Yes" if f["deprecated"].strip().upper() == "TRUE" else "No"

            field_len = clean(f["field_length"])
            sfdc = clean(f["field_name_sfdc"])
            msdyn = clean(f["field_name_msdyn"])

            powerbi_raw = clean(f["power bi"])
            powerbi = f"`{powerbi_raw}`" if powerbi_raw != "—" else "—"

            md.write(
                f"| `{clean(f['field_name'])}`"
                f"| {clean(f['display_name'])}"
                f"| {clean(f['data_type'])}"
                f"| {field_len}"
                f"| {clean(f['description'])}"
                f"| {deprecated}"
                f"| {sfdc}"
                f"| {msdyn}"
                f"| {powerbi} |\n"
            )

print(f"✅ Generated {len(entities)} entity docs.")
