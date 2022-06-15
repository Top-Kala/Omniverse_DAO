import React from 'react'
import Image from 'next/image'
import SlideBg from '../static/slide-bg.png'
import SlideLogo2 from '../static/omniverse logo slide-2.png'
import BuySlideLogo from '../static/buy-slide-log.png'
import BuySlideLogo2 from '../static/buy slide logo 2.png'
import SlideLogo3 from '../static/slide-logo-3.png'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, EffectCoverflow } from 'swiper'

//Swiper CSS
import 'swiper/css'
import 'swiper/css/navigation'
// animations
import * as starsanimation from "../services/animations/stars.json"
import Lottie from 'react-lottie'

import sliderstyles from '../styles/Slider.module.css'
const animationStarsOptions = {
  loop: true,
  autoplay: true,
  animationData: starsanimation,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};

const Warcarousel : React.FC = () => {
  return (
    <>
    <div className={sliderstyles.swiperRooterWrap}>
      <div className={sliderstyles.slideContainer}>
        <div className={sliderstyles.omniSlideWrap}>
          <div className={sliderstyles.slideBg}>
            <Image src={SlideBg} layout="responsive" alt="slide Bg"></Image>
          </div>
          <div className={sliderstyles.slideContent}>
            <div className={sliderstyles.slideTxt}>
              <h3>Compete-to-Earn &#40;C2E&#41; Multi-Blockchain Game</h3>
              <p>a competitive strategy game with blockchain based factions in a rich universe of lore, art, and community</p>
            </div>
            <div className={sliderstyles.slideLogo}>
            <Image src={SlideLogo2} alt="slide logo"></Image>
            </div>
            <span className={`${sliderstyles.slidetag2} ${sliderstyles.slidetagwar}`}>Omni Wars</span>
          </div>
        </div>
      </div>
      <div className={sliderstyles.animStar}>
        <Lottie
          options={animationStarsOptions}
          isClickToPauseDisabled
        />
      </div>
    </div>
    </>
  )
}

export default Warcarousel