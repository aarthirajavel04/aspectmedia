import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Aspect Media</title>
        <meta name="description" content="Website coming soon" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        {/* First Half - Sky Blue */}
        <div className={styles.topSection}>
          <div className={styles.header}>
            <Image src="/logo.png" alt="Aspect Media Logo" width={40} height={40} />
            <span className={styles.brand}>Aspect Media</span>
          </div>
          <div className={styles.comingSoonSection}>
            <Image src="/clock.png" alt="Clock" className={styles.clockBackground} width={200} height={200} />
            <p className={styles.line1}>Our new website is</p>
            <p className={styles.line2}>COMING SOON</p>
            <p className={styles.line3}>Stay tuned</p>
          </div>
          <div className={styles.socialRight}>
            <a href="https://www.instagram.com/aspectmedia.in/" target="_blank" rel="noopener noreferrer">
              <Image src="/insta.png" alt="Instagram" width={30} height={30} />
            </a>
            <a href="https://www.linkedin.com/company/aspect-media-in/" target="_blank" rel="noopener noreferrer">
              <Image src="/linkedin.png" alt="LinkedIn" width={30} height={30} />
            </a>
          </div>
        </div>

        {/* Second Half - White */}
        <div className={styles.bottomSection}>
          <div className={styles.aboutCenter}>
            <h2>About Aspect Media</h2>
            <p className={styles.aboutText}>
              Welcome to Aspect Media, your partner in digital success. We craft impactful websites, engaging mobile apps, and smart marketing strategies to elevate your brand and connect with your audience.
            </p>
          </div>
          <div className={styles.contactInfo}>
            <p><Image src="/phone.png" alt="Phone" width={20} height={20} /> +91 90474 47440</p>
            <p><Image src="/email.png" alt="Email" width={20} height={20} /> support@aspectmedia.in</p>
          </div>
          <div className={styles.socialBottom}>
            <a href="https://www.instagram.com/aspectmedia.in/" target="_blank" rel="noopener noreferrer">
              <Image src="/insta.png" alt="Instagram" width={30} height={30} />
            </a>
            <a href="https://www.linkedin.com/company/aspect-media-in/" target="_blank" rel="noopener noreferrer">
              <Image src="/linkedin.png" alt="LinkedIn" width={30} height={30} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
