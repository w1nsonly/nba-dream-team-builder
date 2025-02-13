import "bootstrap/dist/css/bootstrap.min.css";

function Header() {
  return (
        <nav className="navbar navbar-dark bg-primary">
          <div className="container">
            <h1 className="navbar-brand">NBA Dream Team Builder 2016-17</h1>
            <p className="text-white mb-0">
              Build your dream team with real stats!
            </p>
          </div>
        </nav>
  );
}

export default Header;
