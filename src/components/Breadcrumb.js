
import withBreadcrumbs from 'react-router-breadcrumbs-hoc';
import { NavLink } from "react-router-dom";
// const Breadcrumb = () => {
//     const routesList = {
//         '/': 'Home',
//         '/blog': 'Blog',
//         '/user': 'User',
//         '/user/new/:id': 'User Info',
//      }
//     return (
//         <nav className="container">
//             <ol className="list-reset py-4  rounded flex bg-grey-light text-grey">
//                 <li className="pr-2 truncate ...">Home</li>
//                 <li>/</li>
//                 <li className="px-2"><Link to="/manageuser" className="no-underline text-indigo truncate ...">User Management</Link></li>
//                 <li>/</li>
//                 <li className="px-2"><Link to="" className="no-underline text-indigo truncate ...">Manage User</Link></li>
//             </ol>
//         </nav>
//     )
// }

// export default Breadcrumb

const userNamesById = { '1': 'John' }

const DynamicUserBreadcrumb = ({ match }) => (
  <span>{userNamesById[match.params.userId]}</span>
);

// define custom breadcrumbs for certain routes.
// breadcumbs can be components or strings.
const routes = [
  { path: '/users/:userId', breadcrumb: DynamicUserBreadcrumb },
  { path: '/example', breadcrumb: 'Custom Example' },
];

// map, render, and wrap your breadcrumb components however you want.
const Breadcrumbs = ({ breadcrumbs }) => (
  <div className="breadcrumbs">
    {breadcrumbs.map(({
      match,
      breadcrumb
    }) => (
      <span key={match.url}>
        <NavLink to={match.url}> <span className="slash"> /</span> {breadcrumb}</NavLink>
      </span>
    ))}
  </div>
);

export default withBreadcrumbs(routes)(Breadcrumbs);