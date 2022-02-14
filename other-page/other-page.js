// use checkAuth function to redirect is user not authenticated
// add event listener to the logout button and call logout

import { checkAuth, logout } from '../fetch-utils.js';

const logoutBtn = document.getElementById('logout');

logoutBtn.addEventListener('click', async (e) => {
    console.log('clicking logout button');
    await logout();
    await checkAuth();
});