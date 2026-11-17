"""Public proof of concept. Fictional job data only."""
import json
from pathlib import Path
DATA=Path(__file__).with_name("jobs.json")
SKILLS={"crm","customer support","documentation","excel","reporting","operations","reconciliation","orders"}
def assess(job):
    if job["senior"] or job["clinical"]:
        return 0,"Senior or specialist qualification mismatch"
    overlap=SKILLS.intersection(job["skills"])
    score=min(95,40+15*len(overlap))
    return score,("Spain-remote eligible" if job["remote_spain"] else "Not Spain-remote eligible")
if __name__=="__main__":
    for job in json.loads(DATA.read_text(encoding="utf-8")):
        score,note=assess(job)
        print(f"{score:3}/100 | {job['title']:<35} | {note}")
