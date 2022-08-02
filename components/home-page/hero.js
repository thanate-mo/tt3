import Image from "next/image"
import classes from "./hero.module.css"

function Hero() {
  return (
    <>
      <section className={classes.hero}>
        <div className={classes.image}>
          <Image
            src="/images/site/dai.jpg"
            alt="An image"
            width={300} // 300px
            height={300} // 300px
          />
        </div>
        <h1>Hi I &apos;m Dai</h1>
        <p>Dragon Quest: The Adventure of Dai</p>
      </section>
    </>
  )
}

export default Hero