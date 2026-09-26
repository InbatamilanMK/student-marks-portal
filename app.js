/**
 * EduGrade AI - Student Assessment & Internal Marks Portal
 * Core Application Engine, Data Store, Canvas Visualizations, and RBAC
 */

// ==========================================
// 1. DEFAULT SEED DATABASE
// ==========================================
const DEFAULT_DATABASE = {
  departments: [
    { id: "CSE", name: "Computer Science & Engineering" },
    { id: "IT", name: "Information Technology" },
    { id: "ECE", name: "Electronics & Communication Engineering" }
  ],
  weightages: {
    tests: 40,        // 40% from best 2 unit tests
    assignments: 25,  // 25% from assignments
    lab: 20,          // 20% from lab experiments/records
    viva: 15          // 15% from viva voce / quizzes
  },
  subjects: [
    { code: "CS601", name: "Advanced Data Structures & Algorithms", dept: "CSE", sem: 6, credits: 4, facultyId: "FAC01" },
    { code: "CS602", name: "Cloud Computing & Distributed Systems", dept: "CSE", sem: 6, credits: 3, facultyId: "FAC02" },
    { code: "CS603", name: "Machine Learning & Predictive Analytics", dept: "CSE", sem: 6, credits: 4, facultyId: "FAC01" },
    { code: "CS604", name: "Full-Stack Web Engineering", dept: "CSE", sem: 6, credits: 3, facultyId: "FAC02" },
    { code: "IT601", name: "Cyber Security & Cryptography", dept: "IT", sem: 6, credits: 4, facultyId: "FAC03" },
    { code: "EC601", name: "Digital Signal Processing", dept: "ECE", sem: 6, credits: 4, facultyId: "FAC04" }
  ],
  faculty: [
    { id: "FAC01", name: "Dr. Rajesh Sharma", email: "prof.sharma@college.edu", dept: "CSE", designation: "Associate Professor", subjects: ["CS601", "CS603"] },
    { id: "FAC02", name: "Dr. Anita Desai", email: "prof.anita@college.edu", dept: "CSE", designation: "Assistant Professor", subjects: ["CS602", "CS604"] },
    { id: "FAC03", name: "Prof. Arvind Swaminathan", email: "prof.arvind@college.edu", dept: "IT", designation: "Professor & HOD", subjects: ["IT601"] },
    { id: "FAC04", name: "Dr. Malini Narayanan", email: "prof.malini@college.edu", dept: "ECE", designation: "Associate Professor", subjects: ["EC601"] }
  ],
  students: [
    { rollNo: "CS202401", name: "Karthik Raman", email: "student.karthik@college.edu", dept: "CSE", sem: 6, cgpa: 8.85, attendance: 92, phone: "+91 98765 43210" },
    { rollNo: "CS202402", name: "Priya Sundaram", email: "priya@college.edu", dept: "CSE", sem: 6, cgpa: 9.42, attendance: 96, phone: "+91 98765 43211" },
    { rollNo: "CS202403", name: "Arun Kumar", email: "arun@college.edu", dept: "CSE", sem: 6, cgpa: 6.20, attendance: 72, phone: "+91 98765 43212" },
    { rollNo: "CS202404", name: "Divya Balan", email: "divya@college.edu", dept: "CSE", sem: 6, cgpa: 8.15, attendance: 88, phone: "+91 98765 43213" },
    { rollNo: "CS202405", name: "Siddharth Menon", email: "siddharth@college.edu", dept: "CSE", sem: 6, cgpa: 5.35, attendance: 66, phone: "+91 98765 43214" },
    { rollNo: "CS202406", name: "Ananya Roy", email: "ananya@college.edu", dept: "CSE", sem: 6, cgpa: 9.18, attendance: 95, phone: "+91 98765 43215" },
    { rollNo: "CS202407", name: "Vigneshwaran K", email: "vignesh@college.edu", dept: "CSE", sem: 6, cgpa: 7.45, attendance: 82, phone: "+91 98765 43216" },
    { rollNo: "CS202408", name: "Sneha Patel", email: "sneha@college.edu", dept: "CSE", sem: 6, cgpa: 8.65, attendance: 89, phone: "+91 98765 43217" }
  ],
  marks: [
    // CS601 Marks
    { rollNo: "CS202401", subjectCode: "CS601", ut1: 22, ut2: 24, ut3: 20, assignment: 19, lab: 18, viva: 9 },
    { rollNo: "CS202402", subjectCode: "CS601", ut1: 24, ut2: 25, ut3: 23, assignment: 20, lab: 19, viva: 10 },
    { rollNo: "CS202403", subjectCode: "CS601", ut1: 13, ut2: 15, ut3: 14, assignment: 14, lab: 15, viva: 6 },
    { rollNo: "CS202404", subjectCode: "CS601", ut1: 19, ut2: 21, ut3: 18, assignment: 17, lab: 17, viva: 8 },
    { rollNo: "CS202405", subjectCode: "CS601", ut1: 10, ut2: 12, ut3: 11, assignment: 11, lab: 12, viva: 5 },
    { rollNo: "CS202406", subjectCode: "CS601", ut1: 23, ut2: 24, ut3: 25, assignment: 19, lab: 19, viva: 9 },
    { rollNo: "CS202407", subjectCode: "CS601", ut1: 17, ut2: 18, ut3: 16, assignment: 16, lab: 15, viva: 7 },
    { rollNo: "CS202408", subjectCode: "CS601", ut1: 21, ut2: 22, ut3: 21, assignment: 18, lab: 18, viva: 9 },

    // CS602 Marks
    { rollNo: "CS202401", subjectCode: "CS602", ut1: 21, ut2: 23, ut3: 22, assignment: 18, lab: 19, viva: 8 },
    { rollNo: "CS202402", subjectCode: "CS602", ut1: 25, ut2: 24, ut3: 24, assignment: 20, lab: 20, viva: 10 },
    { rollNo: "CS202403", subjectCode: "CS602", ut1: 12, ut2: 14, ut3: 13, assignment: 13, lab: 14, viva: 5 },
    { rollNo: "CS202404", subjectCode: "CS602", ut1: 18, ut2: 20, ut3: 19, assignment: 16, lab: 16, viva: 8 },
    { rollNo: "CS202405", subjectCode: "CS602", ut1: 9,  ut2: 11, ut3: 10, assignment: 12, lab: 10, viva: 4 },
    { rollNo: "CS202406", subjectCode: "CS602", ut1: 24, ut2: 23, ut3: 24, assignment: 19, lab: 19, viva: 9 },
    { rollNo: "CS202407", subjectCode: "CS602", ut1: 16, ut2: 17, ut3: 18, assignment: 15, lab: 16, viva: 7 },
    { rollNo: "CS202408", subjectCode: "CS602", ut1: 20, ut2: 21, ut3: 22, assignment: 18, lab: 17, viva: 8 },

    // CS603 Marks
    { rollNo: "CS202401", subjectCode: "CS603", ut1: 23, ut2: 22, ut3: 24, assignment: 19, lab: 19, viva: 9 },
    { rollNo: "CS202402", subjectCode: "CS603", ut1: 25, ut2: 25, ut3: 24, assignment: 20, lab: 20, viva: 10 },
    { rollNo: "CS202403", subjectCode: "CS603", ut1: 14, ut2: 13, ut3: 15, assignment: 15, lab: 13, viva: 6 },
    { rollNo: "CS202404", subjectCode: "CS603", ut1: 20, ut2: 19, ut3: 21, assignment: 17, lab: 18, viva: 8 },
    { rollNo: "CS202405", subjectCode: "CS603", ut1: 11, ut2: 10, ut3: 12, assignment: 10, lab: 11, viva: 5 },
    { rollNo: "CS202406", subjectCode: "CS603", ut1: 22, ut2: 24, ut3: 23, assignment: 19, lab: 18, viva: 9 },
    { rollNo: "CS202407", subjectCode: "CS603", ut1: 18, ut2: 17, ut3: 19, assignment: 16, lab: 16, viva: 7 },
    { rollNo: "CS202408", subjectCode: "CS603", ut1: 21, ut2: 22, ut3: 23, assignment: 18, lab: 19, viva: 9 },

    // CS604 Marks
    { rollNo: "CS202401", subjectCode: "CS604", ut1: 24, ut2: 24, ut3: 23, assignment: 20, lab: 19, viva: 9 },
    { rollNo: "CS202402", subjectCode: "CS604", ut1: 25, ut2: 25, ut3: 25, assignment: 20, lab: 20, viva: 10 },
    { rollNo: "CS202403", subjectCode: "CS604", ut1: 15, ut2: 16, ut3: 14, assignment: 15, lab: 16, viva: 6 },
    { rollNo: "CS202404", subjectCode: "CS604", ut1: 21, ut2: 21, ut3: 20, assignment: 18, lab: 18, viva: 8 },
    { rollNo: "CS202405", subjectCode: "CS604", ut1: 12, ut2: 13, ut3: 12, assignment: 13, lab: 12, viva: 5 },
    { rollNo: "CS202406", subjectCode: "CS604", ut1: 24, ut2: 25, ut3: 24, assignment: 19, lab: 19, viva: 10 },
    { rollNo: "CS202407", subjectCode: "CS604", ut1: 19, ut2: 18, ut3: 17, assignment: 17, lab: 16, viva: 7 },
    { rollNo: "CS202408", subjectCode: "CS604", ut1: 22, ut2: 23, ut3: 21, assignment: 19, lab: 18, viva: 9 }
  ],
  notifications: [
    { id: 1, recipient: "CS202405", type: "CRITICAL", title: "Low Attendance & Internal Warning", message: "Attendance is 66% (Required: 75%). Internal mark average is 48/100 in CS602.", time: "1 hour ago" },
    { id: 2, recipient: "CS202403", type: "WARNING", title: "Attendance Condonation Notice", message: "Attendance is currently 72%. Please submit medical certificate or attend remedial lectures.", time: "Yesterday" },
    { id: 3, recipient: "ALL", type: "REMINDER", title: "Assignment #3 Due Date", message: "Machine Learning Lab & Assignment submission due on Friday 5:00 PM.", time: "2 days ago" }
  ]
};

// ==========================================
// 2. STATE MANAGEMENT & STORAGE
// ==========================================
const DB_STORAGE_KEY = "edugrade_portal_db_v2";

function loadDatabase() {
  const saved = localStorage.getItem(DB_STORAGE_KEY);
  if (saved) {
    try {
      return JSON.parse(saved);
    } catch (e) {
      console.warn("Storage parse error, resetting to default", e);
    }
  }
  saveDatabase(DEFAULT_DATABASE);
  return JSON.parse(JSON.stringify(DEFAULT_DATABASE));
}

function saveDatabase(data) {
  localStorage.setItem(DB_STORAGE_KEY, JSON.stringify(data));
}

let db = loadDatabase();

// Current Session State
let currentUser = {
  role: "STUDENT", // 'STUDENT' | 'FACULTY' | 'ADMIN'
  id: "CS202401",  // or FAC01 or ADMIN
  name: "Karthik Raman",
  email: "student.karthik@college.edu",
  dept: "CSE"
};

// ==========================================
// 3. CALCULATION ENGINE
// ==========================================
/**
 * Calculates Best 2 of 3 Unit Tests average
 */
function calculateBestTwoAverage(ut1, ut2, ut3) {
  const scores = [Number(ut1) || 0, Number(ut2) || 0, Number(ut3) || 0].sort((a, b) => b - a);
  const bestTwo = (scores[0] + scores[1]) / 2;
  return Number(bestTwo.toFixed(1));
}

/**
 * Calculates Weighted Internal Score (out of 100)
 * Tests: 40% (Best 2 avg out of 25 -> scaled to 40)
 * Assignments: 25% (Assignment out of 20 -> scaled to 25)
 * Lab: 20% (Lab out of 20 -> scaled to 20)
 * Viva: 15% (Viva out of 10 -> scaled to 15)
 */
function computeDetailedInternalMark(record, weightages) {
  const w = weightages || db.weightages;
  const best2 = calculateBestTwoAverage(record.ut1, record.ut2, record.ut3);
  
  const testPart = (best2 / 25) * w.tests;
  const assignPart = ((Number(record.assignment) || 0) / 20) * w.assignments;
  const labPart = ((Number(record.lab) || 0) / 20) * w.lab;
  const vivaPart = ((Number(record.viva) || 0) / 10) * w.viva;

  const total = testPart + assignPart + labPart + vivaPart;
  const totalRounded = Math.min(100, Math.max(0, Math.round(total * 10) / 10));

  let grade = "RA";
  let gradePoint = 0;
  let gradeBadge = "badge-danger";

  if (totalRounded >= 90) {
    grade = "O";
    gradePoint = 10;
    gradeBadge = "badge-success";
  } else if (totalRounded >= 80) {
    grade = "A+";
    gradePoint = 9;
    gradeBadge = "badge-success";
  } else if (totalRounded >= 70) {
    grade = "A";
    gradePoint = 8;
    gradeBadge = "badge-info";
  } else if (totalRounded >= 60) {
    grade = "B+";
    gradePoint = 7;
    gradeBadge = "badge-warning";
  } else if (totalRounded >= 50) {
    grade = "B";
    gradePoint = 6;
    gradeBadge = "badge-warning";
  } else {
    grade = "RA";
    gradePoint = 0;
    gradeBadge = "badge-danger";
  }

  return {
    best2,
    testPart: Number(testPart.toFixed(1)),
    assignPart: Number(assignPart.toFixed(1)),
    labPart: Number(labPart.toFixed(1)),
    vivaPart: Number(vivaPart.toFixed(1)),
    total: totalRounded,
    grade,
    gradePoint,
    gradeBadge
  };
}

/**
 * Computes average internal marks for a specific subject across all students
 */
function getSubjectClassAverage(subjectCode) {
  const records = db.marks.filter(m => m.subjectCode === subjectCode);
  if (records.length === 0) return 0;
  const sum = records.reduce((acc, r) => acc + computeDetailedInternalMark(r).total, 0);
  return Number((sum / records.length).toFixed(1));
}

// ==========================================
// 4. AI EXAM PREDICTION ALGORITHM
// ==========================================
function predictFinalExamPerformance(student, marksList) {
  if (!marksList || marksList.length === 0) {
    return {
      predictedMark: 75,
      confidence: 85,
      riskLevel: "Moderate",
      riskClass: "badge-warning",
      trend: "Neutral",
      insights: ["Maintain regular attendance and submit remaining lab assessments."]
    };
  }

  let totalInternals = 0;
  let testMomentum = 0; // compares UT2 vs UT1
  let assignmentRatio = 0;

  marksList.forEach(m => {
    const calc = computeDetailedInternalMark(m);
    totalInternals += calc.total;
    testMomentum += (m.ut2 - m.ut1);
    assignmentRatio += (m.assignment / 20);
  });

  const avgInternal = totalInternals / marksList.length;
  const avgMomentum = testMomentum / marksList.length;
  const avgAssignPct = (assignmentRatio / marksList.length) * 100;
  const attendance = student.attendance || 85;

  // Multi-factor formula:
  // 60% internal marks weight + 25% attendance weight + 10% assignment completion + 5% momentum
  let predicted = (avgInternal * 0.62) + (attendance * 0.23) + ((avgAssignPct) * 0.10) + (avgMomentum * 1.5);
  predicted = Math.min(99, Math.max(35, Math.round(predicted)));

  let confidence = Math.min(96, Math.max(78, Math.round(75 + (attendance * 0.15) + (marksList.length * 2))));

  let riskLevel = "Safe / Distinction Track";
  let riskClass = "badge-success";
  const insights = [];

  if (predicted >= 85) {
    riskLevel = "Outstanding (Grade O / A+)";
    riskClass = "badge-success";
    insights.push("Student demonstrates strong conceptual mastery across unit tests and labs.");
    insights.push("High probability of securing Top 5 Departmental Honors in University exams.");
  } else if (predicted >= 70) {
    riskLevel = "Moderate / First Class";
    riskClass = "badge-info";
    insights.push("Good foundation. Focus on Unit 2 test areas where slight mark drops were noted.");
    insights.push("Improving assignment depth can easily push final score past 80%.");
  } else if (predicted >= 55) {
    riskLevel = "Borderline / Needs Mentorship";
    riskClass = "badge-warning";
    insights.push("Warning: Unit test consistency is fluctuating.");
    if (attendance < 75) {
      insights.push("Critical: Attendance is below 75% threshold. Remedial attendance required.");
    } else {
      insights.push("Practice previous 5-year university question banks to strengthen core derivations.");
    }
  } else {
    riskLevel = "High Risk of Arrear (RA)";
    riskClass = "badge-danger";
    insights.push("Immediate academic intervention recommended. Current trajectory points to Re-appear.");
    insights.push("Schedule mandatory 1-on-1 faculty counseling and re-test evaluation.");
  }

  return {
    avgInternal: Number(avgInternal.toFixed(1)),
    predictedMark: predicted,
    confidence,
    riskLevel,
    riskClass,
    insights
  };
}

// ==========================================
// 5. CANVAS DATA VISUALIZATION ENGINE
// ==========================================
const ChartEngine = {
  // 1. Grouped Bar Chart (Subject Score vs Class Average)
  renderSubjectComparison(canvasId, labels, studentScores, classAverages) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const dpr = window.devicePixelRatio || 1;
    const width = canvas.parentElement.clientWidth || 500;
    const height = 260;

    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = width + "px";
    canvas.style.height = height + "px";
    ctx.scale(dpr, dpr);

    ctx.clearRect(0, 0, width, height);

    const padLeft = 45;
    const padRight = 20;
    const padTop = 30;
    const padBottom = 45;
    const chartW = width - padLeft - padRight;
    const chartH = height - padTop - padBottom;

    // Draw horizontal grid lines (0, 25, 50, 75, 100)
    ctx.strokeStyle = "#e2e8f0";
    ctx.lineWidth = 1;
    ctx.font = "11px system-ui, sans-serif";
    ctx.fillStyle = "#94a3b8";
    ctx.textAlign = "right";

    const steps = [0, 25, 50, 75, 100];
    steps.forEach(val => {
      const y = padTop + chartH - (val / 100) * chartH;
      ctx.beginPath();
      ctx.moveTo(padLeft, y);
      ctx.lineTo(width - padRight, y);
      ctx.stroke();
      ctx.fillText(val, padLeft - 8, y + 4);
    });

    if (labels.length === 0) {
      ctx.textAlign = "center";
      ctx.fillText("No mark records to display", width / 2, height / 2);
      return;
    }

    const groupWidth = chartW / labels.length;
    const barWidth = Math.min(24, groupWidth * 0.32);

    labels.forEach((label, idx) => {
      const centerX = padLeft + idx * groupWidth + groupWidth / 2;
      const sScore = studentScores[idx] || 0;
      const cScore = classAverages[idx] || 0;

      const sHeight = (sScore / 100) * chartH;
      const cHeight = (cScore / 100) * chartH;

      // Student bar (Primary indigo gradient)
      const gradStudent = ctx.createLinearGradient(0, padTop + chartH - sHeight, 0, padTop + chartH);
      gradStudent.addColorStop(0, "#4f46e5");
      gradStudent.addColorStop(1, "#818cf8");

      ctx.fillStyle = gradStudent;
      const sX = centerX - barWidth - 2;
      const sY = padTop + chartH - sHeight;
      this.drawRoundedRect(ctx, sX, sY, barWidth, sHeight, 4);

      // Class average bar (Slate/teal)
      const gradClass = ctx.createLinearGradient(0, padTop + chartH - cHeight, 0, padTop + chartH);
      gradClass.addColorStop(0, "#94a3b8");
      gradClass.addColorStop(1, "#cbd5e1");

      ctx.fillStyle = gradClass;
      const cX = centerX + 2;
      const cY = padTop + chartH - cHeight;
      this.drawRoundedRect(ctx, cX, cY, barWidth, cHeight, 4);

      // Label below
      ctx.fillStyle = "#334155";
      ctx.font = "bold 11px system-ui, sans-serif";
      ctx.textAlign = "center";
      ctx.fillText(label, centerX, height - padBottom + 18);

      // Value label on top of student bar
      ctx.fillStyle = "#4f46e5";
      ctx.font = "bold 10px system-ui, sans-serif";
      ctx.fillText(sScore, sX + barWidth / 2, sY - 4);
    });

    // Legend
    ctx.textAlign = "left";
    ctx.fillStyle = "#4f46e5";
    ctx.fillRect(width - 190, 8, 12, 12);
    ctx.fillStyle = "#1e293b";
    ctx.font = "11px system-ui, sans-serif";
    ctx.fillText("Your Mark", width - 172, 18);

    ctx.fillStyle = "#94a3b8";
    ctx.fillRect(width - 95, 8, 12, 12);
    ctx.fillStyle = "#1e293b";
    ctx.fillText("Class Avg", width - 78, 18);
  },

  // 2. Semester GPA Progression Line/Area Chart
  renderSemesterTrend(canvasId, semesters, gpaValues) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const dpr = window.devicePixelRatio || 1;
    const width = canvas.parentElement.clientWidth || 500;
    const height = 260;

    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = width + "px";
    canvas.style.height = height + "px";
    ctx.scale(dpr, dpr);

    ctx.clearRect(0, 0, width, height);

    const padLeft = 45;
    const padRight = 30;
    const padTop = 30;
    const padBottom = 45;
    const chartW = width - padLeft - padRight;
    const chartH = height - padTop - padBottom;

    // Grid lines for GPA (0 to 10)
    ctx.strokeStyle = "#f1f5f9";
    ctx.lineWidth = 1;
    ctx.font = "11px system-ui, sans-serif";
    ctx.fillStyle = "#94a3b8";
    ctx.textAlign = "right";

    const gpaSteps = [4, 6, 8, 10];
    gpaSteps.forEach(val => {
      const y = padTop + chartH - ((val - 4) / 6) * chartH;
      ctx.beginPath();
      ctx.moveTo(padLeft, y);
      ctx.lineTo(width - padRight, y);
      ctx.stroke();
      ctx.fillText(val.toFixed(1), padLeft - 8, y + 4);
    });

    const stepX = chartW / (semesters.length - 1 || 1);
    const points = semesters.map((sem, idx) => {
      const x = padLeft + idx * stepX;
      const gpa = gpaValues[idx];
      const y = padTop + chartH - ((gpa - 4) / 6) * chartH;
      return { x, y, gpa, label: sem };
    });

    // Area fill
    ctx.beginPath();
    ctx.moveTo(points[0].x, padTop + chartH);
    points.forEach(p => ctx.lineTo(p.x, p.y));
    ctx.lineTo(points[points.length - 1].x, padTop + chartH);
    ctx.closePath();

    const areaGrad = ctx.createLinearGradient(0, padTop, 0, padTop + chartH);
    areaGrad.addColorStop(0, "rgba(16, 185, 129, 0.25)");
    areaGrad.addColorStop(1, "rgba(16, 185, 129, 0.01)");
    ctx.fillStyle = areaGrad;
    ctx.fill();

    // Line
    ctx.beginPath();
    ctx.strokeStyle = "#10b981";
    ctx.lineWidth = 3;
    points.forEach((p, idx) => {
      if (idx === 0) ctx.moveTo(p.x, p.y);
      else ctx.lineTo(p.x, p.y);
    });
    ctx.stroke();

    // Nodes
    points.forEach(p => {
      ctx.beginPath();
      ctx.fillStyle = "#ffffff";
      ctx.strokeStyle = "#10b981";
      ctx.lineWidth = 3;
      ctx.arc(p.x, p.y, 5, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();

      // Tooltip/Value above
      ctx.fillStyle = "#0f172a";
      ctx.font = "bold 11px system-ui, sans-serif";
      ctx.textAlign = "center";
      ctx.fillText(p.gpa.toFixed(2), p.x, p.y - 10);

      // Label below
      ctx.fillStyle = "#64748b";
      ctx.font = "11px system-ui, sans-serif";
      ctx.fillText(p.label, p.x, height - padBottom + 18);
    });
  },

  // 3. Faculty/Admin Grade Distribution Donut/Bar
  renderGradeDistribution(canvasId, grades) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const dpr = window.devicePixelRatio || 1;
    const width = canvas.parentElement.clientWidth || 500;
    const height = 260;

    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = width + "px";
    canvas.style.height = height + "px";
    ctx.scale(dpr, dpr);

    ctx.clearRect(0, 0, width, height);

    const keys = ["O", "A+", "A", "B+", "B", "RA"];
    const colors = ["#10b981", "#3b82f6", "#06b6d4", "#f59e0b", "#fb923c", "#ef4444"];
    const counts = keys.map(k => grades[k] || 0);
    const maxVal = Math.max(...counts, 5);

    const padLeft = 40;
    const padRight = 20;
    const padTop = 30;
    const padBottom = 45;
    const chartW = width - padLeft - padRight;
    const chartH = height - padTop - padBottom;
    const barWidth = Math.min(36, (chartW / keys.length) * 0.6);

    keys.forEach((gradeKey, idx) => {
      const count = counts[idx];
      const centerX = padLeft + idx * (chartW / keys.length) + (chartW / keys.length) / 2;
      const bHeight = (count / maxVal) * chartH;
      const bX = centerX - barWidth / 2;
      const bY = padTop + chartH - bHeight;

      ctx.fillStyle = colors[idx];
      this.drawRoundedRect(ctx, bX, bY, barWidth, bHeight, 4);

      // Count above
      ctx.fillStyle = "#0f172a";
      ctx.font = "bold 12px system-ui, sans-serif";
      ctx.textAlign = "center";
      ctx.fillText(count, centerX, bY - 5);

      // Label below
      ctx.fillStyle = "#334155";
      ctx.font = "bold 12px system-ui, sans-serif";
      ctx.fillText(gradeKey, centerX, height - padBottom + 18);
    });
  },

  drawRoundedRect(ctx, x, y, width, height, radius) {
    if (height < 2) return;
    if (radius > height / 2) radius = height / 2;
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.lineTo(x + width - radius, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
    ctx.lineTo(x + width, y + height);
    ctx.lineTo(x, y + height);
    ctx.lineTo(x, y + radius);
    ctx.quadraticCurveTo(x, y, x + radius, y);
    ctx.closePath();
    ctx.fill();
  }
};

// ==========================================
// 6. VIEW CONTROLLER & UI RENDERING
// ==========================================
const App = {
  init() {
    this.bindGlobalEvents();
    this.renderRoleSwitcher();
    this.renderCurrentView();
  },

  bindGlobalEvents() {
    // Window resize chart repaint
    window.addEventListener("resize", () => {
      if (currentUser.role === "STUDENT") {
        this.renderStudentCharts();
      } else if (currentUser.role === "FACULTY") {
        this.renderFacultyCharts();
      } else if (currentUser.role === "ADMIN") {
        this.renderAdminCharts();
      }
    });
  },

  switchRole(role, specificId) {
    currentUser.role = role;
    if (role === "STUDENT") {
      currentUser.id = specificId || "CS202401";
      const s = db.students.find(st => st.rollNo === currentUser.id);
      currentUser.name = s ? s.name : "Karthik Raman";
      currentUser.email = s ? s.email : "student.karthik@college.edu";
      currentUser.dept = s ? s.dept : "CSE";
    } else if (role === "FACULTY") {
      currentUser.id = specificId || "FAC01";
      const f = db.faculty.find(fac => fac.id === currentUser.id);
      currentUser.name = f ? f.name : "Dr. Rajesh Sharma";
      currentUser.email = f ? f.email : "prof.sharma@college.edu";
      currentUser.dept = f ? f.dept : "CSE";
    } else if (role === "ADMIN") {
      currentUser.id = "ADMIN";
      currentUser.name = "Dr. S. Ramanathan (Dean)";
      currentUser.email = "admin@college.edu";
      currentUser.dept = "Administration";
    }

    this.renderRoleSwitcher();
    this.renderCurrentView();
    this.showToast(`Switched view to ${role} (${currentUser.name})`, "info");
  },

  renderRoleSwitcher() {
    const banner = document.getElementById("demo-role-banner");
    if (!banner) return;

    banner.innerHTML = `
      <div style="display: flex; align-items: center; gap: 0.5rem; flex-wrap: wrap;">
        <strong><span style="display:inline-block; transform: scale(1.1);">⚡</span> Live Role Switcher:</strong>
        <span>Test role-based views instantly without logout</span>
      </div>
      <div class="demo-pills">
        <button class="btn-demo-switch ${currentUser.role === 'STUDENT' ? 'active' : ''}" onclick="App.switchRole('STUDENT', 'CS202401')">
          🎓 Student View (Karthik)
        </button>
        <button class="btn-demo-switch ${currentUser.role === 'STUDENT' && currentUser.id === 'CS202405' ? 'active' : ''}" onclick="App.switchRole('STUDENT', 'CS202405')">
          ⚠️ At-Risk Student (Siddharth)
        </button>
        <button class="btn-demo-switch ${currentUser.role === 'FACULTY' ? 'active' : ''}" onclick="App.switchRole('FACULTY', 'FAC01')">
          👨‍🏫 Faculty Panel (Dr. Sharma)
        </button>
        <button class="btn-demo-switch ${currentUser.role === 'ADMIN' ? 'active' : ''}" onclick="App.switchRole('ADMIN')">
          🏛️ Admin & Dean Portal
        </button>
        <button class="btn-demo-switch" onclick="App.resetDatabaseDefaults()" style="background: rgba(239, 68, 68, 0.3); border-color: rgba(239, 68, 68, 0.5);" title="Restore fresh sample dataset">
          🔄 Reset DB
        </button>
      </div>
    `;

    // Update Nav bar user pill
    const userRoleEl = document.getElementById("nav-role-badge");
    const userNameEl = document.getElementById("nav-user-name");
    const userRoleSubEl = document.getElementById("nav-user-role-sub");
    const userAvatarEl = document.getElementById("nav-avatar");

    if (userRoleEl) {
      userRoleEl.className = `nav-role-badge role-${currentUser.role.toLowerCase()}`;
      userRoleEl.textContent = currentUser.role;
    }
    if (userNameEl) userNameEl.textContent = currentUser.name;
    if (userRoleSubEl) userRoleSubEl.textContent = `${currentUser.dept} • ${currentUser.id}`;
    if (userAvatarEl) {
      userAvatarEl.textContent = currentUser.name.split(" ").map(n => n[0]).slice(0, 2).join("");
    }
  },

  renderCurrentView() {
    const mainContainer = document.getElementById("app-content");
    if (!mainContainer) return;

    if (currentUser.role === "STUDENT") {
      this.renderStudentView(mainContainer);
    } else if (currentUser.role === "FACULTY") {
      this.renderFacultyView(mainContainer);
    } else if (currentUser.role === "ADMIN") {
      this.renderAdminView(mainContainer);
    }
  },

  // ==========================================
  // STUDENT VIEW LOGIC
  // ==========================================
  renderStudentView(container) {
    const student = db.students.find(s => s.rollNo === currentUser.id) || db.students[0];
    const studentMarks = db.marks.filter(m => m.rollNo === student.rollNo);

    // Calculate AI prediction
    const aiPrediction = predictFinalExamPerformance(student, studentMarks);

    // Calculate Semester GPA
    let totalGradePoints = 0;
    let totalCredits = 0;
    const markRows = studentMarks.map(m => {
      const sub = db.subjects.find(s => s.code === m.subjectCode) || { name: m.subjectCode, credits: 3 };
      const calc = computeDetailedInternalMark(m);
      totalGradePoints += (calc.gradePoint * sub.credits);
      totalCredits += sub.credits;
      const classAvg = getSubjectClassAverage(m.subjectCode);

      return {
        ...m,
        subjectName: sub.name,
        credits: sub.credits,
        calc,
        classAvg
      };
    });

    const currentGpa = totalCredits > 0 ? (totalGradePoints / totalCredits).toFixed(2) : "8.50";

    // Attendance badge
    const attColor = student.attendance >= 85 ? "badge-success" : (student.attendance >= 75 ? "badge-warning" : "badge-danger");
    const attStatus = student.attendance >= 85 ? "Excellent" : (student.attendance >= 75 ? "Adequate" : "Condonation Risk (<75%)");

    container.innerHTML = `
      <!-- Alerts Banner if any -->
      ${student.attendance < 75 ? `
        <div class="alert-box alert-danger">
          <span style="font-size:1.3rem;">🚨</span>
          <div>
            <strong>Critical Attendance Alert:</strong> Your overall attendance is <strong>${student.attendance}%</strong>, which is below the university mandatory minimum of 75%. You are at risk of exam condonation penalties.
          </div>
        </div>
      ` : ""}

      <!-- Student Profile & Overview Cards -->
      <div class="stats-grid">
        <div class="stat-card indigo">
          <div class="stat-icon stat-indigo">🎓</div>
          <div class="stat-content">
            <div class="stat-label">Cumulative CGPA</div>
            <div class="stat-value">${student.cgpa}</div>
            <div class="stat-desc">Current Sem 6 GPA: <strong>${currentGpa}</strong></div>
          </div>
        </div>

        <div class="stat-card emerald">
          <div class="stat-icon stat-emerald">📊</div>
          <div class="stat-content">
            <div class="stat-label">Internal Average</div>
            <div class="stat-value">${aiPrediction.avgInternal}%</div>
            <div class="stat-desc">Based on 4 enrolled core subjects</div>
          </div>
        </div>

        <div class="stat-card amber">
          <div class="stat-icon stat-amber">📅</div>
          <div class="stat-content">
            <div class="stat-label">Attendance Record</div>
            <div class="stat-value">${student.attendance}%</div>
            <div class="stat-desc"><span class="badge ${attColor}">${attStatus}</span></div>
          </div>
        </div>

        <div class="stat-card cyan">
          <div class="stat-icon stat-cyan">🔮</div>
          <div class="stat-content">
            <div class="stat-label">AI Predicted Final</div>
            <div class="stat-value">${aiPrediction.predictedMark}/100</div>
            <div class="stat-desc">${aiPrediction.confidence}% Model Confidence</div>
          </div>
        </div>
      </div>

      <!-- AI Forecast Panel -->
      <div class="ai-card">
        <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.5rem;">
          <div class="ai-badge">🤖 EduGrade AI™ Predictive Performance Analytics</div>
          <span class="badge ${aiPrediction.riskClass}" style="font-size:0.82rem; padding:0.35rem 0.75rem;">${aiPrediction.riskLevel}</span>
        </div>

        <div class="ai-grid">
          <div class="ai-metric-item">
            <div class="ai-metric-label">Forecasted University Score</div>
            <div class="ai-metric-val">${aiPrediction.predictedMark} <span style="font-size:0.9rem; font-weight:normal; color:#a5b4fc;">/ 100</span></div>
          </div>
          <div class="ai-metric-item">
            <div class="ai-metric-label">Assessment Trajectory</div>
            <div class="ai-metric-val" style="color: ${student.attendance >= 75 ? '#34d399' : '#f87171'};">
              ${student.attendance >= 75 ? '📈 Steady Upward' : '📉 Needs Attention'}
            </div>
          </div>
          <div class="ai-metric-item">
            <div class="ai-metric-label">Predicted Final Grade</div>
            <div class="ai-metric-val" style="color: #67e8f9;">${aiPrediction.predictedMark >= 90 ? 'Grade O' : (aiPrediction.predictedMark >= 80 ? 'Grade A+' : (aiPrediction.predictedMark >= 70 ? 'Grade A' : (aiPrediction.predictedMark >= 50 ? 'Grade B+' : 'Grade RA')))}</div>
          </div>
        </div>

        <div class="ai-recommendation">
          <strong>💡 AI Diagnostic Insights & Action Plan:</strong>
          <ul style="margin: 0.35rem 0 0 1.25rem; font-size:0.85rem; line-height:1.6;">
            ${aiPrediction.insights.map(i => `<li>${i}</li>`).join("")}
          </ul>
        </div>
      </div>

      <!-- Interactive Performance Charts -->
      <div class="charts-grid">
        <div class="chart-box">
          <div class="chart-header">
            <div>
              <div class="card-title">Subject Score vs Class Average</div>
              <p class="stat-desc">Your continuous internal marks benchmarked against peers</p>
            </div>
          </div>
          <canvas id="student-subject-chart" class="chart-canvas"></canvas>
        </div>

        <div class="chart-box">
          <div class="chart-header">
            <div>
              <div class="card-title">Academic Semester Progression</div>
              <p class="stat-desc">Semester GPA trajectory (Sem 1 to Sem 6)</p>
            </div>
          </div>
          <canvas id="student-trend-chart" class="chart-canvas"></canvas>
        </div>
      </div>

      <!-- Subject Marks Breakdown Table -->
      <div class="card">
        <div class="card-header">
          <div>
            <div class="card-title">Continuous Internal Assessment (CIA) Tabulation</div>
            <p class="stat-desc">Weightage: 40% Best 2 Unit Tests | 25% Assignments | 20% Lab | 15% Viva</p>
          </div>
          <div style="display:flex; gap:0.5rem;">
            <button class="btn btn-secondary btn-sm" onclick="App.printMarkSheet()">
              🖨️ Print Official Grade Card
            </button>
            <button class="btn btn-primary btn-sm" onclick="App.exportStudentCSV('${student.rollNo}')">
              📥 Export CSV
            </button>
          </div>
        </div>

        <div class="table-responsive">
          <table>
            <thead>
              <tr>
                <th>Code & Course Name</th>
                <th>UT-1 (25)</th>
                <th>UT-2 (25)</th>
                <th>UT-3 (25)</th>
                <th>Best 2 Avg</th>
                <th>Assign (20)</th>
                <th>Lab (20)</th>
                <th>Viva (10)</th>
                <th>Internal Total</th>
                <th>Class Avg</th>
                <th>Grade</th>
              </tr>
            </thead>
            <tbody>
              ${markRows.map(row => `
                <tr>
                  <td>
                    <strong>${row.subjectCode}</strong><br>
                    <span style="font-size:0.78rem; color:var(--text-muted);">${row.subjectName}</span>
                  </td>
                  <td>${row.ut1}</td>
                  <td>${row.ut2}</td>
                  <td>${row.ut3}</td>
                  <td><strong style="color:var(--primary);">${row.calc.best2}</strong></td>
                  <td>${row.assignment}</td>
                  <td>${row.lab}</td>
                  <td>${row.viva}</td>
                  <td><strong>${row.calc.total} / 100</strong></td>
                  <td style="color:var(--text-muted);">${row.classAvg}</td>
                  <td><span class="badge ${row.calc.gradeBadge}">${row.calc.grade}</span></td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>
      </div>

      <!-- Student Printable Transcript (Hidden on Screen, Shown on Print) -->
      <div class="print-only">
        <div class="official-header">
          <div class="college-seal">🏛️</div>
          <h2>ST. XAVIER INSTITUTE OF TECHNOLOGY & ADVANCED STUDIES</h2>
          <p style="font-size:0.85rem; color:#475569;">Affiliated to Autonomous University • Accredited 'A++' by NAAC</p>
          <h3 style="margin-top:0.75rem; text-decoration: underline;">OFFICIAL CONTINUOUS INTERNAL ASSESSMENT GRADE SHEET</h3>
        </div>

        <div class="transcript-meta-grid">
          <div><strong>Student Name:</strong> ${student.name}</div>
          <div><strong>Register / Roll No:</strong> ${student.rollNo}</div>
          <div><strong>Degree & Branch:</strong> B.Tech - Computer Science & Engg</div>
          <div><strong>Academic Year / Sem:</strong> 2024-2025 / Semester VI</div>
          <div><strong>Attendance Percentage:</strong> ${student.attendance}%</div>
          <div><strong>Cumulative CGPA:</strong> ${student.cgpa}</div>
        </div>

        <table style="width:100%; border-collapse:collapse; margin-bottom: 2rem;">
          <thead>
            <tr>
              <th>Sub Code</th>
              <th>Course Title</th>
              <th>Credits</th>
              <th>Best 2 UT (40%)</th>
              <th>Assign (25%)</th>
              <th>Lab (20%)</th>
              <th>Viva (15%)</th>
              <th>Total (100)</th>
              <th>Grade</th>
            </tr>
          </thead>
          <tbody>
            ${markRows.map(row => `
              <tr>
                <td><strong>${row.subjectCode}</strong></td>
                <td>${row.subjectName}</td>
                <td>${row.credits}</td>
                <td>${row.calc.best2}</td>
                <td>${row.assignment}</td>
                <td>${row.lab}</td>
                <td>${row.viva}</td>
                <td><strong>${row.calc.total}</strong></td>
                <td><strong>${row.calc.grade}</strong></td>
              </tr>
            `).join("")}
          </tbody>
        </table>

        <div class="sign-block">
          <div class="sign-line">Student Signature</div>
          <div class="sign-line">Faculty Advisor</div>
          <div class="sign-line">Head of Department (CSE)</div>
          <div class="sign-line">Controller of Examinations</div>
        </div>
      </div>
    `;

    setTimeout(() => this.renderStudentCharts(), 50);
  },

  renderStudentCharts() {
    const student = db.students.find(s => s.rollNo === currentUser.id) || db.students[0];
    const studentMarks = db.marks.filter(m => m.rollNo === student.rollNo);

    // Subject chart
    const labels = studentMarks.map(m => m.subjectCode);
    const studentScores = studentMarks.map(m => computeDetailedInternalMark(m).total);
    const classAvgs = studentMarks.map(m => getSubjectClassAverage(m.subjectCode));
    ChartEngine.renderSubjectComparison("student-subject-chart", labels, studentScores, classAvgs);

    // Sem progression chart (Sample sem 1 to 6 gpas)
    const semesters = ["Sem 1", "Sem 2", "Sem 3", "Sem 4", "Sem 5", "Sem 6"];
    // Realistic curve based on current CGPA
    const base = student.cgpa;
    const gpas = [
      Math.max(5.0, Number((base - 0.4).toFixed(2))),
      Math.max(5.0, Number((base - 0.2).toFixed(2))),
      Math.max(5.0, Number((base - 0.1).toFixed(2))),
      Math.max(5.0, Number((base + 0.1).toFixed(2))),
      Math.max(5.0, Number((base + 0.3).toFixed(2))),
      Math.max(5.0, Number((base + 0.2).toFixed(2)))
    ];
    ChartEngine.renderSemesterTrend("student-trend-chart", semesters, gpas);
  },

  // ==========================================
  // FACULTY PANEL LOGIC
  // ==========================================
  currentFacultySubject: "CS601",

  renderFacultyView(container) {
    const faculty = db.faculty.find(f => f.id === currentUser.id) || db.faculty[0];
    const assignedSubjects = db.subjects.filter(s => faculty.subjects.includes(s.code));
    
    // Ensure active subject is one of assigned
    if (!faculty.subjects.includes(this.currentFacultySubject)) {
      this.currentFacultySubject = faculty.subjects[0] || "CS601";
    }

    const currentSub = db.subjects.find(s => s.code === this.currentFacultySubject) || { name: "", credits: 3 };

    // Get all marks for this subject
    const subjectMarks = db.marks.filter(m => m.subjectCode === this.currentFacultySubject);

    // Calculate distribution and class metrics
    const gradeCounts = { "O": 0, "A+": 0, "A": 0, "B+": 0, "B": 0, "RA": 0 };
    let totalScore = 0;
    let lowScorersCount = 0;

    const studentRows = subjectMarks.map(m => {
      const student = db.students.find(s => s.rollNo === m.rollNo) || { name: m.rollNo, attendance: 80 };
      const calc = computeDetailedInternalMark(m);
      gradeCounts[calc.grade] = (gradeCounts[calc.grade] || 0) + 1;
      totalScore += calc.total;
      if (calc.total < 50 || student.attendance < 75) {
        lowScorersCount++;
      }
      return {
        ...m,
        studentName: student.name,
        attendance: student.attendance,
        calc
      };
    });

    const classAverage = subjectMarks.length > 0 ? (totalScore / subjectMarks.length).toFixed(1) : 0;
    const passPercentage = subjectMarks.length > 0 ? (((subjectMarks.length - gradeCounts["RA"]) / subjectMarks.length) * 100).toFixed(0) : 100;

    container.innerHTML = `
      <!-- Subject Header & Selector -->
      <div class="filter-bar" style="background:white; padding:1.25rem; border-radius:var(--radius); border:1px solid var(--border); margin-bottom:1.5rem;">
        <div>
          <div style="font-size:0.8rem; color:var(--text-muted); font-weight:600; text-transform:uppercase;">Assigned Teaching Subject</div>
          <div style="font-size:1.35rem; font-weight:800; color:var(--text-main); display:flex; align-items:center; gap:0.5rem;">
            <span>${this.currentFacultySubject}: ${currentSub.name}</span>
          </div>
          <div style="font-size:0.85rem; color:var(--text-muted); margin-top:0.25rem;">
            Dept: ${currentSub.dept} • Semester ${currentSub.sem} • ${currentSub.credits} Credits • Instructor: ${faculty.name}
          </div>
        </div>

        <div class="filter-group">
          <label style="font-size:0.82rem; font-weight:600; color:var(--text-muted);">Change Subject:</label>
          <select class="input-control" onchange="App.setFacultySubject(this.value)">
            ${assignedSubjects.map(s => `
              <option value="${s.code}" ${s.code === this.currentFacultySubject ? "selected" : ""}>
                ${s.code} - ${s.name}
              </option>
            `).join("")}
          </select>
        </div>
      </div>

      <!-- Quick Metrics Grid -->
      <div class="stats-grid">
        <div class="stat-card indigo">
          <div class="stat-icon stat-indigo">👥</div>
          <div class="stat-content">
            <div class="stat-label">Enrolled Students</div>
            <div class="stat-value">${subjectMarks.length}</div>
            <div class="stat-desc">Section A - Full Strength</div>
          </div>
        </div>

        <div class="stat-card emerald">
          <div class="stat-icon stat-emerald">📊</div>
          <div class="stat-content">
            <div class="stat-label">Subject Class Average</div>
            <div class="stat-value">${classAverage}%</div>
            <div class="stat-desc">Weightage: 40/25/20/15</div>
          </div>
        </div>

        <div class="stat-card cyan">
          <div class="stat-icon stat-cyan">🎯</div>
          <div class="stat-content">
            <div class="stat-label">Pass Percentage</div>
            <div class="stat-value">${passPercentage}%</div>
            <div class="stat-desc">${subjectMarks.length - gradeCounts["RA"]} Cleared / ${gradeCounts["RA"]} Arrears</div>
          </div>
        </div>

        <div class="stat-card rose">
          <div class="stat-icon stat-rose">⚠️</div>
          <div class="stat-content">
            <div class="stat-label">Low Scorers / At-Risk</div>
            <div class="stat-value">${lowScorersCount}</div>
            <div class="stat-desc">Marks < 50% or Att < 75%</div>
          </div>
        </div>
      </div>

      <!-- Grade Distribution & Actions -->
      <div class="charts-grid">
        <div class="chart-box">
          <div class="chart-header">
            <div>
              <div class="card-title">Class Grade Distribution</div>
              <p class="stat-desc">Based on Continuous Internal Assessment (O to RA)</p>
            </div>
          </div>
          <canvas id="faculty-grade-chart" class="chart-canvas"></canvas>
        </div>

        <div class="card" style="margin-bottom:0;">
          <div class="card-header">
            <div class="card-title">⚡ Faculty Automation Tools</div>
          </div>
          <div style="display:flex; flex-direction:column; gap:0.85rem;">
            <div style="background:var(--bg-subtle); padding:1rem; border-radius:var(--radius-sm); border:1px solid var(--border);">
              <strong>📥 Bulk Marks Upload via CSV</strong>
              <p style="font-size:0.82rem; color:var(--text-muted); margin:0.3rem 0 0.6rem 0;">
                Quickly upload UT1, UT2, UT3, Assignments, Lab, and Viva scores using a spreadsheet.
              </p>
              <div style="display:flex; gap:0.5rem; flex-wrap:wrap;">
                <button class="btn btn-primary btn-sm" onclick="App.openBulkUploadModal()">
                  Upload CSV File
                </button>
                <button class="btn btn-secondary btn-sm" onclick="App.downloadSampleCsv()">
                  Download Template CSV
                </button>
              </div>
            </div>

            <div style="background:var(--warning-light); padding:1rem; border-radius:var(--radius-sm); border:1px solid #fde68a;">
              <strong style="color:var(--warning-text);">📢 Academic Alert Trigger</strong>
              <p style="font-size:0.82rem; color:var(--warning-text); margin:0.3rem 0 0.6rem 0;">
                Dispatch automated SMS & Email alerts to <strong>${lowScorersCount} students</strong> with low internal scores or attendance shortfall.
              </p>
              <button class="btn btn-sm" style="background:var(--warning); color:white;" onclick="App.openAlertDispatchModal('${this.currentFacultySubject}')">
                Send Performance Notification
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Marks Tabulation & Entry Table -->
      <div class="card">
        <div class="card-header">
          <div>
            <div class="card-title">Internal Marks Entry Ledger (${this.currentFacultySubject})</div>
            <p class="stat-desc">Formula: Best 2 Tests (40%) + Assignment (25%) + Lab (20%) + Viva (15%)</p>
          </div>
          <div style="display:flex; gap:0.5rem;">
            <button class="btn btn-secondary btn-sm" onclick="App.exportSubjectCSV('${this.currentFacultySubject}')">
              📥 Export Subject CSV
            </button>
          </div>
        </div>

        <div class="table-responsive">
          <table>
            <thead>
              <tr>
                <th>Roll No</th>
                <th>Student Name</th>
                <th>UT-1 (25)</th>
                <th>UT-2 (25)</th>
                <th>UT-3 (25)</th>
                <th>Best 2 Avg</th>
                <th>Assign (20)</th>
                <th>Lab (20)</th>
                <th>Viva (10)</th>
                <th>Total (100)</th>
                <th>Grade</th>
                <th>Att %</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              ${studentRows.map(row => `
                <tr>
                  <td><strong>${row.rollNo}</strong></td>
                  <td>${row.studentName}</td>
                  <td>${row.ut1}</td>
                  <td>${row.ut2}</td>
                  <td>${row.ut3}</td>
                  <td><strong style="color:var(--primary);">${row.calc.best2}</strong></td>
                  <td>${row.assignment}</td>
                  <td>${row.lab}</td>
                  <td>${row.viva}</td>
                  <td><strong>${row.calc.total}</strong></td>
                  <td><span class="badge ${row.calc.gradeBadge}">${row.calc.grade}</span></td>
                  <td>
                    <span class="badge ${row.attendance >= 75 ? 'badge-neutral' : 'badge-danger'}">
                      ${row.attendance}%
                    </span>
                  </td>
                  <td>
                    <button class="btn btn-secondary btn-sm" onclick="App.openEditMarksModal('${row.rollNo}', '${this.currentFacultySubject}')">
                      ✏️ Edit
                    </button>
                  </td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>
      </div>
    `;

    setTimeout(() => this.renderFacultyCharts(), 50);
  },

  setFacultySubject(code) {
    this.currentFacultySubject = code;
    this.renderCurrentView();
  },

  renderFacultyCharts() {
    const subjectMarks = db.marks.filter(m => m.subjectCode === this.currentFacultySubject);
    const gradeCounts = { "O": 0, "A+": 0, "A": 0, "B+": 0, "B": 0, "RA": 0 };
    subjectMarks.forEach(m => {
      const calc = computeDetailedInternalMark(m);
      gradeCounts[calc.grade] = (gradeCounts[calc.grade] || 0) + 1;
    });

    ChartEngine.renderGradeDistribution("faculty-grade-chart", gradeCounts);
  },

  // ==========================================
  // ADMIN PANEL LOGIC
  // ==========================================
  adminActiveTab: "overview", // 'overview' | 'students' | 'faculty' | 'subjects' | 'weightage'

  renderAdminView(container) {
    const totalStudents = db.students.length;
    const totalFaculty = db.faculty.length;
    const totalSubjects = db.subjects.length;

    // Overall stats
    let totalMarksSum = 0;
    let totalMarksCount = db.marks.length;
    let arrearCount = 0;

    db.marks.forEach(m => {
      const calc = computeDetailedInternalMark(m);
      totalMarksSum += calc.total;
      if (calc.grade === "RA") arrearCount++;
    });

    const institutionalAvg = totalMarksCount > 0 ? (totalMarksSum / totalMarksCount).toFixed(1) : 0;
    const overallPassPct = totalMarksCount > 0 ? (((totalMarksCount - arrearCount) / totalMarksCount) * 100).toFixed(0) : 100;

    container.innerHTML = `
      <!-- Admin Top Metrics -->
      <div class="stats-grid">
        <div class="stat-card indigo">
          <div class="stat-icon stat-indigo">🏛️</div>
          <div class="stat-content">
            <div class="stat-label">Total Students Enrolled</div>
            <div class="stat-value">${totalStudents}</div>
            <div class="stat-desc">Across CSE, IT, ECE</div>
          </div>
        </div>

        <div class="stat-card cyan">
          <div class="stat-icon stat-cyan">👨‍🏫</div>
          <div class="stat-content">
            <div class="stat-label">Faculty Accounts</div>
            <div class="stat-value">${totalFaculty}</div>
            <div class="stat-desc">Active Academic Staff</div>
          </div>
        </div>

        <div class="stat-card emerald">
          <div class="stat-icon stat-emerald">📈</div>
          <div class="stat-content">
            <div class="stat-label">Institutional Pass Rate</div>
            <div class="stat-value">${overallPassPct}%</div>
            <div class="stat-desc">Avg Score: ${institutionalAvg}%</div>
          </div>
        </div>

        <div class="stat-card amber">
          <div class="stat-icon stat-amber">📚</div>
          <div class="stat-content">
            <div class="stat-label">Curriculum Subjects</div>
            <div class="stat-value">${totalSubjects}</div>
            <div class="stat-desc">Syllabus Regulation 2024</div>
          </div>
        </div>
      </div>

      <!-- Navigation Tabs -->
      <div class="tabs-nav">
        <button class="tab-btn ${this.adminActiveTab === 'overview' ? 'active' : ''}" onclick="App.setAdminTab('overview')">
          📊 Department Analytics
        </button>
        <button class="tab-btn ${this.adminActiveTab === 'students' ? 'active' : ''}" onclick="App.setAdminTab('students')">
          🎓 Student Directory (${totalStudents})
        </button>
        <button class="tab-btn ${this.adminActiveTab === 'faculty' ? 'active' : ''}" onclick="App.setAdminTab('faculty')">
          👨‍🏫 Faculty Directory (${totalFaculty})
        </button>
        <button class="tab-btn ${this.adminActiveTab === 'subjects' ? 'active' : ''}" onclick="App.setAdminTab('subjects')">
          📖 Course Subjects (${totalSubjects})
        </button>
        <button class="tab-btn ${this.adminActiveTab === 'weightage' ? 'active' : ''}" onclick="App.setAdminTab('weightage')">
          ⚙️ Weightage & Grading Rules
        </button>
      </div>

      <!-- Dynamic Tab Container -->
      <div id="admin-tab-content">
        ${this.renderAdminTabContent()}
      </div>
    `;

    if (this.adminActiveTab === "overview") {
      setTimeout(() => this.renderAdminCharts(), 50);
    }
  },

  setAdminTab(tab) {
    this.adminActiveTab = tab;
    this.renderCurrentView();
  },

  renderAdminTabContent() {
    if (this.adminActiveTab === "overview") {
      return `
        <div class="charts-grid">
          <div class="chart-box">
            <div class="chart-header">
              <div>
                <div class="card-title">Subject-wise Class Averages</div>
                <p class="stat-desc">Comparative analysis across curriculum</p>
              </div>
            </div>
            <canvas id="admin-subject-chart" class="chart-canvas"></canvas>
          </div>

          <div class="chart-box">
            <div class="chart-header">
              <div>
                <div class="card-title">Institution Grade Distribution</div>
                <p class="stat-desc">Distribution of total student internal grades</p>
              </div>
            </div>
            <canvas id="admin-grade-chart" class="chart-canvas"></canvas>
          </div>
        </div>

        <div class="card">
          <div class="card-header">
            <div>
              <div class="card-title">Department Master Marks Ledger</div>
              <p class="stat-desc">Comprehensive semester tabulation for Dean & Academic Council</p>
            </div>
            <div style="display:flex; gap:0.5rem;">
              <button class="btn btn-secondary btn-sm" onclick="App.exportMasterLedgerCSV()">
                📥 Export Master CSV
              </button>
            </div>
          </div>
          <div class="table-responsive">
            <table>
              <thead>
                <tr>
                  <th>Roll No</th>
                  <th>Student Name</th>
                  <th>Dept</th>
                  <th>Sem</th>
                  <th>CGPA</th>
                  <th>Att %</th>
                  <th>Enrolled Subjects</th>
                  <th>Avg Internal</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                ${db.students.map(s => {
                  const sMarks = db.marks.filter(m => m.rollNo === s.rollNo);
                  const avg = sMarks.length > 0 ? (sMarks.reduce((acc, m) => acc + computeDetailedInternalMark(m).total, 0) / sMarks.length).toFixed(1) : 0;
                  const isRisk = avg < 50 || s.attendance < 75;
                  return `
                    <tr>
                      <td><strong>${s.rollNo}</strong></td>
                      <td>${s.name}</td>
                      <td>${s.dept}</td>
                      <td>${s.sem}</td>
                      <td>${s.cgpa}</td>
                      <td><span class="badge ${s.attendance >= 75 ? 'badge-neutral' : 'badge-danger'}">${s.attendance}%</span></td>
                      <td>${sMarks.length} courses</td>
                      <td><strong>${avg}%</strong></td>
                      <td>
                        <span class="badge ${isRisk ? 'badge-danger' : 'badge-success'}">
                          ${isRisk ? 'At Risk' : 'Good Standing'}
                        </span>
                      </td>
                    </tr>
                  `;
                }).join("")}
              </tbody>
            </table>
          </div>
        </div>
      `;
    }

    if (this.adminActiveTab === "students") {
      return `
        <div class="card">
          <div class="card-header">
            <div>
              <div class="card-title">Student Records Management</div>
              <p class="stat-desc">Register new students or manage existing enrolled records</p>
            </div>
            <button class="btn btn-primary btn-sm" onclick="App.openAddStudentModal()">
              + Add New Student
            </button>
          </div>

          <div class="table-responsive">
            <table>
              <thead>
                <tr>
                  <th>Roll No</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Dept</th>
                  <th>Sem</th>
                  <th>Phone</th>
                  <th>Attendance</th>
                  <th>CGPA</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                ${db.students.map(s => `
                  <tr>
                    <td><strong>${s.rollNo}</strong></td>
                    <td>${s.name}</td>
                    <td>${s.email}</td>
                    <td>${s.dept}</td>
                    <td>Sem ${s.sem}</td>
                    <td>${s.phone || 'N/A'}</td>
                    <td><span class="badge ${s.attendance >= 75 ? 'badge-neutral' : 'badge-danger'}">${s.attendance}%</span></td>
                    <td><strong>${s.cgpa}</strong></td>
                    <td>
                      <button class="btn btn-secondary btn-sm" onclick="App.deleteStudent('${s.rollNo}')" style="color:var(--danger); border-color:#fecaca;">
                        🗑️ Delete
                      </button>
                    </td>
                  </tr>
                `).join("")}
              </tbody>
            </table>
          </div>
        </div>
      `;
    }

    if (this.adminActiveTab === "faculty") {
      return `
        <div class="card">
          <div class="card-header">
            <div>
              <div class="card-title">Faculty & Instructor Directory</div>
              <p class="stat-desc">Manage professors and subject assignments</p>
            </div>
            <button class="btn btn-primary btn-sm" onclick="App.openAddFacultyModal()">
              + Add Faculty Member
            </button>
          </div>

          <div class="table-responsive">
            <table>
              <thead>
                <tr>
                  <th>Faculty ID</th>
                  <th>Name</th>
                  <th>Designation</th>
                  <th>Department</th>
                  <th>Email</th>
                  <th>Assigned Courses</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                ${db.faculty.map(f => `
                  <tr>
                    <td><strong>${f.id}</strong></td>
                    <td>${f.name}</td>
                    <td>${f.designation}</td>
                    <td>${f.dept}</td>
                    <td>${f.email}</td>
                    <td>
                      ${f.subjects.map(s => `<span class="badge badge-info" style="margin-right:4px;">${s}</span>`).join("")}
                    </td>
                    <td>
                      <button class="btn btn-secondary btn-sm" onclick="App.deleteFaculty('${f.id}')" style="color:var(--danger); border-color:#fecaca;">
                        🗑️ Delete
                      </button>
                    </td>
                  </tr>
                `).join("")}
              </tbody>
            </table>
          </div>
        </div>
      `;
    }

    if (this.adminActiveTab === "subjects") {
      return `
        <div class="card">
          <div class="card-header">
            <div>
              <div class="card-title">Course & Subject Offerings</div>
              <p class="stat-desc">Curriculum structure and credit distribution</p>
            </div>
            <button class="btn btn-primary btn-sm" onclick="App.openAddSubjectModal()">
              + Add New Subject
            </button>
          </div>

          <div class="table-responsive">
            <table>
              <thead>
                <tr>
                  <th>Subject Code</th>
                  <th>Course Title</th>
                  <th>Dept</th>
                  <th>Sem</th>
                  <th>Credits</th>
                  <th>Assigned Faculty</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                ${db.subjects.map(sub => {
                  const fac = db.faculty.find(f => f.id === sub.facultyId) || { name: "Unassigned" };
                  return `
                    <tr>
                      <td><strong>${sub.code}</strong></td>
                      <td>${sub.name}</td>
                      <td>${sub.dept}</td>
                      <td>Semester ${sub.sem}</td>
                      <td>${sub.credits} Credits</td>
                      <td>${fac.name}</td>
                      <td>
                        <button class="btn btn-secondary btn-sm" onclick="App.deleteSubject('${sub.code}')" style="color:var(--danger); border-color:#fecaca;">
                          🗑️ Delete
                        </button>
                      </td>
                    </tr>
                  `;
                }).join("")}
              </tbody>
            </table>
          </div>
        </div>
      `;
    }

    if (this.adminActiveTab === "weightage") {
      return `
        <div class="card" style="max-width: 700px;">
          <div class="card-header">
            <div>
              <div class="card-title">Continuous Internal Assessment Weightage Rules</div>
              <p class="stat-desc">Configure institutional formula percentages (Total must equal 100%)</p>
            </div>
          </div>

          <form onsubmit="event.preventDefault(); App.saveWeightages();">
            <div class="form-group">
              <label class="form-label">Unit Tests Weightage (%) - Best 2 of 3</label>
              <input type="number" id="w-tests" class="input-control" value="${db.weightages.tests}" min="10" max="70" required style="width:100%;">
              <div class="form-help">Current: ${db.weightages.tests}%. Calculates average of top 2 unit test marks.</div>
            </div>

            <div class="form-group">
              <label class="form-label">Assignments Weightage (%)</label>
              <input type="number" id="w-assign" class="input-control" value="${db.weightages.assignments}" min="5" max="50" required style="width:100%;">
              <div class="form-help">Current: ${db.weightages.assignments}%. Evaluated from written/coding assignments.</div>
            </div>

            <div class="form-group">
              <label class="form-label">Laboratory & Practical Work (%)</label>
              <input type="number" id="w-lab" class="input-control" value="${db.weightages.lab}" min="0" max="40" required style="width:100%;">
              <div class="form-help">Current: ${db.weightages.lab}%. Lab experiment continuous assessment.</div>
            </div>

            <div class="form-group">
              <label class="form-label">Viva-Voce / Technical Quiz (%)</label>
              <input type="number" id="w-viva" class="input-control" value="${db.weightages.viva}" min="0" max="30" required style="width:100%;">
              <div class="form-help">Current: ${db.weightages.viva}%. Oral examinations and quizzes.</div>
            </div>

            <div style="margin-top:1.5rem;">
              <button type="submit" class="btn btn-primary">
                💾 Save Weightage Configuration
              </button>
            </div>
          </form>
        </div>
      `;
    }
  },

  renderAdminCharts() {
    // Subject averages bar chart
    const subjects = db.subjects.slice(0, 5);
    const labels = subjects.map(s => s.code);
    const avgs = subjects.map(s => getSubjectClassAverage(s.code));
    const targetAvgs = subjects.map(() => 75); // Target threshold
    ChartEngine.renderSubjectComparison("admin-subject-chart", labels, avgs, targetAvgs);

    // Institutional grade distribution
    const gradeCounts = { "O": 0, "A+": 0, "A": 0, "B+": 0, "B": 0, "RA": 0 };
    db.marks.forEach(m => {
      const calc = computeDetailedInternalMark(m);
      gradeCounts[calc.grade] = (gradeCounts[calc.grade] || 0) + 1;
    });
    ChartEngine.renderGradeDistribution("admin-grade-chart", gradeCounts);
  },

  saveWeightages() {
    const tests = parseInt(document.getElementById("w-tests").value, 10);
    const assignments = parseInt(document.getElementById("w-assign").value, 10);
    const lab = parseInt(document.getElementById("w-lab").value, 10);
    const viva = parseInt(document.getElementById("w-viva").value, 10);

    const sum = tests + assignments + lab + viva;
    if (sum !== 100) {
      alert(`The sum of all weightages must equal 100%. Currently it is ${sum}%. Please adjust.`);
      return;
    }

    db.weightages = { tests, assignments, lab, viva };
    saveDatabase(db);
    this.showToast("Weightage rules updated successfully! Marks recalculated across the system.", "success");
    this.renderCurrentView();
  },

  // ==========================================
  // MODALS & ACTIONS
  // ==========================================
  openEditMarksModal(rollNo, subjectCode) {
    const student = db.students.find(s => s.rollNo === rollNo);
    const markRecord = db.marks.find(m => m.rollNo === rollNo && m.subjectCode === subjectCode) || {
      rollNo,
      subjectCode,
      ut1: 0,
      ut2: 0,
      ut3: 0,
      assignment: 0,
      lab: 0,
      viva: 0
    };

    const modalBackdrop = document.getElementById("modal-container");
    modalBackdrop.innerHTML = `
      <div class="modal-box">
        <div class="modal-header">
          <div class="card-title">✏️ Edit Internal Marks: ${rollNo}</div>
          <button class="btn-close" onclick="App.closeModal()">✕</button>
        </div>
        <div class="modal-body">
          <div style="margin-bottom:1rem; font-size:0.88rem; color:var(--text-muted);">
            Student: <strong>${student ? student.name : rollNo}</strong> • Subject: <strong>${subjectCode}</strong>
          </div>

          <form id="edit-marks-form" onsubmit="event.preventDefault(); App.saveEditedMarks('${rollNo}', '${subjectCode}');">
            <div style="display:grid; grid-template-columns: repeat(3, 1fr); gap:1rem;">
              <div class="form-group">
                <label class="form-label">UT-1 (Max 25)</label>
                <input type="number" id="inp-ut1" class="input-control" min="0" max="25" value="${markRecord.ut1}" required style="width:100%;" oninput="App.previewLiveSum()">
              </div>
              <div class="form-group">
                <label class="form-label">UT-2 (Max 25)</label>
                <input type="number" id="inp-ut2" class="input-control" min="0" max="25" value="${markRecord.ut2}" required style="width:100%;" oninput="App.previewLiveSum()">
              </div>
              <div class="form-group">
                <label class="form-label">UT-3 (Max 25)</label>
                <input type="number" id="inp-ut3" class="input-control" min="0" max="25" value="${markRecord.ut3}" required style="width:100%;" oninput="App.previewLiveSum()">
              </div>
            </div>

            <div style="display:grid; grid-template-columns: repeat(3, 1fr); gap:1rem; margin-top:0.5rem;">
              <div class="form-group">
                <label class="form-label">Assignment (Max 20)</label>
                <input type="number" id="inp-assign" class="input-control" min="0" max="20" value="${markRecord.assignment}" required style="width:100%;" oninput="App.previewLiveSum()">
              </div>
              <div class="form-group">
                <label class="form-label">Lab Work (Max 20)</label>
                <input type="number" id="inp-lab" class="input-control" min="0" max="20" value="${markRecord.lab}" required style="width:100%;" oninput="App.previewLiveSum()">
              </div>
              <div class="form-group">
                <label class="form-label">Viva (Max 10)</label>
                <input type="number" id="inp-viva" class="input-control" min="0" max="10" value="${markRecord.viva}" required style="width:100%;" oninput="App.previewLiveSum()">
              </div>
            </div>

            <div id="live-sum-preview" style="background:var(--primary-light); padding:0.85rem; border-radius:var(--radius-sm); margin-top:1rem; font-size:0.88rem; color:var(--primary-dark);">
              <!-- dynamic preview -->
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button class="btn btn-secondary" onclick="App.closeModal()">Cancel</button>
          <button class="btn btn-primary" onclick="document.getElementById('edit-marks-form').requestSubmit()">Save Marks</button>
        </div>
      </div>
    `;

    modalBackdrop.classList.add("open");
    this.previewLiveSum();
  },

  previewLiveSum() {
    const ut1 = Number(document.getElementById("inp-ut1")?.value) || 0;
    const ut2 = Number(document.getElementById("inp-ut2")?.value) || 0;
    const ut3 = Number(document.getElementById("inp-ut3")?.value) || 0;
    const assignment = Number(document.getElementById("inp-assign")?.value) || 0;
    const lab = Number(document.getElementById("inp-lab")?.value) || 0;
    const viva = Number(document.getElementById("inp-viva")?.value) || 0;

    const calc = computeDetailedInternalMark({ ut1, ut2, ut3, assignment, lab, viva });
    const previewEl = document.getElementById("live-sum-preview");
    if (previewEl) {
      previewEl.innerHTML = `
        <strong>Preview:</strong> Best 2 Tests Average: <strong>${calc.best2}/25</strong> (Scaled: ${calc.testPart} pts) • 
        Total Internal: <strong>${calc.total} / 100</strong> • 
        Projected Grade: <strong style="color:var(--primary);">${calc.grade}</strong>
      `;
    }
  },

  saveEditedMarks(rollNo, subjectCode) {
    const ut1 = Number(document.getElementById("inp-ut1").value);
    const ut2 = Number(document.getElementById("inp-ut2").value);
    const ut3 = Number(document.getElementById("inp-ut3").value);
    const assignment = Number(document.getElementById("inp-assign").value);
    const lab = Number(document.getElementById("inp-lab").value);
    const viva = Number(document.getElementById("inp-viva").value);

    let record = db.marks.find(m => m.rollNo === rollNo && m.subjectCode === subjectCode);
    if (record) {
      record.ut1 = ut1;
      record.ut2 = ut2;
      record.ut3 = ut3;
      record.assignment = assignment;
      record.lab = lab;
      record.viva = viva;
    } else {
      db.marks.push({ rollNo, subjectCode, ut1, ut2, ut3, assignment, lab, viva });
    }

    saveDatabase(db);
    this.closeModal();
    this.showToast(`Updated marks for ${rollNo} in ${subjectCode}`, "success");
    this.renderCurrentView();
  },

  openBulkUploadModal() {
    const modalBackdrop = document.getElementById("modal-container");
    modalBackdrop.innerHTML = `
      <div class="modal-box">
        <div class="modal-header">
          <div class="card-title">📥 Bulk Marks Upload (CSV)</div>
          <button class="btn-close" onclick="App.closeModal()">✕</button>
        </div>
        <div class="modal-body">
          <p style="font-size:0.85rem; color:var(--text-muted); margin-bottom:1rem;">
            Upload a CSV file or paste formatted CSV content below. Required columns: 
            <code>RollNo, StudentName, UT1_25, UT2_25, UT3_25, Assignment_20, Lab_20, Viva_10</code>
          </p>

          <div class="form-group">
            <label class="form-label">Select CSV File from Computer</label>
            <input type="file" id="csv-file-input" class="input-control" accept=".csv" style="width:100%;" onchange="App.handleCsvFileSelect(event)">
          </div>

          <div class="form-group" style="margin-top:1rem;">
            <label class="form-label">Or Paste CSV Raw Text</label>
            <textarea id="csv-raw-input" class="input-control" rows="6" style="width:100%; font-family:monospace; font-size:0.82rem;" placeholder="RollNo,StudentName,UT1_25,UT2_25,UT3_25,Assignment_20,Lab_20,Viva_10&#10;CS202401,Karthik,22,24,20,19,18,9"></textarea>
          </div>

          <div id="csv-preview-feedback" style="margin-top:0.75rem; font-size:0.85rem;"></div>
        </div>
        <div class="modal-footer">
          <button class="btn btn-secondary" onclick="App.downloadSampleCsv()">📥 Download Template</button>
          <button class="btn btn-secondary" onclick="App.closeModal()">Cancel</button>
          <button class="btn btn-primary" onclick="App.processBulkCsvUpload()">Import Marks</button>
        </div>
      </div>
    `;
    modalBackdrop.classList.add("open");
  },

  handleCsvFileSelect(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const text = e.target.result;
      const textarea = document.getElementById("csv-raw-input");
      if (textarea) textarea.value = text;
      document.getElementById("csv-preview-feedback").innerHTML = `
        <span style="color:var(--success);">✓ File loaded (${file.name}, ${(file.size / 1024).toFixed(1)} KB). Ready to import.</span>
      `;
    };
    reader.readAsText(file);
  },

  processBulkCsvUpload() {
    const raw = document.getElementById("csv-raw-input")?.value?.trim();
    if (!raw) {
      alert("Please upload a file or paste CSV content.");
      return;
    }

    const lines = raw.split(/\r?\n/).filter(l => l.trim().length > 0);
    if (lines.length < 2) {
      alert("CSV must have a header row and at least one student data row.");
      return;
    }

    let successCount = 0;
    const subjectCode = this.currentFacultySubject;

    // Header index mapping
    const header = lines[0].split(",").map(h => h.trim().toLowerCase());
    const rollIdx = header.findIndex(h => h.includes("roll"));
    const ut1Idx = header.findIndex(h => h.includes("ut1"));
    const ut2Idx = header.findIndex(h => h.includes("ut2"));
    const ut3Idx = header.findIndex(h => h.includes("ut3"));
    const assignIdx = header.findIndex(h => h.includes("assign"));
    const labIdx = header.findIndex(h => h.includes("lab"));
    const vivaIdx = header.findIndex(h => h.includes("viva"));

    for (let i = 1; i < lines.length; i++) {
      const cols = lines[i].split(",").map(c => c.trim());
      if (cols.length < 3) continue;

      const rollNo = cols[rollIdx >= 0 ? rollIdx : 0];
      const ut1 = Number(cols[ut1Idx >= 0 ? ut1Idx : 2]) || 0;
      const ut2 = Number(cols[ut2Idx >= 0 ? ut2Idx : 3]) || 0;
      const ut3 = Number(cols[ut3Idx >= 0 ? ut3Idx : 4]) || 0;
      const assignment = Number(cols[assignIdx >= 0 ? assignIdx : 5]) || 0;
      const lab = Number(cols[labIdx >= 0 ? labIdx : 6]) || 0;
      const viva = Number(cols[vivaIdx >= 0 ? vivaIdx : 7]) || 0;

      let record = db.marks.find(m => m.rollNo === rollNo && m.subjectCode === subjectCode);
      if (record) {
        record.ut1 = ut1;
        record.ut2 = ut2;
        record.ut3 = ut3;
        record.assignment = assignment;
        record.lab = lab;
        record.viva = viva;
      } else {
        db.marks.push({ rollNo, subjectCode, ut1, ut2, ut3, assignment, lab, viva });
      }
      successCount++;
    }

    saveDatabase(db);
    this.closeModal();
    this.showToast(`Successfully imported marks for ${successCount} students in ${subjectCode}!`, "success");
    this.renderCurrentView();
  },

  openAlertDispatchModal(subjectCode) {
    const subjectMarks = db.marks.filter(m => m.subjectCode === subjectCode);
    const lowScorers = [];

    subjectMarks.forEach(m => {
      const student = db.students.find(s => s.rollNo === m.rollNo);
      const calc = computeDetailedInternalMark(m);
      if (calc.total < 50 || (student && student.attendance < 75)) {
        lowScorers.push({
          rollNo: m.rollNo,
          name: student ? student.name : m.rollNo,
          attendance: student ? student.attendance : 80,
          total: calc.total,
          phone: student ? student.phone : "+91 98000 00000"
        });
      }
    });

    const modalBackdrop = document.getElementById("modal-container");
    modalBackdrop.innerHTML = `
      <div class="modal-box">
        <div class="modal-header">
          <div class="card-title">📢 Automated SMS / Email Academic Warning Dispatch</div>
          <button class="btn-close" onclick="App.closeModal()">✕</button>
        </div>
        <div class="modal-body">
          <div class="alert-box alert-warning">
            <span>⚠️</span>
            <div>
              Found <strong>${lowScorers.length} students</strong> currently falling below the 50% internal threshold or 75% attendance rule for course <strong>${subjectCode}</strong>.
            </div>
          </div>

          <div style="font-size:0.85rem; font-weight:600; margin-bottom:0.4rem;">Recipients (${lowScorers.length}):</div>
          <div style="max-height: 140px; overflow-y:auto; border:1px solid var(--border); border-radius:var(--radius-sm); padding:0.5rem; margin-bottom:1rem; font-size:0.82rem; background:var(--bg-subtle);">
            ${lowScorers.map(s => `
              <div style="display:flex; justify-content:space-between; padding:0.25rem 0; border-bottom:1px dashed var(--border);">
                <span><strong>${s.name}</strong> (${s.rollNo})</span>
                <span>Mark: <strong>${s.total}%</strong> | Att: <strong>${s.attendance}%</strong></span>
              </div>
            `).join("")}
          </div>

          <div class="form-group">
            <label class="form-label">Alert Template Dispatch Channels</label>
            <div style="display:flex; gap:1.5rem; font-size:0.85rem;">
              <label><input type="checkbox" id="chk-email" checked> Student Official Email</label>
              <label><input type="checkbox" id="chk-sms" checked> Parent SMS Notification</label>
              <label><input type="checkbox" id="chk-portal" checked> Student Portal Alert</label>
            </div>
          </div>

          <div class="form-group">
            <label class="form-label">Message Preview</label>
            <textarea class="input-control" rows="3" style="width:100%; font-size:0.82rem;" readonly>
Dear Student/Parent, your Continuous Internal Assessment score for ${subjectCode} is currently below requirement. Mandatory remedial counseling and test re-evaluation scheduled this Thursday at 3:30 PM.
            </textarea>
          </div>
        </div>
        <div class="modal-footer">
          <button class="btn btn-secondary" onclick="App.closeModal()">Cancel</button>
          <button class="btn btn-danger" onclick="App.dispatchAlerts('${subjectCode}', ${lowScorers.length})">
            🚀 Dispatch All Alerts Now
          </button>
        </div>
      </div>
    `;
    modalBackdrop.classList.add("open");
  },

  dispatchAlerts(subjectCode, count) {
    this.closeModal();
    this.showToast(`Simulated dispatch of ${count} Email & SMS alerts sent for ${subjectCode}!`, "success");
  },

  openAddStudentModal() {
    const modalBackdrop = document.getElementById("modal-container");
    modalBackdrop.innerHTML = `
      <div class="modal-box">
        <div class="modal-header">
          <div class="card-title">+ Add New Student Record</div>
          <button class="btn-close" onclick="App.closeModal()">✕</button>
        </div>
        <div class="modal-body">
          <form id="add-student-form" onsubmit="event.preventDefault(); App.saveNewStudent();">
            <div class="form-group">
              <label class="form-label">Roll Number</label>
              <input type="text" id="new-roll" class="input-control" placeholder="e.g. CS202409" required style="width:100%;">
            </div>
            <div class="form-group">
              <label class="form-label">Full Name</label>
              <input type="text" id="new-name" class="input-control" placeholder="e.g. Rohith Venkat" required style="width:100%;">
            </div>
            <div class="form-group">
              <label class="form-label">Email Address</label>
              <input type="email" id="new-email" class="input-control" placeholder="e.g. rohith@college.edu" required style="width:100%;">
            </div>
            <div style="display:grid; grid-template-columns: 1fr 1fr; gap:1rem;">
              <div class="form-group">
                <label class="form-label">Department</label>
                <select id="new-dept" class="input-control" style="width:100%;">
                  <option value="CSE">CSE</option>
                  <option value="IT">IT</option>
                  <option value="ECE">ECE</option>
                </select>
              </div>
              <div class="form-group">
                <label class="form-label">Semester</label>
                <input type="number" id="new-sem" class="input-control" value="6" min="1" max="8" style="width:100%;">
              </div>
            </div>
            <div style="display:grid; grid-template-columns: 1fr 1fr; gap:1rem;">
              <div class="form-group">
                <label class="form-label">Initial CGPA</label>
                <input type="number" id="new-cgpa" step="0.01" class="input-control" value="8.00" min="0" max="10" style="width:100%;">
              </div>
              <div class="form-group">
                <label class="form-label">Attendance (%)</label>
                <input type="number" id="new-att" class="input-control" value="85" min="0" max="100" style="width:100%;">
              </div>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button class="btn btn-secondary" onclick="App.closeModal()">Cancel</button>
          <button class="btn btn-primary" onclick="document.getElementById('add-student-form').requestSubmit()">Create Student</button>
        </div>
      </div>
    `;
    modalBackdrop.classList.add("open");
  },

  saveNewStudent() {
    const rollNo = document.getElementById("new-roll").value.trim().toUpperCase();
    const name = document.getElementById("new-name").value.trim();
    const email = document.getElementById("new-email").value.trim();
    const dept = document.getElementById("new-dept").value;
    const sem = parseInt(document.getElementById("new-sem").value, 10);
    const cgpa = parseFloat(document.getElementById("new-cgpa").value);
    const attendance = parseInt(document.getElementById("new-att").value, 10);

    if (db.students.some(s => s.rollNo === rollNo)) {
      alert(`Student with Roll No ${rollNo} already exists.`);
      return;
    }

    db.students.push({ rollNo, name, email, dept, sem, cgpa, attendance });

    // Seed dummy marks for assigned CSE courses
    db.subjects.filter(s => s.dept === dept).forEach(sub => {
      db.marks.push({
        rollNo,
        subjectCode: sub.code,
        ut1: 20,
        ut2: 21,
        ut3: 19,
        assignment: 18,
        lab: 17,
        viva: 8
      });
    });

    saveDatabase(db);
    this.closeModal();
    this.showToast(`Student ${name} (${rollNo}) added successfully!`, "success");
    this.renderCurrentView();
  },

  deleteStudent(rollNo) {
    if (!confirm(`Are you sure you want to remove student ${rollNo}? All associated mark records will be deleted.`)) return;
    db.students = db.students.filter(s => s.rollNo !== rollNo);
    db.marks = db.marks.filter(m => m.rollNo !== rollNo);
    saveDatabase(db);
    this.showToast(`Student ${rollNo} removed from database.`, "warning");
    this.renderCurrentView();
  },

  deleteFaculty(id) {
    if (!confirm(`Delete faculty member ${id}?`)) return;
    db.faculty = db.faculty.filter(f => f.id !== id);
    saveDatabase(db);
    this.showToast(`Faculty ${id} deleted.`, "warning");
    this.renderCurrentView();
  },

  deleteSubject(code) {
    if (!confirm(`Delete subject ${code}? Associated marks will be removed.`)) return;
    db.subjects = db.subjects.filter(s => s.code !== code);
    db.marks = db.marks.filter(m => m.subjectCode !== code);
    saveDatabase(db);
    this.showToast(`Subject ${code} removed.`, "warning");
    this.renderCurrentView();
  },

  openAddFacultyModal() {
    const modalBackdrop = document.getElementById("modal-container");
    modalBackdrop.innerHTML = `
      <div class="modal-box">
        <div class="modal-header">
          <div class="card-title">+ Add Faculty Member</div>
          <button class="btn-close" onclick="App.closeModal()">✕</button>
        </div>
        <div class="modal-body">
          <form id="add-faculty-form" onsubmit="event.preventDefault(); App.saveNewFaculty();">
            <div class="form-group">
              <label class="form-label">Faculty ID</label>
              <input type="text" id="new-fac-id" class="input-control" placeholder="e.g. FAC05" required style="width:100%;">
            </div>
            <div class="form-group">
              <label class="form-label">Full Name & Title</label>
              <input type="text" id="new-fac-name" class="input-control" placeholder="e.g. Dr. Priya Venkatesh" required style="width:100%;">
            </div>
            <div class="form-group">
              <label class="form-label">Designation</label>
              <input type="text" id="new-fac-desig" class="input-control" placeholder="e.g. Associate Professor" value="Assistant Professor" required style="width:100%;">
            </div>
            <div class="form-group">
              <label class="form-label">Email Address</label>
              <input type="email" id="new-fac-email" class="input-control" placeholder="e.g. prof.priya@college.edu" required style="width:100%;">
            </div>
            <div class="form-group">
              <label class="form-label">Department</label>
              <select id="new-fac-dept" class="input-control" style="width:100%;">
                <option value="CSE">CSE</option>
                <option value="IT">IT</option>
                <option value="ECE">ECE</option>
              </select>
            </div>
            <div class="form-group">
              <label class="form-label">Assigned Subjects (comma separated codes)</label>
              <input type="text" id="new-fac-subs" class="input-control" placeholder="e.g. CS601, CS602" value="CS601" style="width:100%;">
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button class="btn btn-secondary" onclick="App.closeModal()">Cancel</button>
          <button class="btn btn-primary" onclick="document.getElementById('add-faculty-form').requestSubmit()">Save Faculty</button>
        </div>
      </div>
    `;
    modalBackdrop.classList.add("open");
  },

  saveNewFaculty() {
    const id = document.getElementById("new-fac-id").value.trim().toUpperCase();
    const name = document.getElementById("new-fac-name").value.trim();
    const designation = document.getElementById("new-fac-desig").value.trim();
    const email = document.getElementById("new-fac-email").value.trim();
    const dept = document.getElementById("new-fac-dept").value;
    const subjects = document.getElementById("new-fac-subs").value.split(",").map(s => s.trim().toUpperCase()).filter(s => s.length > 0);

    if (db.faculty.some(f => f.id === id)) {
      alert(`Faculty member with ID ${id} already exists.`);
      return;
    }

    db.faculty.push({ id, name, designation, email, dept, subjects });
    saveDatabase(db);
    this.closeModal();
    this.showToast(`Faculty ${name} (${id}) added successfully!`, "success");
    this.renderCurrentView();
  },

  openAddSubjectModal() {
    const modalBackdrop = document.getElementById("modal-container");
    modalBackdrop.innerHTML = `
      <div class="modal-box">
        <div class="modal-header">
          <div class="card-title">+ Add New Curriculum Subject</div>
          <button class="btn-close" onclick="App.closeModal()">✕</button>
        </div>
        <div class="modal-body">
          <form id="add-subject-form" onsubmit="event.preventDefault(); App.saveNewSubject();">
            <div class="form-group">
              <label class="form-label">Subject Code</label>
              <input type="text" id="new-sub-code" class="input-control" placeholder="e.g. CS605" required style="width:100%;">
            </div>
            <div class="form-group">
              <label class="form-label">Course Title</label>
              <input type="text" id="new-sub-name" class="input-control" placeholder="e.g. Artificial Intelligence & Expert Systems" required style="width:100%;">
            </div>
            <div style="display:grid; grid-template-columns: 1fr 1fr 1fr; gap:1rem;">
              <div class="form-group">
                <label class="form-label">Department</label>
                <select id="new-sub-dept" class="input-control" style="width:100%;">
                  <option value="CSE">CSE</option>
                  <option value="IT">IT</option>
                  <option value="ECE">ECE</option>
                </select>
              </div>
              <div class="form-group">
                <label class="form-label">Semester</label>
                <input type="number" id="new-sub-sem" class="input-control" value="6" min="1" max="8" style="width:100%;">
              </div>
              <div class="form-group">
                <label class="form-label">Credits</label>
                <input type="number" id="new-sub-credits" class="input-control" value="3" min="1" max="6" style="width:100%;">
              </div>
            </div>
            <div class="form-group">
              <label class="form-label">Assign Faculty Instructor</label>
              <select id="new-sub-fac" class="input-control" style="width:100%;">
                ${db.faculty.map(f => `<option value="${f.id}">${f.name} (${f.id})</option>`).join("")}
              </select>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button class="btn btn-secondary" onclick="App.closeModal()">Cancel</button>
          <button class="btn btn-primary" onclick="document.getElementById('add-subject-form').requestSubmit()">Create Subject</button>
        </div>
      </div>
    `;
    modalBackdrop.classList.add("open");
  },

  saveNewSubject() {
    const code = document.getElementById("new-sub-code").value.trim().toUpperCase();
    const name = document.getElementById("new-sub-name").value.trim();
    const dept = document.getElementById("new-sub-dept").value;
    const sem = parseInt(document.getElementById("new-sub-sem").value, 10);
    const credits = parseInt(document.getElementById("new-sub-credits").value, 10);
    const facultyId = document.getElementById("new-sub-fac").value;

    if (db.subjects.some(s => s.code === code)) {
      alert(`Subject with code ${code} already exists.`);
      return;
    }

    db.subjects.push({ code, name, dept, sem, credits, facultyId });

    db.students.filter(s => s.dept === dept).forEach(st => {
      db.marks.push({
        rollNo: st.rollNo,
        subjectCode: code,
        ut1: 20,
        ut2: 21,
        ut3: 20,
        assignment: 18,
        lab: 18,
        viva: 8
      });
    });

    saveDatabase(db);
    this.closeModal();
    this.showToast(`Subject ${code} (${name}) created successfully!`, "success");
    this.renderCurrentView();
  },

  closeModal() {
    const modalBackdrop = document.getElementById("modal-container");
    if (modalBackdrop) modalBackdrop.classList.remove("open");
  },

  // ==========================================
  // EXPORTS & CSV UTILITIES
  // ==========================================
  downloadSampleCsv() {
    const templateContent = `RollNo,StudentName,UT1_25,UT2_25,UT3_25,Assignment_20,Lab_20,Viva_10\nCS202401,Karthik Raman,22,24,20,19,18,9\nCS202402,Priya Sundaram,24,25,23,20,19,10\nCS202403,Arun Kumar,14,16,15,14,15,6\nCS202404,Divya Balan,19,21,18,17,16,8\nCS202405,Siddharth Menon,11,13,10,12,11,5`;
    this.triggerDownloadBlob(templateContent, "EduGrade_Sample_Marks_Template.csv");
  },

  exportStudentCSV(rollNo) {
    const student = db.students.find(s => s.rollNo === rollNo);
    const sMarks = db.marks.filter(m => m.rollNo === rollNo);

    let csv = `RollNo,Name,SubjectCode,UT1_25,UT2_25,UT3_25,Best2_25,Assignment_20,Lab_20,Viva_10,InternalTotal_100,Grade\n`;
    sMarks.forEach(m => {
      const calc = computeDetailedInternalMark(m);
      csv += `${m.rollNo},"${student?.name || ''}",${m.subjectCode},${m.ut1},${m.ut2},${m.ut3},${calc.best2},${m.assignment},${m.lab},${m.viva},${calc.total},${calc.grade}\n`;
    });

    this.triggerDownloadBlob(csv, `${rollNo}_Internal_Marks_Sheet.csv`);
  },

  exportSubjectCSV(subjectCode) {
    const sMarks = db.marks.filter(m => m.subjectCode === subjectCode);
    let csv = `SubjectCode,RollNo,StudentName,UT1_25,UT2_25,UT3_25,Best2_25,Assignment_20,Lab_20,Viva_10,InternalTotal_100,Grade,Attendance\n`;

    sMarks.forEach(m => {
      const s = db.students.find(st => st.rollNo === m.rollNo);
      const calc = computeDetailedInternalMark(m);
      csv += `${subjectCode},${m.rollNo},"${s?.name || ''}",${m.ut1},${m.ut2},${m.ut3},${calc.best2},${m.assignment},${m.lab},${m.viva},${calc.total},${calc.grade},${s?.attendance || 80}\n`;
    });

    this.triggerDownloadBlob(csv, `${subjectCode}_Master_Tabulation.csv`);
  },

  exportMasterLedgerCSV() {
    let csv = `RollNo,StudentName,Department,Semester,CGPA,Attendance,SubjectCode,InternalMark,Grade\n`;
    db.marks.forEach(m => {
      const s = db.students.find(st => st.rollNo === m.rollNo);
      const calc = computeDetailedInternalMark(m);
      csv += `${m.rollNo},"${s?.name || ''}",${s?.dept || 'CSE'},${s?.sem || 6},${s?.cgpa || 8.0},${s?.attendance || 85},${m.subjectCode},${calc.total},${calc.grade}\n`;
    });
    this.triggerDownloadBlob(csv, `College_Dean_Master_Ledger.csv`);
  },

  triggerDownloadBlob(content, filename) {
    const blob = new Blob([content], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", filename);
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  },

  printMarkSheet() {
    window.print();
  },

  resetDatabaseDefaults() {
    if (!confirm("Reset database to initial demo values? Any additions or edits will be restored to standard showcase state.")) return;
    localStorage.removeItem(DB_STORAGE_KEY);
    db = loadDatabase();
    this.showToast("Database restored to standard demo dataset.", "info");
    this.renderCurrentView();
  },

  showToast(message, type = "info") {
    const container = document.getElementById("toast-container");
    if (!container) return;

    const toast = document.createElement("div");
    toast.className = `toast ${type}`;
    let icon = "ℹ️";
    if (type === "success") icon = "✅";
    if (type === "danger") icon = "❌";
    if (type === "warning") icon = "⚠️";

    toast.innerHTML = `<span>${icon}</span><span>${message}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = "0";
      toast.style.transform = "translateY(10px)";
      toast.style.transition = "all 0.3s ease";
      setTimeout(() => toast.remove(), 300);
    }, 3500);
  }
};

// Auto-run on DOM ready
document.addEventListener("DOMContentLoaded", () => {
  App.init();
});
