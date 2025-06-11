import React from 'react'
import { assets } from '../assets/assets'
import { NavLink, } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10  mt-40 text-sm'>

        <div>
          <img className='mb-5 w-40' src={assets.Logo} alt="" />
          <p className='w-full md:w-2/3 text-gray-600 leading-6'>MedixMeet is your trusted platform for booking doctor appointments—anytime, anywhere. Whether it’s an emergency, a routine check-up, or a specialized consultation, MedixMeet connects you with qualified doctors across multiple specialties. Experience instant bookings, online consultations, and seamless healthcare—all in one place.</p>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>COMPANY</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <NavLink to='/' >
              <li>Home</li>
            </NavLink>

            <NavLink to='/about' >
              <li>About us</li>
            </NavLink>

            <NavLink to='/doctors' >
              <li>All Doctors</li>
            </NavLink>

            <NavLink to='/contact' >
              <li>Contact</li>
            </NavLink>
          </ul>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>+080-26547812</li>
            <li>medixmeet@gmail.com</li>
          </ul>
        </div>

      </div>

      <div>
        <hr />
        <p className='py-5 text-sm text-center'>Copyright 2025 @ MedixMeet.com - All Right Reserved.</p>
      </div>

    </div>
  )
}

export default Footer
