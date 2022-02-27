export default  function Logout() {
    if (localStorage.getItem('token')) {
        localStorage.clear();
    }
    document.location.href="/"; 
}