
const Header = () => {
  return (
    <header className="flex justify-between mx-auto">
      <a href="#">
        <img className="w-20" src="/images/logo.svg" alt="Logo" />
      </a>
      <nav>
        <ul className="flex gap-6">
          <li><a className="hover:text-Teal-200" href="#">Features</a></li>
          <li><a className="hover:text-Teal-200" href="#">Team</a></li>
          <li><a className="hover:text-Teal-200" href="#">Sing In</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header