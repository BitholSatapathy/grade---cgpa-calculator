// Final Grade Modal Logic (multi-subject)
document.addEventListener('DOMContentLoaded', function() {
  const btn = document.getElementById('finalGradeBtn');
  if (btn) btn.onclick = function() {
    document.getElementById('finalGradeModal').style.display = 'flex';
    updateFGTable();
  };
});

function closeFinalGradeModal() {
  document.getElementById('finalGradeModal').style.display = 'none';
  document.getElementById('fgResult').innerHTML = '';
  document.getElementById('fgSubjectName').value = '';
  document.getElementById('fgSubjectCredits').value = '';
  document.getElementById('fgSubjectGrade').value = 'S';
  fgSubjects = [];
  updateFGTable();
}

function addFGSubject() {
  const name = document.getElementById('fgSubjectName').value.trim();
  const credits = parseFloat(document.getElementById('fgSubjectCredits').value);
  const grade = document.getElementById('fgSubjectGrade').value;
  const resultDiv = document.getElementById('fgResult');

  if (!name || isNaN(credits) || credits <= 0 || !grade) {
    resultDiv.innerHTML = '<span style="color:red">Please enter valid values for all fields.</span>';
    return;
  }
  if (![1, 1.5, 2, 3, 4].includes(credits)) {
    resultDiv.innerHTML = '<span style="color:red">Credits must be one of: 1, 1.5, 2, 3, 4.</span>';
    return;
  }

  fgSubjects.push({ name, credits, grade });
  document.getElementById('fgSubjectName').value = '';
  document.getElementById('fgSubjectCredits').value = '';
  document.getElementById('fgSubjectGrade').value = 'S';
  resultDiv.innerHTML = '';
  updateFGTable();
}

function updateFGTable() {
  const tbody = document.querySelector('#fgSummaryTable tbody');
  if (!tbody) return;
  tbody.innerHTML = '';
  fgSubjects.forEach((sub, idx) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td style='padding:12px;border:1px solid #333;'>${sub.name}</td>
      <td style='padding:12px;border:1px solid #333;'>${sub.credits}</td>
      <td style='padding:12px;border:1px solid #333;'>${sub.grade}</td>
      <td style='padding:12px;border:1px solid #333;'><button onclick='removeFGSubject(${idx})' style='padding:6px 12px;background:#3a3af6;color:#fff;border:none;border-radius:6px;font-size:1rem;cursor:pointer;'>Delete</button></td>
    `;
    tbody.appendChild(row);
  });
}

function removeFGSubject(idx) {
  fgSubjects.splice(idx, 1);
  updateFGTable();
}

function calculateFGGPA() {
  const resultDiv = document.getElementById('fgResult');
  if (fgSubjects.length === 0) {
    resultDiv.innerHTML = '<span style="color:red">Add at least one subject.</span>';
    return;
  }
  let totalPoints = 0, totalCredits = 0;
  fgSubjects.forEach(sub => {
    totalPoints += (gradePoints[sub.grade] || 0) * sub.credits;
    totalCredits += sub.credits;
  });
  const gpa = totalCredits ? (totalPoints / totalCredits).toFixed(2) : 0;
  resultDiv.innerHTML = `<b>Final GPA:</b> ${gpa}`;
}
// Final Grade Modal Logic (multi-subject)
let fgSubjects = [];

document.addEventListener('DOMContentLoaded', function() {
  const btn = document.getElementById('finalGradeBtn');
  if (btn) btn.onclick = function() {
    document.getElementById('finalGradeModal').style.display = 'flex';
    updateFGTable();
  };
});

function closeFinalGradeModal() {
  document.getElementById('finalGradeModal').style.display = 'none';
  document.getElementById('fgResult').innerHTML = '';
  document.getElementById('fgSubjectName').value = '';
  document.getElementById('fgSubjectCredits').value = '';
  document.getElementById('fgSubjectGrade').value = 'S';
  fgSubjects = [];
  updateFGTable();
}

function addFGSubject() {
  const name = document.getElementById('fgSubjectName').value.trim();
  const credits = parseFloat(document.getElementById('fgSubjectCredits').value);
  const grade = document.getElementById('fgSubjectGrade').value;
  const resultDiv = document.getElementById('fgResult');

  if (!name || isNaN(credits) || credits <= 0 || !grade) {
    resultDiv.innerHTML = '<span style="color:red">Please enter valid values for all fields.</span>';
    return;
  }
  if (![1, 1.5, 2, 3, 4].includes(credits)) {
    resultDiv.innerHTML = '<span style="color:red">Credits must be one of: 1, 1.5, 2, 3, 4.</span>';
    return;
  }

  fgSubjects.push({ name, credits, grade });
  document.getElementById('fgSubjectName').value = '';
  document.getElementById('fgSubjectCredits').value = '';
  document.getElementById('fgSubjectGrade').value = 'S';
  resultDiv.innerHTML = '';
  updateFGTable();
}

function updateFGTable() {
  const tbody = document.querySelector('#fgSummaryTable tbody');
  if (!tbody) return;
  tbody.innerHTML = '';
  fgSubjects.forEach((sub, idx) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td style='padding:6px;border:1px solid #ddd;'>${sub.name}</td>
      <td style='padding:6px;border:1px solid #ddd;'>${sub.credits}</td>
      <td style='padding:6px;border:1px solid #ddd;'>${sub.grade}</td>
      <td style='padding:6px;border:1px solid #ddd;'><button onclick='removeFGSubject(${idx})' style='padding:2px 8px;'>Delete</button></td>
    `;
    tbody.appendChild(row);
  });
}

function removeFGSubject(idx) {
  fgSubjects.splice(idx, 1);
  updateFGTable();
}

function calculateFGGPA() {
  const resultDiv = document.getElementById('fgResult');
  if (fgSubjects.length === 0) {
    resultDiv.innerHTML = '<span style="color:red">Add at least one subject.</span>';
    return;
  }
  let totalPoints = 0, totalCredits = 0;
  fgSubjects.forEach(sub => {
    totalPoints += (gradePoints[sub.grade] || 0) * sub.credits;
    totalCredits += sub.credits;
  });
  const gpa = totalCredits ? (totalPoints / totalCredits).toFixed(2) : 0;
  resultDiv.innerHTML = `<b>Final GPA:</b> ${gpa}`;
}
// Final Grade Modal Logic
document.addEventListener('DOMContentLoaded', function() {
  const btn = document.getElementById('finalGradeBtn');
  if (btn) btn.onclick = function() {
    document.getElementById('finalGradeModal').style.display = 'flex';
  };
});

function closeFinalGradeModal() {
  document.getElementById('finalGradeModal').style.display = 'none';
  document.getElementById('fgResult').innerHTML = '';
  document.getElementById('fgSubjectName').value = '';
  document.getElementById('fgSubjectCredits').value = '';
  document.getElementById('fgSubjectGrade').value = 'S';
}

function calculateFinalGrade() {
  const name = document.getElementById('fgSubjectName').value;
  const credits = parseFloat(document.getElementById('fgSubjectCredits').value);
  const grade = document.getElementById('fgSubjectGrade').value;
  const resultDiv = document.getElementById('fgResult');

  if (!name || isNaN(credits) || credits <= 0 || !grade) {
    resultDiv.innerHTML = '<span style="color:red">Please enter valid values for all fields.</span>';
    return;
  }
  if (![1, 1.5, 2, 3, 4].includes(credits)) {
    resultDiv.innerHTML = '<span style="color:red">Credits must be one of: 1, 1.5, 2, 3, 4.</span>';
    return;
  }

  const gradeValue = gradePoints[grade] || 0;
  const finalGrade = (gradeValue * credits).toFixed(2);
  resultDiv.innerHTML = `<b>Subject:</b> ${name}<br><b>Credits:</b> ${credits}<br><b>Grade:</b> ${grade}<br><b>Final Grade Value:</b> ${finalGrade}`;
}
// Download PDF of summary table and GPA
function downloadPDF() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  const semesterName = document.getElementById('semesterName').value || '';
  doc.setFontSize(18);
  doc.text(`Semester: ${semesterName}`, 14, 16);
  doc.setFontSize(16);
  doc.text('Grade Summary', 14, 28);

  // Table headers
  const headers = [['Subject', 'Midterm', 'Internal', 'Attendance', 'Endterm', 'Final Marks', 'Grade', 'Credits']];
  // Table rows
  const rows = subjects.map(sub => [
    sub.name,
    sub.mid,
    sub.internal,
    sub.att,
    sub.end,
    sub.finalMarks.toFixed(2),
    sub.grade,
    sub.credits
  ]);

  // Add table
  doc.autoTable({
    head: headers,
    body: rows,
    startY: 34
  });

  // Add GPA
  const gpa = document.getElementById('gpaValue').innerText;
  doc.setFontSize(14);
  doc.text(`GPA: ${gpa}`, 14, doc.lastAutoTable.finalY + 10);

  doc.save('grade_summary.pdf');
}
let subjects = [];
const gradePoints = { S:10, A:9, B:8, C:7, D:6, E:5, F:0 };

function calculateFinal(midterm, internal, attendance, endterm) {
  let attMarks = 0;
  if (attendance >= 95) attMarks = 5;
  else if (attendance >= 90) attMarks = 4;
  else if (attendance >= 85) attMarks = 3;
  else if (attendance >= 80) attMarks = 2;
  else if (attendance >= 75) attMarks = 1;

  return (midterm * 0.3) + internal + attMarks + (endterm * 0.3);
}

function getGrade(mark, avg) {
  if (mark < 40) return 'F';
  if (mark > avg + 20) return 'S';
  if (mark > avg + 10) return 'A';
  if (mark >= avg - 5 && mark <= avg + 5) return 'B';
  if (mark >= avg - 15) return 'C';
  if (mark >= avg - 25) return 'D';
  return 'E';
}

function addSubject() {

  const name = document.getElementById('subjectName').value;
  const mid = parseFloat(document.getElementById('midterm').value);
  const internal = parseFloat(document.getElementById('internal').value);
  const att = parseFloat(document.getElementById('attendance').value);
  const end = parseFloat(document.getElementById('endterm').value);
  const avg = parseFloat(document.getElementById('average').value);
  const credits = parseFloat(document.getElementById('credits').value);

  // Validation
  if (isNaN(mid) || mid < 0 || mid > 50) {
    alert('Midterm must be between 0 and 50.');
    return;
  }
  if (isNaN(internal) || internal < 0 || internal > 35) {
    alert('Internal must be between 0 and 35.');
    return;
  }
  if (isNaN(att) || att < 0 || att > 100) {
    alert('Attendance must be between 0 and 100.');
    return;
  }
  if (isNaN(end) || end < 0 || end > 100) {
    alert('Endterm must be between 0 and 100.');
    return;
  }
  if (isNaN(avg) || avg < 0 || avg > 100) {
    alert('Class average must be between 0 and 100.');
    return;
  }
  if (![1, 1.5, 2, 3, 4].includes(credits)) {
    alert('Credits must be one of: 1, 1.5, 2, 3, 4.');
    return;
  }

  const finalMarks = calculateFinal(mid, internal, att, end);
  const grade = getGrade(finalMarks, avg);

  subjects.push({ name, mid, internal, att, end, finalMarks, grade, credits });

  clearInputs();
  updateTable();
  updateGPA();
}

function clearInputs() {
  document.getElementById('subjectName').value = '';
  document.getElementById('midterm').value = '';
  document.getElementById('internal').value = '';
  document.getElementById('attendance').value = '';
  document.getElementById('endterm').value = '';
  document.getElementById('average').value = '';
  document.getElementById('credits').value = '';
}

function updateTable() {
  const tbody = document.querySelector('#summaryTable tbody');
  tbody.innerHTML = '';

  subjects.forEach((sub, index) => {
    const row = document.createElement('tr');

    row.innerHTML = `
      <td>${sub.name}</td>
      <td>${sub.mid}</td>
      <td>${sub.internal}</td>
      <td>${sub.att}</td>
      <td>${sub.end}</td>
      <td>${sub.finalMarks.toFixed(2)}</td>
      <td>${sub.grade}</td>
      <td>${sub.credits}</td>
      <td>
        <button onclick="editSubjectRow(${index}, this)">Edit</button>
        <button onclick="deleteSubject(${index})">Delete</button>
      </td>
    `;

    tbody.appendChild(row);
  });
}

function editSubjectRow(index, btn) {
  const row = btn.closest('tr');
  const sub = subjects[index];

  row.innerHTML = `
    <td><input value="${sub.name}" id="editName${index}"></td>
    <td><input type="number" value="${sub.mid}" id="editMid${index}"></td>
    <td><input type="number" value="${sub.internal}" id="editInt${index}"></td>
    <td><input type="number" value="${sub.att}" id="editAtt${index}"></td>
    <td><input type="number" value="${sub.end}" id="editEnd${index}"></td>
    <td>${sub.finalMarks.toFixed(2)}</td>
    <td>${sub.grade}</td>
    <td><input type="number" value="${sub.credits}" id="editCred${index}"></td>
    <td>
      <button onclick="saveEdit(${index})">Save</button>
      <button onclick="updateTable()">Cancel</button>
    </td>
  `;
}

function saveEdit(index) {
  const name = document.getElementById(`editName${index}`).value;
  const mid = parseFloat(document.getElementById(`editMid${index}`).value);
  const internal = parseFloat(document.getElementById(`editInt${index}`).value);
  const att = parseFloat(document.getElementById(`editAtt${index}`).value);
  const end = parseFloat(document.getElementById(`editEnd${index}`).value);
  const credits = parseFloat(document.getElementById(`editCred${index}`).value);

  // Validation
  if (isNaN(mid) || mid < 0 || mid > 50) {
    alert('Midterm must be between 0 and 50.');
    return;
  }
  if (isNaN(internal) || internal < 0 || internal > 35) {
    alert('Internal must be between 0 and 35.');
    return;
  }
  if (isNaN(att) || att < 0 || att > 100) {
    alert('Attendance must be between 0 and 100.');
    return;
  }
  if (isNaN(end) || end < 0 || end > 100) {
    alert('Endterm must be between 0 and 100.');
    return;
  }
  if (![1, 1.5, 2, 3, 4].includes(credits)) {
    alert('Credits must be one of: 1, 1.5, 2, 3, 4.');
    return;
  }

  const finalMarks = calculateFinal(mid, internal, att, end);
  const avg = subjects.reduce((a, b) => a + b.finalMarks, 0) / subjects.length;
  const grade = getGrade(finalMarks, avg);

  subjects[index] = { name, mid, internal, att, end, finalMarks, grade, credits };

  updateTable();
  updateGPA();
}

function deleteSubject(index) {
  subjects.splice(index, 1);
  updateTable();
  updateGPA();
}

function updateGPA() {
  let totalPoints = 0, totalCredits = 0;
  subjects.forEach(sub => {
    totalPoints += (gradePoints[sub.grade] || 0) * sub.credits;
    totalCredits += sub.credits;
  });
  const gpa = totalCredits ? (totalPoints / totalCredits).toFixed(2) : 0;
  document.getElementById('gpaValue').innerText = gpa;
}
