import React from 'react'

const Projects = () => {
  return (
    <section id='projects' class="bg-black lg:justify-center">
      <div class="container px-6 py-10 mx-auto">
        <div class="items-center lg:flex">

          <div class="lg:w-1/2 mx-auto">
            <h2 class="text-3xl text-gray-100 text-center">projects.</h2>
            <p class="max-w-4xl mx-auto mt-3 text-center text-gray-300 lg:max-w-md">
              I'm currently don't have any project.
            </p>
            {/* <div className="card-container grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-4">
              <div className="card flex flex-col items-center p-8 transition-colors duration-200 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-blue-600 dark:border-gray-700 dark:hover:border-transparent">
                <img class="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300" src="" alt="" />
                          
                <h1 class="mt-4 text-2xl font-semibold text-gray-700 dark:text-white group-hover:text-white">you are here</h1>
                
                <p class="mt-2 text-gray-500 dark:text-gray-300 group-hover:text-gray-300">you're currently in my first React.js project</p>
              </div>
            </div> */}
          </div>

        </div>
      </div>

      <span className="w-full text-gray-100 text-center"><p>-</p></span>
    </section>
  )
}

export default Projects