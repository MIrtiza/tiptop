import React from 'react'

const Pagination = () => {
    return (
        <>
           <div className="container mt-auto mx-auto border-t-2">
                <nav className="flex flex-row flex-nowrap justify-between md:justify-center items-center" aria-label="Pagination">
                <a className="flex w-40 h-10 mr-auto justify-start items-center bg-white text-black hover:border-gray-300" href="#" title="Previous Page">
                   
                    <svg className="block w-4 h-4 fill-current" viewBox="0 0 256 512" aria-hidden="true" role="presentation">
                        <path d="M238.475 475.535l7.071-7.07c4.686-4.686 4.686-12.284 0-16.971L50.053 256 245.546 60.506c4.686-4.686 4.686-12.284 0-16.971l-7.071-7.07c-4.686-4.686-12.284-4.686-16.97 0L10.454 247.515c-4.686 4.686-4.686 12.284 0 16.971l211.051 211.05c4.686 4.686 12.284 4.686 16.97-.001z"></path>
                    </svg>
                    <span className="ml-4">Previous</span>
                </a>
                <a className="hidden md:flex w-10 h-10 mx-1 justify-center items-center  bg-white text-black hover:border-gray-300" href="#" title="Page 1">
                    1
                </a>
                <a className="hidden md:flex w-10 h-10 mx-1 justify-center items-center  bg-white text-black hover:border-gray-300" href="#" title="Page 2">
                    2
                </a>
                <a className="hidden md:flex w-10 h-10 mx-1 justify-center items-center  border-t-2 border-blue-900 text-blue pointer-events-none" href="#" aria-current="page" title="Page 3">
                    3
                </a>
                <a className="hidden md:flex w-10 h-10 mx-1 justify-center items-center  bg-white text-black hover:border-gray-300" href="#" title="Page 4">
                    4
                </a>
                <a className="hidden md:flex w-10 h-10 mx-1 justify-center items-center  bg-white text-black hover:border-gray-300" href="#" title="Page 5">
                    5
                </a>
                <a className="flex w-40 h-10 ml-auto justify-end items-center bg-white text-black hover:border-gray-300" href="#" title="Next Page">
                    <span className="mr-4">Next</span>
                    <svg className="block w-4 h-4 fill-current" viewBox="0 0 256 512" aria-hidden="true" role="presentation">
                        <path d="M17.525 36.465l-7.071 7.07c-4.686 4.686-4.686 12.284 0 16.971L205.947 256 10.454 451.494c-4.686 4.686-4.686 12.284 0 16.971l7.071 7.07c4.686 4.686 12.284 4.686 16.97 0l211.051-211.05c4.686-4.686 4.686-12.284 0-16.971L34.495 36.465c-4.686-4.687-12.284-4.687-16.97 0z"></path>
                    </svg>
                </a>
            </nav>
           </div> 
        </>
    )
}

export default Pagination
