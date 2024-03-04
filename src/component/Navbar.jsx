const Navbar = () => {
  return (
    <nav className="flex justify-between items-center mt-5 w-9/12 py-4 px-6 z-50  bg-[#CC8B65] mx-auto rounded-full drop-shadow-[3px_4px_5px_#100C0D] border-[#100C0D] border-[3px]">
        <ul className="nav-links flex justify-center gap-16 w-full">
          <li className="ml-6"><a href="#" className="text-[#100C0D] hover:underline hover:decoration-solid underline-offset-8 flex text-lg hover:text-[#E3DCD2] transition duration-300">Home</a></li>
          <li className="ml-6"><a href="#" className="text-[#100C0D] hover:underline hover:decoration-solid underline-offset-8 flex text-lg hover:text-[#E3DCD2] transition duration-300">About</a></li>
          <li className="ml-6"><a href="#" className="text-[#100C0D] hover:underline hover:decoration-solid underline-offset-8 flex text-lg hover:text-[#E3DCD2] transition duration-300">Services</a></li>
          <li className="ml-6"><a href="#" className="text-[#100C0D] hover:underline hover:decoration-solid underline-offset-8 flex text-lg hover:text-[#E3DCD2] transition duration-300">Contact</a></li>
        </ul>
      {/* </div> */}
    </nav>
  )
}

export default Navbar