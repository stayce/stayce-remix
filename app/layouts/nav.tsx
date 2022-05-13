export default function Nav() {
    return (
      <nav className="flex items-center justify-between flex-wrap bg-charcoal p-6">
        <div className="flex items-center flex-shrink-0 text-light mr-6">
          <a href="/" className="block mt-4 lg:inline-block lg:mt-0  font-light text-gray-200 hover:text-white mr-4">
            <span className="font-semibold text-xl tracking-tight">Stayce</span>
          </a>
        </div>
        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
          </button>
        </div>
        <div className="uppercase w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow lg:text-center">
            <a href="#work" className="block mt-4 lg:inline-block lg:mt-0 font-light text-gray-200 hover:text-white lg:px-8">
              Work Experience
            </a>
            <a href="#contact" className="block mt-4 lg:inline-block lg:mt-0 font-light text-gray-200 hover:text-white lg:px-8">
              Contact
            </a>
          </div>
        </div>
      </nav>
    );
  }