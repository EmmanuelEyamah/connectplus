import styles from "./homepage.module.css"; 

const Home = () => {

  return (
    <div className={styles.container}>

      <div className={styles.textContainer}>
        <h6 className={styles.textTrusted}> Trusted & Verified</h6>

        <h6 className={styles.TextTransform}>Transforming Ideas into Product Reality.</h6>

        <h6 className={styles.Caption}>Our aim at <span className={styles.Connect}>Connect+,</span> is to ensure smooth collaboration from initial ideation 
        and strategic planning to cutting-edge design and seamless development,
         we go the extra mile to bring your vision to life.</h6>
        <div className={styles.buttonSection}>
            <button className={styles.getStarted}>Get Started</button>
            <button className={styles.viewProject}>View Project</button>
         </div>
      </div>

      <div className={styles.imageContainer}>

      </div>
    </div>
  );
}

export default Home;