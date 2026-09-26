# 🎓 EduGrade AI™ — Student Assessment & Internal Marks Portal
> **Production-Grade Continuous Internal Assessment (CIA), Grade Prediction, and Analytics Platform**

EduGrade AI is a complete, portfolio-ready web application engineered for colleges and universities to manage continuous internal marks, track student performance trajectories, perform automated weightage-based calculations, and forecast semester exam outcomes using predictive analytics.

---

## 🌟 Key Features & Capabilities

### 1. 🎓 Student Dashboard
- **Personalized Academic Portal**: Real-time overview of Cumulative CGPA, Sem 6 GPA, average internal score, and attendance percentage.
- **Continuous Internal Assessment (CIA) Breakdown**:
  - Unit Test 1, Unit Test 2, Unit Test 3 (out of 25)
  - **Automated Best-2-of-3 Test Calculation**
  - Assignment evaluations (scaled to 25%)
  - Laboratory & practical records (scaled to 20%)
  - Viva-Voce / Technical Quiz (scaled to 15%)
  - Letter grade mapping (`O`, `A+`, `A`, `B+`, `B`, `RA`)
- **Interactive Visualizations (Native HTML5 Canvas)**:
  - **Subject vs Class Average Bar Chart**: Benchmarks student internal scores directly against class peers.
  - **Semester GPA Progression Area Chart**: Visualizes performance velocity from Semester 1 to Semester 6.
- **Smart Alerts & Notification Bar**: Automatic warning banners when attendance drops below the 75% threshold or internal marks drop below 50%.
- **Official Transcript Print View**: One-click printable Grade Sheet with institutional header, university accreditation seal, and signature blocks.
- **Data Export**: Export student marks directly to formatted CSV.

---

### 2. 👨‍🏫 Faculty Panel
- **Subject-Specific Scoping**: Instructors only see and manage students enrolled in their assigned subjects.
- **Marks Ledger**:
  - Live marks editor with instant preview of calculated best-of-2 average and final weighted score.
- **Bulk CSV Upload & Template**:
  - Download standardized marks template (`EduGrade_Sample_Marks_Template.csv`).
  - Upload CSV spreadsheet or paste raw CSV text with instant client-side validation.
- **Automated Grade Distribution**: Real-time distribution chart across grades (O, A+, A, B+, B, RA).
- **Automated Academic Intervention Trigger**:
  - Identifies at-risk students (< 50% internal or < 75% attendance).
  - Triggers simulated multi-channel dispatch (Email, SMS to parents, Portal alert).

---

### 3. 🏛️ Admin & Academic Council Panel
- **Department-Wide Analytics**: Real-time institutional pass rate, department averages, enrolled strength, and faculty headcounts.
- **Student Management (CRUD)**: Register new students, update records, and remove alumni.
- **Faculty Directory (CRUD)**: Manage instructors, designate departments, and assign curriculum courses.
- **Curriculum Subject Management**: Configure subjects, department mapping, semesters, and credits.
- **Dynamic Weightage Rules**: Configurable institutional formula percentages (e.g. 40% Tests, 25% Assignments, 20% Lab, 15% Viva).
- **Master Examination Tabulation**: Complete department-wide marks ledger with CSV export.

---

### 4. 🤖 AI Exam Performance Prediction Model
- Multi-factor regression model factoring:
  - Continuous Internal Assessment (62% weight)
  - Attendance consistency (23% weight)
  - Assignment submission rate (10% weight)
  - Assessment momentum / velocity between UT1 and UT2
- Computes:
  - Forecasted Final Exam Score (0–100)
  - Model confidence percentage (e.g. 91%)
  - Risk categorization: `Safe / Distinction Track`, `Moderate / First Class`, `Borderline / Needs Mentorship`, `High Risk of Arrear (RA)`
  - Actionable diagnostic recommendations tailored to individual student weaknesses.

---

## ⚡ Instant Portfolio Live Switcher (Top Ribbon)
The application includes a persistent top switcher that lets reviewers test all roles without needing multiple tabs or credential re-entry:
1. **🎓 Student View (Karthik Raman)** — High-performing student (CGPA: 8.85, Att: 92%).
2. **⚠️ At-Risk Student (Siddharth Menon)** — Borderline student (CGPA: 5.35, Att: 66%) showing danger alerts & remedial advice.
3. **👨‍🏫 Faculty Panel (Dr. Rajesh Sharma)** — Teaching professor with marks entry and bulk CSV upload.
4. **🏛️ Admin Portal (Dr. S. Ramanathan, Dean)** — Master institutional oversight and curriculum configuration.
5. **🔄 Reset DB** — Restores the original demo dataset at any time.

---

## 🚀 How to Run Locally

### Option 1: Double-Click / Direct Open
Simply open `index.html` in any modern web browser (Chrome, Firefox, Safari, Edge). Zero installation required!

### Option 2: Lightweight Python Server
```bash
python3 server.py
# Server opens at http://localhost:8080
```

---

## 🌐 How to Host Live on Your Portfolio (100% Free)

### Deploy to GitHub Pages:
1. Create a new GitHub repository (e.g. `student-marks-portal`).
2. Push the files in this directory (`index.html`, `styles.css`, `app.js`, `sample_marks_template.csv`, `README.md`).
3. In GitHub repo settings, go to **Pages** → Source: **Deploy from a branch** → Branch: `main` / `root` → **Save**.
4. Your live URL will be ready at: `https://<your-username>.github.io/student-marks-portal/`

### Deploy to Vercel / Netlify:
- Drag and drop this folder directly into [Netlify Drop](https://app.netlify.com/drop) or import from GitHub on Vercel. Deployment completes in 5 seconds!

---

## 📂 File Structure

```text
student-marks-portal/
├── index.html                  # Main responsive UI & semantic structure
├── styles.css                  # Custom design system & print transcript CSS
├── app.js                      # Calculation engine, AI model, Canvas charts, RBAC
├── server.py                   # Zero-dependency Python 3 local server
├── sample_marks_template.csv   # Standardized CSV template for bulk marks upload
└── README.md                   # Full documentation & deployment guide
```
