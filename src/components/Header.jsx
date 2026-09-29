import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header className="flex justify-between items-center py-6 px-[5%] bg-black ">
      <h1 className="logo p-2 text-[1.7rem] font-bold text-white transition-all">LOJA <span className="text-[#a204fd] p-1">GAMER</span></h1>
      <nav>
        <ul className="flex list-none items-center gap-8">
          <li>
            <Link to="/" className="text-white text-lg no-underline hover:text-[#b662ee]">Home</Link>
          </li>
          <li>
            <Link to="/jogos" className="text-white text-lg no-underline hover:text-[#b662ee]">Jogos</Link>
          </li>
          <li>
            <Link to="/contato" className="text-white text-lg no-underline hover:text-[#aa3ff1]">Contato</Link>
          </li>
          <li>
            <Link to="/login" className="text-white text-lg no-underline hover:text-[#aa3ff1]">Login</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
