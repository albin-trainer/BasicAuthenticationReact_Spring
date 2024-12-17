import { Route, Link,Routes } from "react-router-dom";
import Authours from "./Authours";
import AuthourForm from "./AuthorForm";
import BookForm from "./BookForm";
import Login from "./Login";
import Logout from "./Logout";

function Menu(){

    return<div>
                <nav class="navbar navbar-expand-lg navbar-light bg-primary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <Link  class="nav-link" to="login">Login</Link>
        </li>
        { localStorage.getItem("isLoggedIn")=="true" ? <>
        <li class="nav-item">
          <Link  class="nav-link" to="authourForm/0">NewAuthour</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="authours">Authours</Link>
        </li>
      
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           Books
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><Link class="dropdown-item"  to="/bookForm">Add Book</Link></li>
            <li><a class="dropdown-item" href="#">Display All Books</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="logout">Logout</Link>
        </li>
      
        </>
        :
        <>Login</>
        }
      </ul>
    </div>
  </div>
</nav>
  <Routes>
  <Route path="/login" element={ <Login/>}/>
   <Route path="/authours" element={ <Authours/>}/>
   <Route path="/authourForm/:id" element={<AuthourForm/>}/>
   <Route path="/bookForm" element={<BookForm/>}/>
   <Route path="/logout" element={<Logout/>}/>
   </Routes>
        </div>
}
export default Menu;