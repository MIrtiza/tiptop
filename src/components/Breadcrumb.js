import React from 'react'

const Breadcrumb = () => {
    return (
        <nav className="container">
            <ol className="list-reset py-4  rounded flex bg-grey-light text-grey">
                <li className="pr-2">Home</li>
                <li>/</li>
                <li className="px-2"><a href="#" className="no-underline text-indigo">User Management</a></li>
                <li>/</li>
                <li className="px-2"><a href="#" className="no-underline text-indigo">Manage User</a></li>
            </ol>
        </nav>
    )
}

export default Breadcrumb
