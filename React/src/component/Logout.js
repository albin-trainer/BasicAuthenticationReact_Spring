function Logout(){
     localStorage.setItem("isLoggedIn","false");
     localStorage.removeItem("username");
     localStorage.removeItem("password")
    return <div>
        Logged out
    </div>
}
export default Logout;