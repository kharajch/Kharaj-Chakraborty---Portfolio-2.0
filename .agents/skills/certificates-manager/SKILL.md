---
name: certificates-manager
description: add, update and manage new certifications
---

# Certificates Manager

Follow these instructions to add, update, and manage certifications in this workspace:

1. **Analyze Certificate Files**:
   - Inspect the `public/certificates/` directory recursively to catalog all certificate files (PDFs, PNGs, etc.).
   - Read the metadata (such as credential links, issuer names, dates, and certificate IDs) from any new certificates. Check files like `public/certificates/Link To Certifications.txt` for external links and fallbacks.

2. **Update Certifications Data**:
   - Update `src/data/certifications.js` with the new records.
   - For Google Skill Badges that do not have dedicated certificate files, use `/images/google skills.png` as the fallback image path.

3. **Sort by Impactfulness**:
   - Arrange the certificates in descending order of impactfulness.
   - Top tier should consist of major specializations/professional certificates (e.g., from Google or Microsoft).
   - Mid tier should include deep-dive technical courses (e.g., Deep Learning, MLOps, DevOps, Machine Learning, Data Science).
   - Lower tiers should include applied Gen AI/prompt engineering courses and repository management/git/github tool certifications.
   - Ground tiers should include basic introduction badges (such as Copilot basics, responsible AI, or workspace tool guides).

4. **Verify and Test**:
   - Build the site using `npm run build` to verify there are no syntax or build errors.
   - Run the E2E test suite using `npm test` to ensure page navigation, filters, and rendering pass successfully.
