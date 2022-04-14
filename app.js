const passInput1 = document.querySelector('#user-pass');
const passInput2 = document.querySelector('#confirm-pass');
const passWarning = document.querySelector('#password-warning');

passInput1.addEventListener('input', function (e) {
    if (e.target.value === passInput2.value) {
        passInput1.classList.remove('unmatched');
        passInput2.classList.remove('unmatched');
        passWarning.innerText = '';
    } else if (e.target.value !== passInput2.value && !passInput1.classList.contains('unmatched')) {
        passInput1.classList.add('unmatched');
        passInput2.classList.add('unmatched');
        passWarning.innerText = '* Passwords must match.';
    }
});

passInput2.addEventListener('input', function (e) {
    if (e.target.value === passInput1.value) {
        passInput1.classList.remove('unmatched');
        passInput2.classList.remove('unmatched');
        passWarning.innerText = '';
    } else if (e.target.value !== passInput1.value && !passInput1.classList.contains('unmatched')) {
        passInput1.classList.add('unmatched');
        passInput2.classList.add('unmatched');
        passWarning.innerText = '* Passwords must match.';
    }
});
