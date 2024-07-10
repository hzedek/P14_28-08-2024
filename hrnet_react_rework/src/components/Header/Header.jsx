import "./Header.scss";

function Header() {
   let pathname = location.pathname;

   return (
      <header id="WHealth-Header">
         <img
            id="WHealth-Logo"
            src="./src/assets/WHealthLogoEdited_lower.png"
            alt="Logo WealthHealth"
            onClick={() => (location.href = "/")}
         />
         <a id="WHealth-LinkBtn" href={pathname === "/" ? "/employees" : "/"}>
            {pathname === "/" ? "View Current Employees" : "Home"}
         </a>
      </header>
   );
}

export default Header;
