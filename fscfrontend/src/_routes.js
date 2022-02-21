import Home from "./Views/Pages/Home"
import About from "./Views/Pages/About"
import Contact from "./Views/Pages/Contact"
import Blogs from "./Views/Pages/BlogsMain/BlogsMain"
import StudentRegistration from "./Views/Registration/Student/Registration"
import TeacherRegistration from "./Views/Registration/Teacher/Registration"
import ApplyNow from "./Views/Pages/ApplyNow/ApplyNow"
import Signup from "./Admin/Views/Signup/Signup"
import Login from "./Admin/Views/Login/Login"
import BlogListing from "./Admin/Views/Blogs/BlogListing/BlogListing"
import AddNewBlog from "./Admin/Views/Blogs/AddNewBlog/AddNewBlog"
import UpdateBlog from "./Admin/Views/Blogs/UpdateBlog/UpdateBlog"
const ROUTES = [
    {
        path: "/",
        component: Home
    },
    {
        path: "/about-us",
        component: About
    },
    {
        path: "/all-posts",
        component: Blogs
    },
    {
        path: "/register-as-student",
        component: StudentRegistration
    },
    {
        path: "/register-as-teacher",
        component: TeacherRegistration
    },
    {
        path: "/contact-us",
        component: Contact
    },
    {
        path: "/apply-now",
        component: ApplyNow
    },
    {
        path: "/fsc-admin-signup",
        component:  Signup
    },
    {
        path: "/fsc-admin-login",
        component: Login
    },
    {
        path: "/admin-all-blogs",
        component: BlogListing
    },
    {
        path: "/admin-add-blogs",
        component: AddNewBlog
    },
    {
        path: "/updateBlog",
        component: UpdateBlog
    }
];

export default ROUTES