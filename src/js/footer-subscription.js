import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.getElementById('footerSubscribeForm');

if (form) {
  const emailInput = form.querySelector('input[name="email"]');
  const submitBtn = form.querySelector('button[type="submit"]');

  form.addEventListener('submit', handleSubscribe);

  async function handleSubscribe(event) {
    event.preventDefault();

    const emailValue = emailInput.value.trim();

    if (!isValidEmail(emailValue)) {
      showError('Invalid email address');
      return;
    }

    try {
      submitBtn.disabled = true;

      const response = await axios.post(
        'https://your-energy.b.goit.study/api/subscription',
        { email: emailValue },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.status === 201) {
        showSuccess(response.data.message);
        form.reset();
      }
    } catch (error) {
      if (error.response) {
        showError(error.response.data.message || 'Subscription failed');
      } else {
        showError('Network error. Please try again.');
      }
    } finally {
      submitBtn.disabled = false;
    }
  }

  function isValidEmail(email) {
    const emailRegex = /^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    return emailRegex.test(email);
  }

  function showSuccess(message) {
    iziToast.success({
      title: 'Success',
      message: message,
      position: 'topRight',
      timeout: 5000,
    });
  }

  function showError(message) {
    iziToast.error({
      title: 'Error',
      message: message,
      position: 'topRight',
      timeout: 5000,
    });
  }
}
