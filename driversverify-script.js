document.addEventListener('DOMContentLoaded', () => {
  const otpBoxes = document.querySelectorAll('.otp-box');
  const countdownEl = document.getElementById('countdown');
  const resendBtn = document.getElementById('resendBtn');
  const otpVerifyForm = document.getElementById('otpVerifyForm');
  const userEmailDisplay = document.getElementById('userEmailDisplay');

  // Load saved driver email or fallback name from localStorage if available
  const savedDriverData = JSON.parse(localStorage.getItem('zarideDriverData') || '{}');
  if (savedDriverData.email) {
    userEmailDisplay.textContent = savedDriverData.email;
  }

  // --- OTP Box Auto-Navigation Logic ---
  otpBoxes.forEach((box, index) => {
    box.addEventListener('input', (e) => {
      const val = e.target.value;
      if (val && index < otpBoxes.length - 1) {
        otpBoxes[index + 1].focus();
      }
    });

    box.addEventListener('keydown', (e) => {
      if (e.key === 'Backspace' && !box.value && index > 0) {
        otpBoxes[index - 1].focus();
      }
    });
  });

  // --- Countdown Timer Logic (5 Minutes) ---
  let totalSeconds = 300; // 5 minutes
  let timerInterval;

  function startTimer() {
    clearInterval(timerInterval);
    totalSeconds = 300;
    resendBtn.disabled = true;

    timerInterval = setInterval(() => {
      if (totalSeconds <= 0) {
        clearInterval(timerInterval);
        countdownEl.textContent = '00:00';
        resendBtn.disabled = false;
        return;
      }

      totalSeconds--;
      const minutes = Math.floor(totalSeconds / 60);
      const seconds = totalSeconds % 60;
      countdownEl.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }, 1000);
  }

  startTimer();

  // Resend Button Click Action
  resendBtn.addEventListener('click', () => {
    alert('A new OTP has been requested. Note that inspection details must be completed first.');
    startTimer();
  });

  // --- Form Submission Handling ---
  otpVerifyForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let enteredOtp = '';
    otpBoxes.forEach(box => enteredOtp += box.value);

    if (enteredOtp.length < 6) {
      alert('Please enter the complete 6-digit verification code.');
      return;
    }

    // Process verification completion
    localStorage.setItem('driverEmailVerified', 'true');
    alert('Verification submitted! Once your physical vehicle inspection is completed, your account will be fully activated.');
    
    // Redirect to dashboard or home page
    window.location.href = 'just-dashboard.html';
  });
});

