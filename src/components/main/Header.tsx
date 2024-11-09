import Counter from "./Counter"
import Logo from "./Logo"

function Header() {
   console.log("i am from header")
   return (
      <header className="col-[1/-1] row-[1/2] border-b border-slate-200 bg-blue-100  flex items-center justify-between px-4">
         <Logo />
         <Counter />
      </header>
   )
}

export default Header
