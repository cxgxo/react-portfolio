import React from 'react'

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 32 || document.documentElement.scrollTop > 32) {
    // document.getElementById("nav").style.padding = "30px 10px";
    document.getElementById("nav").className = "bg-black fixed translate-y-0 w-full overflow-hidden transition-all duration-200"
  } else {
    document.getElementById("nav").className = "bg-black fixed -translate-y-16 w-full overflow-hidden transition-all duration-200"
  }
}

const Navbar = () => {
  return (
    <nav id='nav' class="bg-black fixed -translate-y-16 w-full overflow-hidden transition-all duration-200">
        <div class="container flex items-center justify-center p-4 mx-auto text-gray-300">
            <a href="#about" class="border-b-2 border-transparent transition-all duration-200 transform hover:text-gray-100 hover:border-gray-400 mx-1.5 sm:mx-6">about.</a>
            <a href="#projects" class="border-b-2 border-transparent transition-all duration-200 transform hover:text-gray-100 hover:border-gray-400 mx-1.5 sm:mx-6">projects.</a>
            <a href="#" class="border-b-2 border-transparent transition-all duration-200 transform hover:text-gray-100 hover:border-gray-400 mx-1.5 sm:mx-6">contacts.</a>
        </div>
    </nav>
  )
}

export default Navbar