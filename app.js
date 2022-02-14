import { signInUser, signupUser } from './fetch-utils.js';
const signInForm = document.getElementById('sign-in');
const signInEmail = document.getElementById('sign-in-email');
const signInPassword = document.getElementById('sign-in-password');

const signUpForm = document.getElementById('sign-up');
const signUpEmail = document.getElementById('sign-up-email');
const signUpPassword = document.getElementById('sign-up-password');

// Wire up sign in and sign up forms to supabase
signUpForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    // console.log(signUpEmail.value, signUpPassword.value);
    const resp = await signupUser(signUpEmail.value, signUpPassword.value);
    // console.log(resp);

    // Need to redirect to new /other-page/
});

signInForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    // console.log(signInEmail.value, signInPassword.value);
    const resp = await signInUser(signInEmail.value, signInPassword.value);

});;

// Redirect to /other-page on successful auth
// Redirect to /other-page when page loads if user is authenticated
