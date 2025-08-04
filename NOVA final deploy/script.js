
function showMatches() {
    const checkedTraits = [...document.querySelectorAll('input[name="trait"]:checked')].map(el => el.value);
    const results = document.getElementById('results');
    if (checkedTraits.length === 0) {
        results.innerHTML = "<p>Please select at least one trait to see matches.</p>";
    } else {
        results.innerHTML = "<p>Your selected traits: <strong>" + checkedTraits.join(', ') + "</strong></p>";
    }
}
