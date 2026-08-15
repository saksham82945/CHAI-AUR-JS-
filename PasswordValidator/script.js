// -- DOM References ----------------------------------------------------------
const form            = document.getElementById("registrationForm");
const emailInput      = document.getElementById("email");
const passwordInput   = document.getElementById("password");
const confirmInput    = document.getElementById("confirmPassword");

const emailError      = document.getElementById("emailError");
const passwordError   = document.getElementById("passwordError");
const confirmError    = document.getElementById("confirmPasswordError");
const successMessage  = document.getElementById("successMessage");

// -- Helpers ------------------------------------------------------------------

/** Mark an input as invalid: red border + show error message. */
function showError(input, errorEl, message) {
  input.classList.remove("input-success");
  input.classList.add("input-error");
  errorEl.textContent = message;
}

/** Mark an input as valid: green border + clear error message. */
function showSuccess(input, errorEl) {
  input.classList.remove("input-error");
  input.classList.add("input-success");
  errorEl.textContent = "";
}

// -- Validators ---------------------------------------------------------------

function validateEmail() {
  const value = emailInput.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (value === "") {
    showError(emailInput, emailError, "Email is required.");
    return false;
  }
  if (!emailRegex.test(value)) {
    showError(emailInput, emailError, "Please enter a valid email address.");
    return false;
  }

  showSuccess(emailInput, emailError);
  return true;
}

function validatePassword() {
  const value = passwordInput.value;

  if (value === "") {
    showError(passwordInput, passwordError, "Password is required.");
    return false;
  }
  if (value.length < 8) {
    showError(passwordInput, passwordError, "Password must be at least 8 characters.");
    return false;
  }
  if (!/[A-Z]/.test(value)) {
    showError(passwordInput, passwordError, "Password must contain at least one uppercase letter.");
    return false;
  }
  if (!/[a-z]/.test(value)) {
    showError(passwordInput, passwordError, "Password must contain at least one lowercase letter.");
    return false;
  }
  if (!/[0-9]/.test(value)) {
    showError(passwordInput, passwordError, "Password must contain at least one number.");
    return false;
  }
  if (!/[!@#$%^&*()\-_=+\[\]{};':"\\|,.<>/?]/.test(value)) {
    showError(passwordInput, passwordError, "Password must contain at least one special character.");
    return false;
  }

  showSuccess(passwordInput, passwordError);
  return true;
}

function validateConfirmPassword() {
  const value = confirmInput.value;

  if (value === "") {
    showError(confirmInput, confirmError, "Please confirm your password.");
    return false;
  }
  if (value !== passwordInput.value) {
    showError(confirmInput, confirmError, "Passwords do not match.");
    return false;
  }

  showSuccess(confirmInput, confirmError);
  return true;
}

// -- Real-time Validation -----------------------------------------------------
emailInput.addEventListener("input", validateEmail);

passwordInput.addEventListener("input", () => {
  validatePassword();
  if (confirmInput.value !== "") validateConfirmPassword();
});

confirmInput.addEventListener("input", validateConfirmPassword);

// -- Form Submit --------------------------------------------------------------
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const isEmailValid    = validateEmail();
  const isPasswordValid = validatePassword();
  const isConfirmValid  = validateConfirmPassword();

  if (isEmailValid && isPasswordValid && isConfirmValid) {
    successMessage.style.display = "block";
    form.reset();

    [emailInput, passwordInput, confirmInput].forEach((el) => {
      el.classList.remove("input-success", "input-error");
    });

    setTimeout(() => {
      successMessage.style.display = "none";
    }, 3000);
  } else {
    successMessage.style.display = "none";
  }
});

// Hide success message on page load
successMessage.style.display = "none";
