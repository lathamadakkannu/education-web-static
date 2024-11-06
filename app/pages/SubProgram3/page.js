import React from "react";
import styles from "./SubProgram3.module.scss";

const SubProgram3 = () => {
  return (
    <div className={styles.SubProgram3}>
      <div className={styles.SubProgram3Banner}>
        <img src="/image/subprogram3.jpeg" alt="sub program" />
        <div className={styles.overlayText}>Our programs empower learners with essential skills for today’s dynamic world.</div>
      </div>

      <div className={styles.SubProgram3Head}>
        <div className={styles.SubProgram3HeadContent}>
          <h2>Main About Course</h2>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum commodi optio maxime asperiores nesciunt laborum distinctio
            quibusdam hic perferendis repellat? Distinctio temporibus ipsum corrupti consectetur cumque autem, itaque natus perspiciatis.
          </p>

          <div className={styles.SubProgram3HeadBtn}>
            <button>Register Now</button>
          </div>
        </div>
      </div>

      <div className={styles.SubProgram3Container}>
        <div className={styles.SubProgram3Contents}>
          <div className={styles.SubProgram3Content}>
            <img src="/image/event1.jpeg" alt="" />
            <div className={styles.subContentText}>
              <h4>Learning <br /> Methods</h4>
              <p>
                Our bootcamp uses a blend of on-demand content and live interactive sessions to make learning engaging and effective.
                The emphasis is on practical experience through real-world projects.
              </p>
              <ul>
                <li>On-Demand Content: Access recorded lectures and a library of learning resources anytime.</li>
                <li>Live Sessions: Weekly live coding sessions and Q&A with instructors to address doubts and explain complex concepts.</li>
                <li>Practical Application: Hands-on coding exercises, assignments, and collaborative group projects to reinforce your learning.</li>
              </ul>
              <div className={styles.SubProgramContentBtn}>
                <button>Learn More</button>
              </div>
            </div>
          </div>

          <div className={styles.SubProgram3Content1}>
            <div className={styles.subContentText}>
              <h4>Community & <br /> Networking</h4>
              <p>
                Join a thriving community of learners, mentors, and industry professionals.
                Networking opportunities help you build lasting connections that can advance your career.
              </p>
              <ul>
                <li>Discussion Forums: Share ideas and get feedback from a supportive learning community.</li>
                <li>Alumni Network: Connect with past graduates who are now working in tech roles.</li>
                <li>Industry Webinars: Attend sessions led by experts on the latest tech trends.</li>
                <li>Networking Events: Exclusive opportunities to meet professionals and expand your connections.</li>
              </ul>
              <div className={styles.SubProgramContentBtn}>
                <button>Learn More</button>
              </div>
            </div>
            <img src="/image/event2.jpeg" alt="" />
          </div>

          <div className={styles.SubProgram3Content}>
            <img src="/image/event3.jpeg" alt="" />
            <div className={styles.subContentText}>
              <h4>Support & <br /> Resources</h4>
              <p>
                We’re committed to providing the support you need to succeed, from technical help to learning resources.
                Our team ensures you stay on track throughout the program.
              </p>
              <ul>
                <li>Learning Materials: Comprehensive resources, including tutorials, guides, and practice challenges.</li>
                <li>Career Resources: Tips on building your portfolio, writing resumes, and acing job interviews.</li>
                <li>Mentor Check-Ins: Regular sessions to discuss your progress and goals.</li>
              </ul>
              <div className={styles.SubProgramContentBtn}>
                <button>Learn More</button>
              </div>
            </div>
          </div>

          <div className={styles.SubProgram3Content1}>
            <div className={styles.subContentText}>
              <h4>Assessment & <br /> Certification</h4>
              <p>
                Your progress is evaluated through a combination of assignments, quizzes, and a final capstone project.
                Completing the program earns you a certification that is recognized in the tech industry.
              </p>
              <ul>
                <li>Regular Assessments: Quizzes and assignments to track your understanding.</li>
                <li>Capstone Project: A full-stack application that showcases your development skills.</li>
                <li>Industry-Recognized Certificate: A credential that enhances your job prospects.</li>
              </ul>
              <div className={styles.SubProgramContentBtn}>
                <button>Learn More</button>
              </div>
            </div>
            <img src="/image/event4.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubProgram3;
