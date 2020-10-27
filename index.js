// Get the modal
const privacyModal = document.getElementById('privacy-act-modal');

// Get the systemDescModal
const systemDescModal = document.getElementById('system-description-modal');

// Get the Privacy Act Statement text that opens respective modal
const privacyAct = document.getElementById('privacy-act');

// Get the System Description text that opens respective modal
const systemDesc = document.getElementById('system-description');

// Get the <span> element that closes the privacy act statement modal
const privacySpan = document.getElementsByClassName('close')[0];

// Get the <span> element that closes the system description modal
const systemDescSpan = document.getElementsByClassName('close')[1];

// Get the button that redirects to ID.me OAuth sign in
const primarySignIn = document.getElementById('primary-signin');

// Get the button that redirects user to create a new ID.me account
const secondarySignIn = document.getElementById('secondary-signin');

// When the user clicks on the Privacy Act Statement text, open the modal
privacyAct.onclick = function () {
  privacyModal.style.display = 'block';
};
privacyAct.onkeypress = function () {
  privacyModal.style.display = 'block';
};

// When the user clicks on the System Description text, open the modal
systemDesc.onclick = function () {
  systemDescModal.style.display = 'block';
};
systemDesc.onkeypress = function () {
  systemDescModal.style.display = 'block';
};

// When the user clicks on <span> (x), close the modal
privacySpan.onclick = function () {
  privacyModal.style.display = 'none';
};

// When the user clicks on <span> (x), close the modal
systemDescSpan.onclick = function () {
  systemDescModal.style.display = 'none';
};


// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target === privacyModal || event.target === systemDescModal) {
    privacyModal.style.display = 'none';
    systemDescModal.style.display = 'none';
  }
};

// When user clicks the ID.me sign in button redirect to https://id.me
primarySignIn.onclick = function () {
  window.location.href = 'https://www.id.me';
};

// When user clicks the create ne ID.me account button redirect to https://id.me
secondarySignIn.onclick = function () {
  window.location.href = 'https://www.id.me';
};
