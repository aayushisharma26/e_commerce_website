'use client'
import Link from 'next/link'
import './navbar.css'
import { useState } from 'react'
import { Inika } from 'next/font/google'

function Navbar () {
  const [showAccountDropdown, setShowAccountDropdown] = useState(false)
  const [showMoreDropdown, setShowMoreDropdown] = useState(false)
  const toggleAccountDropdown = () => {
    setShowAccountDropdown(!showAccountDropdown)
  }

  const toggleMoreDropdown = () => {
    setShowMoreDropdown(!showMoreDropdown)
  }

  return (
    <div>
      <nav class='navbar navbar-expand-lg navbar-light bg-light'>
        <div class='container-fluid'>
          <a class='navbar-brand' href='/'>
            <img src='/logo.png' />
          </a>
          <button
            class='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span class='navbar-toggler-icon'></span>
          </button>
          <div class='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul class='navbar-nav me-auto mb-2 mb-lg-0'>
              <li class='nav-item'>
                <a
                  class='nav-link'
                  aria-current='page'
                  href='/product_list/electronics'
                >
                  Electronics
                </a>
              </li>
              <li class='nav-item'>
                <a class='nav-link' href='/product_list/jewelery'>
                  Jewellery
                </a>
              </li>
              <li class='nav-item'>
                <a class='nav-link' href="/product_list/men's clothing">
                  Men's Clothing
                </a>
              </li>
              <li class='nav-item'>
                <a class='nav-link' href="/product_list/women's clothing">
                  Women's Clothing
                </a>
              </li>
            </ul>
            <form class='d-flex'>
              <input
                class='form-control me-2'
                type='search'
                placeholder='Search'
                aria-label='Search'
              />
              <button class='btn btn-outline-success' type='submit'>
                Search
              </button>
            </form>
            <Link href='/add_cart' id='cart'>
              <img src='/Cart.png' />
              My Cart
            </Link>
          </div>
        </div>
      </nav>
    </div>
  )
}
export default Navbar
