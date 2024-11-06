"use client";

import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaSearch,
  FaRegHeart,
  FaRegUserCircle,
  FaChevronDown,
} from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [isCoursesDropdownOpen, setIsCoursesDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Close dropdowns when closing the menu
    if (isMenuOpen) {
      setIsAboutDropdownOpen(false);
      setIsCoursesDropdownOpen(false);
    }
  };
  const toggleAboutDropdown = () => {
    setIsAboutDropdownOpen(!isAboutDropdownOpen);
    setIsCoursesDropdownOpen(false); // Close Courses dropdown when About is opened
  };

  const toggleCoursesDropdown = () => {
    setIsCoursesDropdownOpen(!isCoursesDropdownOpen);
    setIsAboutDropdownOpen(false); // Close About dropdown when Courses is opened
  };

  return (
    <div className={styles.navbarMain}>
      <div className={styles.navbarContainer}>
        <nav className={styles.navbar}>
          {/* Logo Section */}
          <div className={styles.navIcons}>
            <div className={styles.logo}>
              <Link href="/">
                <Image
                  src="/image/Component 1.png"
                  alt="Logo"
                  width={200}
                  height={65}
                />
              </Link>
            </div>

            {/* Hamburger and Close Icons */}
            <div className={styles.menuToggle} onClick={toggleMenu}>
              {!isMenuOpen ? (
                <FaBars className={styles.icon} />
              ) : (
                <FaTimes className={styles.icon} />
              )}
            </div>

            {/* Navigation Items */}
            <ul
              className={`${styles.navItems} ${
                isMenuOpen ? styles.active : ""
              }`}
            >
              <li>
                <Link href="/" onClick={toggleMenu}>
                  Home
                </Link>
              </li>

              {/* About with Dropdown */}
              <li
                className={`${styles.hasDropdown} ${
                  isAboutDropdownOpen ? styles.dropdownActive : ""
                }`}
                onClick={toggleAboutDropdown}
              >
                About
                <FaChevronDown className={styles.dropdownIcon} />
                {isAboutDropdownOpen && (
                  <ul className={styles.dropdown}>
                    <li>
                      <Link href="/pages/About" onClick={toggleMenu}>
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link href="/pages/Career" onClick={toggleMenu}>
                      Career
                      </Link>
                    </li>
                    {/* <li>
                      <Link href="/pages/Contact" onClick={toggleMenu}>
                        Contact
                      </Link>
                    </li> */}
                  </ul>
                )}
              </li>

              {/* Courses with Dropdown */}
              <li
                className={`${styles.hasDropdown} ${
                  isCoursesDropdownOpen ? styles.dropdownActive : ""
                }`}
                onClick={toggleCoursesDropdown}
              >
                Programs
                <FaChevronDown className={styles.dropdownIcon} />
                {isCoursesDropdownOpen && (
                 <ul className={styles.dropdown}>
                 <li>
                   <Link href="/pages/SubProgram1" onClick={toggleMenu}>
                   Sub-Program 1
                   </Link>
                 </li>
                 <li>
                   <Link href="/pages/SubProgram2" onClick={toggleMenu}>
                   Sub-Program 2
                   </Link>
                 </li>
                 <li>
                   <Link href="/pages/SubProgram3" onClick={toggleMenu}>
                   Sub-Program 3
                   </Link>
                 </li>
                
               </ul>
                )}
              </li>

              <li>
                   <Link href="/pages/Courses" onClick={toggleMenu}>
                   Courses
                   </Link>
                 </li>

              <li>
                <Link href="/pages/Blog" onClick={toggleMenu}>
                  Blogs
                </Link>
              </li>
              
              <li>
                <Link href="/pages/Career" onClick={toggleMenu}>
                  Career
                </Link>
              </li>
            </ul>
          </div>

          {/* Right Side Icons and Text */}
          {/* <div className={styles.rightMenu}>
            <FaSearch className={styles.icon} />
            <Link href="/pages/Card">
              <FaRegHeart className={styles.icon} />
            </Link>
            <Link href="/component/ProfilePage">
              <FaRegUserCircle className={styles.icon} />
            </Link>
            <span className={styles.helloText}>Hello,</span>
            <span className={styles.signInText}>Sign In</span>
          </div> */}
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
