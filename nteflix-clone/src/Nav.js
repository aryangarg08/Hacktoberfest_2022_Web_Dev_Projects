import React from 'react'
import "./Nav.css";

function Nav() {

    const [show,handleShow] = React.useState(false);

    React.useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 110) {
                handleShow(true);
            }
            else {
                handleShow(false);
            }
        });

    },[]);

  return (
    <div className={show?"nav nav_filled":"nav"}>
        <img className="nav_logo" src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" 
        alt="Netflix logo" />

        <img className="nav_avatar" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" 
        alt="User logo" />
    </div>
  );
}

export default Nav;