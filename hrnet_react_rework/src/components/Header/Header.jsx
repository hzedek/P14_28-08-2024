import "./Header.scss";

function Header() {
   return (
      <header id="WHealth-Header">
         <div id="WHealth-Logo-Container_Employees">
            <img
               id="WHealth-Logo"
               src="./src/assets/WHealthLogoEdited_lower.png"
               alt="Logo WealthHealth"
               onClick={() => (location.href = "/")}
            />
         </div>
         <a id="WHealth-LinkBtn" href="/employees">
            View Employees
         </a>
      </header>
   );
}

export default Header;
