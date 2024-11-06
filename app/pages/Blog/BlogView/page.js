"use client";

import React, { useState, useEffect, Suspense } from "react";
 
import Image from "next/image";
import { MdStarRate } from "react-icons/md";
import styles from "./BlogView.module.scss";

const BlogViewComponent = () => {
   
 

  return (
    <div className={styles.principleContainer}>
    <div className={styles.blogImg}> </div>


    <div className={styles.principleDetails}>
        <div className={styles.principleHead}>
            <h3>Key Principles of Web Design</h3>
        </div>

        <div className={styles.principleRating}>
        <h4><span><MdStarRate /></span>4.8</h4>
        </div>

        <div className={styles.principleDate}>
        <p>Feb 09, 2024</p>
        </div>

    </div>

    <div className={styles.principleContent}>
    <p><span>User-Centered Design (UCD):</span> The design should prioritize the needs, goals, and preferences of users.
        A user-friendly interface improves the overall experience and keeps visitors engaged.
    </p>

    <p><span>Simplicity:</span>Effective web design avoids clutter and ensures that users can easily navigate the site.
        Simplicity often means clean layouts, readable fonts, and intuitive navigation.
    </p>

    <p><span>Consistency:</span>Maintaining uniform design elements (fonts, colors, button styles, etc.)
        throughout the site creates a cohesive look and feel, enhancing the user experience.
    </p>

    <p><span>Responsive Design: </span>Modern websites must work across multiple devices—desktops, tablets, and mobile phones.
        Responsive design ensures that the website layout adjusts to fit different screen sizes.
    </p>

    <p><span>Accessibility:</span> Websites should be designed to accommodate all users, including those with disabilities.
        Accessibility standards ensure that sites can be navigated by screen readers, and content is understandable for users with visual or hearing impairments.
    </p>

    </div>


    <div className={styles.reviewContainer}>
    <h3>Reviews</h3>
        <div className={styles.reviewContent}>
            <div className={styles.reviewProfile}>
                <img src="/image/reviewProfile.png" />
            </div>
    
            <div className={styles.reviewDetails}>
               
                <div className={styles.userName}>
                    <h4>Elisa Joe</h4>
                    <p>Nov 9, 2023</p>
                </div>


                <div className={styles.reviewRating}>
                    <div className={styles.reviewStars}>
                    <MdStarRate />
                    <MdStarRate />
                    <MdStarRate />
                    <MdStarRate />
                    <MdStarRate />
                    </div>
                </div>
            </div> 
        </div>

        <div className={styles.reviewData}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor elit,
                            sed do eiusmod tempor ut labore Lorem ipsum dolor sit  eiusmod tempor ut labore Lorem
                </p>
        </div>


        <div className={styles.reviewContent}>
                <div className={styles.reviewProfile}>
                    <img src="/image/reviewProfile.png" />
                </div>
        
                <div className={styles.reviewDetails}>
                
                    <div className={styles.userName}>
                        <h4>Elisa Joe</h4>
                        <p>Nov 9, 2023</p>
                    </div>


                    <div className={styles.reviewRating}>
                        <div className={styles.reviewStars}>
                        <MdStarRate />
                        <MdStarRate />
                        <MdStarRate />
                        <MdStarRate />
                        <MdStarRate />
                        </div>
                    </div>
                </div> 
            </div>

            <div className={styles.reviewData}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor elit,
                    sed do eiusmod tempor ut labore Lorem ipsum dolor sit  eiusmod tempor ut labore Lorem
                    </p>
            </div>

        
        </div>


    

</div>
  );
};

const BlogView = () => (
  <Suspense fallback={<p>Loading blog data...</p>}>
    <BlogViewComponent />
  </Suspense>
);

export default BlogView;
