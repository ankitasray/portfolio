import React from 'react'

const Contact = () => {
  return (
    <section id="contact">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 ">
            Get In Touch!
            <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
            </h1>
            <p className="text-center mt-2 mb-2 md:text-xl">If you want us to work together, have any questions, my inbox is always open. Whether I just want to say hi, I'll try my best to get back to you! Cheers!</p>
            <a href="https://www.linkedin.com/in/ankita-sinha-ray/" className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold">Say Hello</a>
            
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact


