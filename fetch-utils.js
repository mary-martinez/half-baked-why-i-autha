// Enter Supabase Information
const SUPABASE_URL = 'https://nxkfcrgevcuksvdnaugc.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im54a2ZjcmdldmN1a3N2ZG5hdWdjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDQzNDE0NjAsImV4cCI6MTk1OTkxNzQ2MH0.9e3rnFUxMChSkwzJQcBImTDSwY_4VDtfmLDUZ-dY7gc';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export function getUser() {
    return client.auth.session() && client.auth.session().user;
}

export async function signupUser(email, password) {
    const newUser = { email, password };
    // console.log(newUser);
    const resp = await client.auth.signUp(newUser);
    // console.log(resp);
    // console.log(resp.user);
    return resp.user;
}

export async function signInUser(email, password) {
    const user = {email, password};
    const resp = await client.auth.signIn
}

export async function checkAuth() { }

export async function redirectIfLoggedIn() { }

export async function logout() { }

