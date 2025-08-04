
document.getElementById('traitForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const traits = Array.from(document.querySelectorAll('input[name="trait"]:checked')).map(cb => cb.value);
  const resultsDiv = document.getElementById('results');
  if (traits.length === 0) {
    resultsDiv.innerHTML = "<p>Please select at least one trait to see career matches.</p>";
    return;
  }
  resultsDiv.innerHTML = "<h3>Career Matches:</h3><ul>" +
    traits.map(trait => "<li>" + trait + "-Driven Career</li>").join("") + "</ul>";
});
