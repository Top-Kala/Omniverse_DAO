import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script'

// Components 
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Xcarousel from '../components/XCarousel'
import Warcarousel from '../components/Warcarousel'


// Images 
import SecHeadArrowL from '../static/pinkArrow.png'
import SecHeadArrowR from '../static/blue-Arrow.png'

import RoadmapBg from '../static/roadmap-bg.png'
import RoadmapBlueLine from '../static/roadmap-blue-line.png'
import RoadmapPinkLine from '../static/roadmap-pink-line.png'
import FeatureContenImg from '../static/feature-overview-bg.png'
import RedPlanetImg from '../static/redplanet.png'
//Partnership
import Sneaky from '../static/partnership/Sneaky 1.svg'
import LayerZero from '../static/partnership/LayerZero_Logo_Full 1.svg'
import PolygonStudios from '../static/partnership/pstud 1.svg'
import AvaLabs from '../static/partnership/ava labs white 1.svg'
import BNBChain from '../static/partnership/bnb-chain 1.svg'
import TBA from '../static/partnership/TBA.svg'
// Animation Gif
import IceBerg from '../services/animations/ice berg.gif'
// Scroll
import { Link, } from 'react-scroll'

// StyleSheet 
import styles from '../styles/Home.module.css'
//animation
import * as starsanimation from "../services/animations/stars.json"
import * as blueearthanimation from "../services/animations/blue_earth.json"
import * as planethanimation from "../services/animations/planet.json"
import * as iceBerganimation from '../services/animations/iceberg.json'

import Lottie from 'react-lottie'

// import { Container, LottieWrapper } from "../components/animation/staranimation.styled";
//react
import { useState,useRef,useEffect } from 'react'


const animationStarsOptions = {
  loop: true,
  autoplay: true,
  animationData: starsanimation,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};

const animationBlueEarthsOptions = {
  loop: true,
  autoplay: true,
  animationData: blueearthanimation,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};

const animationPlanetOptions = {
  loop: true,
  autoplay: true,
  animationData: planethanimation,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};

const animationIceBergOptions = {
  loop: true,
  autoplay: true,
  animationData: iceBerganimation,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};
const quickNavbars:Array<string> = ["omniverse","overview","omniwars","roadmap","partner"]


const Home: NextPage = () => {

  const [navbarid, setNavbarID] = useState<number>(0)
  const [wheel, setWheel] = useState<number>()
  // const [starAnimation, setStarAnimation] = useState<Options>(animationStarsOptions)

  const omniverseSection = useRef<HTMLDivElement | null>(null)
  const overviewSection = useRef<HTMLDivElement | null>(null)
  const omniwarsSection = useRef<HTMLDivElement | null>(null)
  const roadmapSection = useRef<HTMLDivElement | null>(null)
  const partnerSection = useRef<HTMLDivElement | null>(null)
  const overviewTextSection = useRef<HTMLDivElement | null>(null)


  useEffect(()=>{
    if(wheel){
      if(wheel<Number(overviewSection.current?.offsetTop)){
        setNavbarID(0)
      } else if(wheel<Number(omniwarsSection.current?.offsetTop)){
        setNavbarID(1)
      }else if(wheel<Number(roadmapSection.current?.offsetTop)){
        setNavbarID(2)
      }else if(wheel<Number(partnerSection.current?.offsetTop)){
        setNavbarID(3)
      }else {
        setNavbarID(4)
      }
    }
  },[wheel])
  return (
    <>
      <Head>
        <title>Omniverse DAO</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossOrigin="anonymous"/>
      </Head>
      <Script src="//analytics.aweber.com/js/awt_analytics.js?id=X3co" />
      <div className={styles.body}>

        <div onWheel={(e) => {e?setWheel(e.pageY):null}}>
          {/* Hero Section */}
          <div className={styles.navigationsWrap}>
            <ul>
                {
                  quickNavbars.map(function(quickNavbar, idx){
                    if(navbarid==idx){
                      return <li key={idx}><a className={styles.active}></a></li>
                    } else {
                      return <li key={idx} >
                        <a href={quickNavbar}>
                          <Link
                            activeClass="active"
                            to={quickNavbar}
                            spy={true}
                            smooth={true}
                            duration={1000}
                            onClick={()=>setNavbarID(idx)}
                          />
                        </a>
                      </li>
                    }
                  })
                }
              </ul>
          </div>
          <div className={styles.heroContainer}>
            <div className={styles.blackGradientBottom2}>
                <Navbar/>
                <section id="omniverse" ref={omniverseSection}>
                  <div className={styles.heroContentWrap} >
                      <h1>Omniverse</h1>
                      <div className={styles.heroBtn}>
                      <Link
                            activeClass="active"
                            to="overview"
                            spy={true}
                            smooth={true}
                            duration={1500}
                        >
                            <button onClick={()=>setNavbarID(1)}>Explore</button>
                        </Link>
                      </div>
                  </div>
                </section>

            </div>
          </div>
          <div className={styles.heroContainerhidebar}></div>

          <section id="overview" className={styles.overview} ref={overviewSection}>
            <div className={styles.featureContentWrap}>
              <div className={styles.featureImg}>
                <Image src={FeatureContenImg} layout="responsive" alt="bg"></Image>
              </div>
              <div className={styles.ContentWrap}  >
                <div className={styles.contentBody}>
                  <h3>OVERVIEW</h3>
                  <div className={styles.overviewTextSection}  ref={overviewTextSection}>
                    <p>The Omniverse is an ecosystem of media, tools, and protocols unified by their development and interoperability via Layer Zero technology.</p>
                    <p>Built by the Omniverse DAO with an emphasis on superior user experience.</p>
                  </div>
                </div>
                <div className={styles.contentBody}>
                  <h3>VISION</h3>
                  <p>Creating a revolutionary game on groundbreaking interoperable blockchain technology will lead to us to developing a host of follow on products. There are no tools for this era of DAO run communities operating on multiple blockchains.</p>
                  <p>
                  With Omni X, we seek to change this. The first gaming DAO tool we are building is a multi-chain NFT marketplace framework. The Omni Wars game marketplace will be built on this framework, but we seek to open up this development to any other blockchain game looking to quickly bootstrap their own unique game specific NFT marketplace.
                  </p>
                </div>
                
              </div>
            </div>
            <div className={styles.redPlanet}>
              <Image src={RedPlanetImg} layout="responsive" alt="bg"></Image>
            </div>
            <div className={styles.blueEarth}>
              <Lottie
                options={animationBlueEarthsOptions}
                isClickToPauseDisabled
              />
            </div>
          </section>

          <div className={styles.animStar}>
            <Lottie
              options={animationStarsOptions}
              isClickToPauseDisabled
            />
          </div>


          {/* Home Page BackGround */}
          <div className={styles.HomePageBg}>
            {/* Feature Section */}
            {/* Slider Section */}
            <section ref={omniwarsSection}  className={styles.omniwars} id="omniwars">
              <div className={styles.sliderRootContainer} >
                <div className={styles.secHeadingCon}>
                  <div className={styles.secHeadingWrap}>
                    <div className={styles.secHeadImgL}>
                      <Image src={SecHeadArrowL} layout="responsive" alt="arrow"></Image>
                    </div>
                    <h3>Omni X</h3>
                    <div className={styles.secHeadImgR}>
                      <Image src={SecHeadArrowR} layout="responsive" alt="arrow"></Image>
                    </div>
                  </div>
                </div>
                <Xcarousel/>
                <div className={styles.secHeadingCon}>
                  <div className={styles.secHeadingWrap}>
                    <div className={styles.secHeadImgL}>
                      <Image src={SecHeadArrowL} layout="responsive" alt="arrow"></Image>
                    </div>
                    <h3>Omni Wars</h3>
                    <div className={styles.secHeadImgR}>
                      <Image src={SecHeadArrowR} layout="responsive" alt="arrow"></Image>
                    </div>
                  </div>
                </div>
                <Warcarousel/>
              </div>
            </section>
            <div className={styles.blueEarthTwo}>
              <Lottie
                options={animationBlueEarthsOptions}
                isClickToPauseDisabled
              />
            </div>
            {/* Roadmap Section */}
            <section ref={roadmapSection} className={styles.roadmap} id="roadmap">
              <div className={styles.roadmapSecHead} >
                <div className={styles.secHeadingCon}>
                  <div className={styles.secHeadingWrap}>
                    <div className={styles.secHeadImgL}>
                      <Image src={SecHeadArrowL} layout="responsive" alt="arrow"></Image>
                    </div>
                    <h3>Omniverse</h3>
                    <div className={styles.secHeadImgR}>
                      <Image src={SecHeadArrowR} layout="responsive" alt="arrow"></Image>
                    </div>
                  </div>
                  <h1>RoadMap</h1>
                </div>
              </div>
              <div className={styles.animStarTwo}>
                <Lottie
                  options={animationStarsOptions}
                  isClickToPauseDisabled
                />
              </div>
              <div className={styles.redPlanetTwo}>
                <Image src={RedPlanetImg} layout="responsive" alt="bg"></Image>
              </div>
            </section>


            <div className={styles.roadmapCon}>
              {/* First Phase */}
              <div className={styles.roadmapWrap}>
                <div className={styles.ContL}>
                  <h1 className={styles.purpletxt}>MAR 2022</h1>
                  <div className={styles.BgWrap}>
                    <div className={styles.BgImg}>
                      <Image src={RoadmapBg} layout="responsive" alt="bg"></Image>
                    </div>
                    <div className={styles.roadmapTxt}>
                      <h3>Community & Core team Growth</h3>
                      <p>Launched Socials and github launched to establish, foster and grow community.</p>
                    </div>
                  </div>
                </div>
                <div className={styles.ContRPlanet}>
                  <div className={styles.roadlineImg}>
                    <Image src={RoadmapBlueLine} layout="responsive" alt="blueline"></Image>
                  </div>
                  <div className={styles.planet}>
                    <Lottie
                      options={animationPlanetOptions}
                      isClickToPauseDisabled
                    />
                  </div>
                </div>
              </div>
              {/* Second Phase */}
              <div className={styles.roadmapWrap}>
                <div className={styles.ContR}>
                  <div className={styles.roadlineBlue}>
                    <div className={styles.alignLine}>
                      <Image src={RoadmapPinkLine} layout="responsive" alt="blueline"></Image>
                    </div>
                  </div>
                </div>

                <div className={styles.ContL}>
                  <h1>APR 2022</h1>
                  <div className={styles.BgWrap}>
                    <div className={styles.BgImg}>
                      <Image src={RoadmapBg} layout="responsive" alt="bg"></Image>
                    </div>
                    <div className={styles.roadmapTxt}>
                      <h3>Capital Raise</h3>
                      <p>Expanded team and added core contributors to collaborate on development.</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Third Phase */}
              <div className={styles.roadmapWrap}>
                <div className={styles.ContL}>
                  <h1>MAY 2022</h1>
                  <div className={styles.BgWrap}>
                    <div className={styles.BgImg}>
                      <Image src={RoadmapBg} layout="responsive" alt="bg"></Image>
                    </div>
                    <div className={styles.roadmapTxt}>
                      <h3>GREG</h3>
                      <p>Launch Website showcasing interchain nft asset transfer. Genesis omniverse greg omni-nft colection. </p>
                    </div>
                  </div>
                </div>
                <div className={styles.ContR}>
                  <div className={styles.roadlineImg}>
                    <Image src={RoadmapBlueLine} layout="responsive" alt="blueline"></Image>
                  </div>
                </div>
              </div>
              {/* Forth Phase */}
              <div className={styles.roadmapWrap}>
                <div className={styles.ContR}>
                  <div className={styles.roadlineBlue}>
                    <div className={styles.alignLine}>
                      <Image src={RoadmapPinkLine} layout="responsive" alt="blueline"></Image>
                    </div>
                  </div>
                </div>
                <div className={styles.ContL}>
                  <h1>JUNE 2022</h1>
                  <div className={styles.BgWrap}>
                    <div className={styles.BgImg}>
                      <Image src={RoadmapBg} layout="responsive" alt="bg"></Image>
                    </div>
                    <div className={styles.roadmapTxt}>
                      <h3>Omni X BETA</h3>
                      <p>Beta NFT marketplace infrastructure release</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Fifth Phase */}
              <div className={styles.roadmapWrap}>
                <div className={styles.ContL}>
                  <h1>Q3 2022</h1>
                  <div className={styles.BgWrap}>
                    <div className={styles.BgImg}>
                      <Image src={RoadmapBg} layout="responsive" alt="bg"></Image>
                    </div>
                    <div className={styles.roadmapTxt}>
                      <h3>Community Growth</h3>
                      <p>NFT PFP Collections: faction specific GENESIS collections. Engagement Competitions: rewards for world building, fan art, and lore production. </p>
                    </div>
                  </div>
                </div>
                <div className={styles.ContR}>
                  <div className={styles.roadlineImg}>
                    <Image src={RoadmapBlueLine} layout="responsive" alt="blueline"></Image>
                  </div>
                </div>
              </div>
              {/* Sixth Phase */}
              <div className={styles.roadmapWrap}>
                <div className={styles.ContR}>
                  <div className={`${styles.roadlineBlue} ${styles.linehide}`}>
                    <div className={styles.alignLine}>
                      <Image src={RoadmapPinkLine} layout="responsive" alt="blueline"></Image>
                    </div>
                  </div>
                </div>
                <div className={styles.ContL}>
                  <h1>Q4 2022</h1>
                  <div className={styles.BgWrap}>
                    <div className={styles.BgImg}>
                      <Image src={RoadmapBg} layout="responsive" alt="bg"></Image>
                    </div>
                    <div className={styles.roadmapTxt}>
                      <h3>OMNI X</h3>
                      <p>NFT Platform Mainnet Release</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Home Page BackGround End*/}
          </div>

          {/* Home Page BackGround End*/}
          {/* Partners Section */}
          <section>
            <div className={styles.secHeadingCon} ref={partnerSection} id="partner">
              <div className={styles.secHeadingWrap}>
                <div className={styles.secHeadImgL}>
                  <Image src={SecHeadArrowL} layout="responsive" alt="arrow"></Image>
                </div>
                <h3>Omniverse</h3>
                <div className={styles.secHeadImgR}>
                  <Image src={SecHeadArrowR} layout="responsive" alt="arrow"></Image>
                </div>
              </div>
              <h1>Our Partners</h1>
            </div>
          </section>
          <div className={styles.partCompGrid}>
            <div className={styles.PartCompWrapf}>
              <Image src={Sneaky} alt="Sneaky" width={200}></Image>
            </div>
            <div className={styles.PartCompWrapf}>
              <Image src={LayerZero} alt="LayerZero" width={240}></Image>
            </div>
            <div className={styles.PartCompWraps}>
              <Image src={PolygonStudios} alt="PolygonStudios" width={350}></Image>
            </div>
            <div className={styles.PartCompWraps}>
              <Image src={AvaLabs} alt="AvaLabs" width={180}></Image>
            </div>
            <div className={styles.PartCompWraps}>
              <Image src={BNBChain} alt="BNBChain" width={280}></Image>
            </div>
            <div className={styles.PartCompWrapt}>
              <Image src={TBA} alt="TBA" width={370}></Image>
            </div>
          </div>

        </div>
        
        <div className={styles.FooterAreaContain}>
          <div className={styles.hideBorder}/>
          <div>
            <Lottie
              options={animationStarsOptions}
              isClickToPauseDisabled
            />
          </div>
          <Footer/>
        </div>
      </div>
    </>
  )
}

export default Home
