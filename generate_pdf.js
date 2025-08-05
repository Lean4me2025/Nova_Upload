
function downloadPDF() {
  const element = document.getElementById("report-content");
  html2pdf().from(element).save("Nova_Report.pdf");
}
