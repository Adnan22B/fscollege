import React from 'react'
import Aboutus from './Aboutus/Aboutus'
import Banner from './Banner/Banner'
import Blogs from './Blogs/Blogs'
import Courses from './Courses/Courses'

export default function index() {
  return (
    <>
        <Banner />
        <Aboutus />
        <Courses />
        <Blogs />
    </>
  )
}
