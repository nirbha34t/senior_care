// This script.js will be included in all pages where needed

// Save user data from form (used in index.html)
function saveUserData(formId) {
    const form = document.getElementById(formId);
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const data = new FormData(form);
      const user = Object.fromEntries(data.entries());
      localStorage.setItem('user', JSON.stringify(user));
      window.location.href = 'home.html';
    });
  }
  
  // Display user data (used in home.html if needed)
  function displayUserGreeting() {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.name) {
      const greeting = document.createElement('h2');
      greeting.textContent = `Welcome, ${user.name}!`;
      document.body.insertBefore(greeting, document.body.firstChild);
    }
  }
  
  // Simulate health readings (used in monitor.html)
  function simulateHealthReadings() {
    const heartRate = Math.floor(Math.random() * 40) + 60;
    const systolic = Math.floor(Math.random() * 30) + 100;
    const diastolic = Math.floor(Math.random() * 20) + 60;
    const steps = Math.floor(Math.random() * 10000);
  
    document.getElementById('hr').innerText = heartRate;
    document.getElementById('bp').innerText = `${systolic}/${diastolic}`;
    document.getElementById('steps').innerText = steps;
  
    // Save to history
    const history = JSON.parse(localStorage.getItem('history')) || [];
    history.push({
      time: new Date().toLocaleString(),
      hr: heartRate,
      bp: `${systolic}/${diastolic}`,
      steps: steps
    });
    localStorage.setItem('history', JSON.stringify(history));
  
    // Optional: Trigger SOS alert for high heart rate
    if (heartRate > 100) {
      alert("🚨 High Heart Rate Detected! SOS will be triggered.");
    }
  }
  
  // Load history (used in history.html)
  function loadActivityHistory() {
    const history = JSON.parse(localStorage.getItem('history')) || [];
    const container = document.getElementById('history');
    if (!history.length) {
      container.innerHTML = "<p>No history found.</p>";
      return;
    }
  
    container.innerHTML = history.map(entry =>
      `<div>
        <strong>${entry.time}</strong><br>
        HR: ${entry.hr} bpm | BP: ${entry.bp} | Steps: ${entry.steps}
      </div><hr>`
    ).join('');
  }
  
  // SOS function (used in sos.html)
  function sendSOS() {
    alert("🚨 SOS Alert Sent to Ambulance & Relatives (Simulated)");
  }
  
  // Export functions if using modules
  // (You can call these directly in script tags instead for simplicity)
  