import styles from './App.module.scss';
import ArrowElement from './assets/ArrowElement.svg';
import HeroImg from './assets/heroImg.png';

export default function App() {
  return (
    <div className={styles.body}>
      <header className={styles.relative}>
        <nav>
          <div>
            <a href="/#" className={styles.eclipseLogo}>
              Eclipse
            </a>
          </div>
          <ul>
            <li>
              <a href="/#" className={styles.navItems}>
                Features
              </a>
            </li>
            <li>
              <a href="/#" className={styles.navItems}>
                Pricing
              </a>
            </li>
            <li>
              <a href="/#" className={styles.navItems}>
                FAQs
              </a>
            </li>
          </ul>
          <div className={styles.startNow}>
            <a
              href="/#"
              className={`${styles.navItems} ${styles.startNowButton}`}
            >
              Start Now{' '}
              <img
                src={ArrowElement}
                alt="Arrow"
                className={styles.arrowElement}
              />
            </a>
          </div>
        </nav>
      </header>
      <main>
        <section>
          <div>
            <div className={styles.heroTextBox}>
              <h1 className={styles.heroText}>
                All-in-one Finance App you always wanted
              </h1>
              <p className={styles.heroParagraph}>
                Gain control of your finances with our all-in-one finance app.
                Track your spending, find investment opportunities, and learn.
              </p>
              <div>
                <a className={styles.getStartedButton}>
                  Get Started{' '}
                  <img
                    src={ArrowElement}
                    alt="Arrow"
                    className={styles.arrowElement}
                  />
                </a>
              </div>
            </div>

            <div className={styles.imgWrapper}>
              <div className={styles.purpleBackground}> </div>
              <img
                src={HeroImg}
                alt="Hero"
                className={styles.heroImg}
                width="1920"
                height="1080"
                decoding="async"
                data-nimg="1"
                loading="lazy"
              />
            </div>
          </div>
        </section>
        <section>
          <div>sec2</div>
        </section>
        <section>
          <div>sec3</div>
        </section>
        <section>
          <div>sec4</div>
        </section>
        <section>
          <div>sec5</div>
        </section>
      </main>
    </div>
  );
}
