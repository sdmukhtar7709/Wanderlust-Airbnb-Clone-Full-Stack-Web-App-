(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })

  // Auto dismiss flash messages after 3 seconds
  const flashAlerts = document.querySelectorAll('.alert-dismissible');
  if (flashAlerts.length) {
    setTimeout(() => {
      flashAlerts.forEach(alert => {
        const bsAlert = bootstrap.Alert.getOrCreateInstance(alert);
        bsAlert.close();
      });
    }, 3000);
  }

  // Hide wishlist count badge on hamburger when sidebar opens or button is clicked
  const sidebarEl = document.getElementById('userSidebar');
  const hamburgerBadge = document.querySelector('.hamburger-badge');
  const hamburgerToggle = document.querySelector('.hamburger-btn');
  if (sidebarEl && hamburgerBadge) {
    if (hamburgerToggle) {
      hamburgerToggle.addEventListener('click', () => {
        hamburgerBadge.classList.add('d-none');
      });
    }
    sidebarEl.addEventListener('shown.bs.offcanvas', () => {
      hamburgerBadge.classList.add('d-none');
    });
    sidebarEl.addEventListener('hidden.bs.offcanvas', () => {
      hamburgerBadge.classList.remove('d-none');
    });
  }
})()