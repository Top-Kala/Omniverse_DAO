import Head from 'next/head'
import MainNav from '../components/MainNav'
import Footer from '../components/Footer'
import Link from 'next/link'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

export default function Home() {
  useEffect (()=>{
    Aos.init({ duration: 1000 })
  }, [])

  return (
    <div className='w-full main'>
      <Head>
        <title>Omniverse DAO</title>
        <meta name='description' content='A homepage for Omniverse DAO'/>
        <link rel='icon'href="/static/favicon.ico" />
      </Head>
      <MainNav/>
      <div data-aos="fade-up"  className='w-full h-screen flex flex-col justify-center items-center'>
        <p className='m-0 text-[20px] leading-[23px]'>ENTER THE</p>
        <p className='m-0 text-[40px] md:text-[100px] leading-[120px]'>OMNIVERSE</p>
        <a href='#overview'>
          <div className='button-borders explorer w-[231px] h-[61px]'>
            <button className='primary-button explorer-button w-full h-full'>Explore</button>
          </div>
        </a>
      </div>
      <div className='w-full items-center flex-col pt-[150px]' id='overview'>
        <div data-aos="fade-right" className='flex flex-col lg:flex-row w-full lg:w-4/6 m-auto pb-20'>
          <div className='w-full lg:px-6 px-4 lg:py-10 py-0 raleway'>
            <p className='text-[36px] font-medium m-0 leading-[42px] text-center lg:text-center'>The Omniverse is an ecosystem of truly interoperable media and protocols developed with <Link href="https://layerzero.network/"><a className='underline'>Layer Zero</a></Link>technology</p>
          </div>
        </div>
        <div class="grid grid-cols-3 gap-4">
          <div class="...">01</div>
          <div class="...">02</div>
          <div class="...">03</div>
          <div class="col-span-2 ...">04</div>
          <div class="...">05</div>
          <div class="...">06</div>
          <div class="col-span-2 ...">07</div>
        </div>
        <div className='w-1/9 lg:w-1/12 border-2 h-0 '></div>
        <div data-aos="fade-left" className='flex flex-col lg:flex-row w-full lg:w-4/6 m-auto pb-20'>
          <div className='w-full lg:px-6 px-4 lg:py-10 py-0 raleway'>
            <p className='text-[24px]  font-medium m-0 leading-[28px] text-center lg:text-center'>We seek to develop products that push the bleeding edge of NFT technology on a multitude of blockchains where every product has a superior emphasis on user experience</p>
            <br/><br/><br/>
            <p className='text-[24px]  font-medium m-0 leading-[28px] text-center lg:text-center'>From a groundbreaking natively interoperable NFT marketplace to a multi-blockchain domination style strategy game - we are building genuinely usefuland exciting products for everyone</p>
          </div>
        </div>
      </div>
      <div className='w-full items-center flex-col lg:pt-[150px] pt-[80px]'>
        <div data-aos="fade-right" className='flex flex-col lg:flex-row w-full lg:w-4/6 m-auto lg:pb-[60px] pb-20'>
          <div className='lg:w-2/6 w-full px-10 py-5 flex flex-col lg:items-end items-center'>
            <div className='w-[200px]'>
              <img src='../static/logo/omniverse-logo.svg' />
              <p className='m-0 mt-8 text-[30px] leading-[38px] text-center font-normal'>Omni-X</p>
            </div>
          </div>
          <div className='lg:w-4/6 w-full font-medium lg:px-6 px-4 lg:py-16 py-0 raleway'>
            <p className='text-[24px]  m-0 leading-[25px] text-justify lg:text-left'>An omnichain NFT marketplace, empowering creators and collectors to explore new frontier of omnichain liquidity and asset transfer</p>
 
            <br/>
            <p className='text-[24px] m-0 leading-[25px] text-justify lg:text-left'>Learn more about our innovative features here</p>
          </div>
        </div>
        <div data-aos="fade-left" className='flex flex-col lg:flex-row w-full lg:w-4/6 m-auto pb-20'>
          <div className='lg:w-2/6 w-full px-10 py-5 flex flex-col lg:items-end items-center'>
            <div className='w-[200px]'>
              <img src='../static/logo/omniwar-logo.svg' />
              <p className='m-0 mt-8 text-[30px] leading-[38px] text-center font-normal'>OmniWars</p>
            </div>
          </div>

          <div className='lg:w-4/6 font-medium w-full lg:px-6 px-4 lg:py-16 py-0 raleway'>
            <p className='text-[24px] m-0 leading-[25px] text-justify lg:text-left'>A compete-to-earn (C2E) strategy game where blockchain factions battle in a multi-chain universe </p>
            <br/>
            <p className='text-[24px] m-0 leading-[25px] text-justify lg:text-left'>Our C2E model puts maximum emphasis on the team work and strategic development rather than endless grind and randomized rewards.</p>
          </div>
        </div>
      </div>

      <div className='h-[200px]'>
      </div>
      <div className='xl:flex hidden flex-col items-center xl:pb-[220px] pb-[100px] uppercase'>
        <p data-aos="fade-down" className='lg:text-[50px] text-[25px] lg:leading-[120px] leading-[60px] m-0 text-white color text-center'>ROADMAP</p>
        <div className='lg:mt-[105px] mt-[20px] w-9/12 mx-auto text-[#c4c4c4]'>
          <div className='relative w-full h-[240px]' data-aos="fade-left">
            <div className='lg:flex hidden justify-center left-[46%]'>
              <img src='../static/road_map/left-white.svg' />
              <img src='../static/road_map/right-white.svg' />
              <img className='absolute bottom-[5px] left-[51%]' src='../static/road_map/line-right.svg' />
            </div>
            <div className='lg:w-[38%] w-4/5  absolute left-0 bottom-0'>
              <p className='text-[30px] m-0 uppercase leading-[50px] text-justify lg:text-right'>Capital Raise</p>
              <p className='text-[20px] m-0 leading-[30px] text-justify lg:text-right'>Expanded team and added core contributors to collaborate on development.</p>
            </div>
            <div className='lg:w-[38%] w-4/5  absolute right-0 top-[-120px]'>
              <p className='text-[30px] m-0 uppercase leading-[50px] text-justify lg:text-left'>Community & Core team Growth</p>
              <p className='text-[20px] m-0 leading-[30px] text-justify lg:text-left'>Launched Socials and github launched to establish, foster and grow community.</p>
              <p className='text-[30px] m-0 mr-[70px] leading-[50px] text-right'>Mar 2022</p>
            </div>
          </div>
          <div data-aos="fade-right" className='relative w-full h-[240px]'>
            <div className='lg:flex hidden justify-center left-[46%]'>
              <img src='../static/road_map/left-white.svg' />
              <img src='../static/road_map/right-white.svg' />
              <img className='absolute bottom-[5px] right-[51%]' src='../static/road_map/line-left.svg' />
            </div>
            <div className='lg:w-[38%] w-4/5  absolute left-0 top-[20%]'>
              <p className='text-[30px] m-0 ml-[60px] uppercase leading-[50px] text-left'>APR 2022</p>
            </div>
            <div className='lg:w-[38%] w-4/5  absolute right-0 bottom-0'>
              <p className='text-[30px] m-0 uppercase leading-[50px] lg:text-left'>GREG</p>
              <p className='text-[20px] m-0 leading-[30px] lg:text-left'>Launch Website showcasing interchain nft asset transfer. Genesis omniverse greg omni-nft colection. </p>
            </div>
          </div>
          <div data-aos="fade-left" className='relative w-full h-[240px]'>
            <div className='lg:flex hidden justify-center left-[46%]'>
              <img src='../static/road_map/left-grey.svg' />
              <img src='../static/road_map/right-grey.svg' />
              <img className='absolute bottom-[5px] left-[51%]' src='../static/road_map/line-right-grey.svg' />
            </div>
            <div className='lg:w-[38%] w-4/5  absolute right-0 top-[20%]'>
              <p className='text-[30px] m-0 mr-[60px] leading-[50px] text-right'>May 2022</p>
            </div>
            <div className='lg:w-[38%] w-4/5  absolute left-0 bottom-0'>
              <p className='text-[30px] m-0 uppercase leading-[50px] lg:text-right'>Omni X</p>
              <p className='text-[20px] m-0 leading-[30px] lg:text-right'>Alpha NFT marketplace infrastructure release</p>
            </div>
          </div>
          <div data-aos="fade-right" className='relative w-full h-[240px]'>
            <div className='lg:flex hidden justify-center left-[46%]'>
              <img src='../static/road_map/left-grey.svg' />
              <img src='../static/road_map/right-grey.svg' />
              <img className='absolute bottom-[5px] right-[51%]' src='../static/road_map/line-left-grey.svg' />
            </div>
            <div className='lg:w-[38%] w-4/5  absolute left-0 top-[20%]'>
              <p className='text-[30px] m-0 ml-[60px] uppercase leading-[50px] text-left'>JUNE 2022</p>
            </div>
            <div className='lg:w-[38%] w-4/5  absolute right-0 bottom-0'>
              <p className='text-[30px] m-0 uppercase leading-[50px] lg:text-left'>faction nfts</p>
              <p className='text-[20px] m-0 leading-[30px] lg:text-left'>NFT PFP Collections: faction specific GENESIS collections. Engagement Competitions: rewards for world building, fan art, and lore production.</p>
            </div>
          </div>
          <div data-aos="fade-left" className='relative w-full h-[240px]'>
            <div className='lg:flex hidden justify-center left-[46%]'>
              <img src='../static/road_map/left-grey.svg' />
              <img src='../static/road_map/right-grey.svg' />
              <img className='absolute bottom-[5px] left-[51%]' src='../static/road_map/line-right-grey.svg' />
              {/*<img className='absolute bottom-[2px] left-[78px]' src='../static/road_map/line-right.svg' />*/}
            </div>
            <div className='lg:w-[38%] w-4/5  absolute right-0 top-[20%]'>
              <p className='text-[30px] m-0 mr-[60px] leading-[50px] text-right'>Q3 2022</p>
            </div>
            <div className='lg:w-[38%] w-4/5  absolute left-0 bottom-0'>
              <p className='text-[30px] m-0 uppercase leading-[50px] lg:text-right'>Omni Wars</p>
              <p className='text-[20px] m-0 leading-[30px] lg:text-right'>Alpha gameplay launch</p>
            </div>
          </div>
          <div data-aos="fade-right" className='relative w-full h-[240px]'>
            <div className='lg:flex hidden justify-center left-[46%]'>
              <img src='../static/road_map/left-grey.svg' />
              <img src='../static/road_map/right-grey.svg' />
              <img className='absolute bottom-[5px] right-[51%]' src='../static/road_map/line-left-grey.svg' />
            </div>
            <div className='lg:w-[38%] w-4/5  absolute left-0 top-[20%]'>
              <p className='text-[30px] m-0 ml-[60px] uppercase leading-[50px] text-left'>Q4 2022</p>
            </div>
          </div>
        </div>
      </div>
      <div className='xl:hidden md:flex hidden flex-col items-center xl:pb-[220px] pb-[100px] uppercase'>
        <p className='lg:text-[50px] text-[40px] lg:leading-[120px] leading-[60px] m-0 text-white color text-center'>ROADMAP</p>
        <div className='mt-[250px] w-9/12 mx-auto'>
          <div className='relative w-full h-full mb-[200px]'>
            <div className='flex gap-[10px] mb-[20px] justify-center relative'>
              <div className="absolute w-2/5 left-0 top-[-250px]">
                <p className='text-[30px] ml-[15px] uppercase leading-[50px]'>Community & Core team Growth</p>
                <p className='text-[20px] leading-[30px]'>Launched Socials and github launched to  establish, foster and grow community.</p>
                <p className='text-[30px] ml-[15px] leading-[50px]'>Mar 2022</p>
              </div>
              <div className="absolute w-2/5 left-0 bottom-[0]">
                <p className='text-[30px] ml-[15px] uppercase leading-[50px]'>Capital Raise</p>
                <p className='text-[20px] leading-[30px]'>Expanded team and added core contributors to collaborate on development.</p>
                <p className='text-[30px] ml-[15px] leading-[50px]'>APR 2022</p>
              </div>
              <div className="flex justify-end w-1/4 h-[450px] border-y-[1px] border-white skew-y-[20deg]">
                <div className="w-[15%] h-[450px] bg-white">
                </div>
              </div>
              <div className="flex justify-start w-1/4 h-[450px] skew-y-[-20deg]">
                <div className="w-[15%] h-[450px] bg-white">
                </div>
              </div>
            </div>
            <div className='flex gap-[10px] mb-[20px] justify-center relative'>
              <div className="absolute w-2/5 left-0 bottom-[0]">
                <p className='text-[30px] ml-[15px] uppercase leading-[50px]'>GREG</p>
                <p className='text-[20px] leading-[30px]'>Launch Website showcasing interchain nft asset transfer. <br/> Genesis omniverse greg omni-nft colection.</p>
                <p className='text-[30px] ml-[15px] leading-[50px]'>MAY 2022</p>
              </div>
              <div className="flex justify-end w-1/4 h-[450px] border-b-[1px] border-white skew-y-[20deg]">
                <div className="w-[15%] h-[450px] bg-[#8C8C8C]">
                </div>
              </div>
              <div className="flex justify-start w-1/4 h-[450px] skew-y-[-20deg]">
                <div className="w-[15%] h-[450px] bg-[#C4C4C4]">
                </div>
              </div>
            </div>
            <div className='flex gap-[10px] mb-[20px] justify-center relative'>
              <div className="absolute w-2/5 left-0 bottom-[0]">
                <p className='text-[30px] ml-[15px] uppercase leading-[50px]'>Omni X</p>
                <p className='text-[20px] leading-[30px]'>Alpha NFT marketplace infrastructure release</p>
                <p className='text-[30px] ml-[15px] leading-[50px]'>JUNE 2022</p>
              </div>
              <div className="flex justify-end w-1/4 h-[450px] border-b-[1px] border-white skew-y-[20deg]">
                <div className="w-[15%] h-[450px] bg-[#8C8C8C]">
                </div>
              </div>
              <div className="flex justify-start w-1/4 h-[450px] skew-y-[-20deg]">
                <div className="w-[15%] h-[450px] bg-[#C4C4C4]">
                </div>
              </div>
            </div>
            <div className='flex gap-[10px] mb-[20px] justify-center relative'>
              <div className="absolute w-2/5 left-0 bottom-[0]">
                <p className='text-[30px] ml-[15px] uppercase leading-[50px]'>faction nfts</p>
                <p className='text-[20px] leading-[30px]'>NFT PFP Collections: faction specific GENESIS collections. <br/>Engagement Competitions: rewards for world building, fan art, and lore production.</p>
                <p className='text-[30px] ml-[15px] leading-[50px]'>Q3 2022</p>
              </div>
              <div className="flex justify-end w-1/4 h-[450px] border-b-[1px] border-white skew-y-[20deg]">
                <div className="w-[15%] h-[450px] bg-[#8C8C8C]">
                </div>
              </div>
              <div className="flex justify-start w-1/4 h-[450px] skew-y-[-20deg]">
                <div className="w-[15%] h-[450px] bg-[#C4C4C4]">
                </div>
              </div>
            </div>
            <div className='flex gap-[10px] mb-[20px] justify-center relative'>
              <div className="absolute w-2/5 left-0 bottom-[0]">
                <p className='text-[30px] ml-[15px] uppercase leading-[50px]'>Omni Wars</p>
                <p className='text-[20px] leading-[30px]'>Alpha gameplay launch</p>
                <p className='text-[30px] ml-[15px] leading-[50px]'>Q4 2022</p>
              </div>
              <div className="flex justify-end w-1/4 h-[450px] border-b-[1px] border-white skew-y-[20deg]">
                <div className="w-[15%] h-[450px] bg-[#8C8C8C]">
                </div>
              </div>
              <div className="flex justify-start w-1/4 h-[450px] skew-y-[-20deg]">
                <div className="w-[15%] h-[450px] bg-[#C4C4C4]">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='md:hidden flex flex-col items-center xl:pb-[220px] pb-[100px] uppercase'>
        <p className='lg:text-[50px] text-[40px] lg:leading-[120px] leading-[60px] m-0 text-white color text-center'>ROADMAP</p>
        <div className='mt-[250px] w-9/12 mx-auto'>
          <div className='relative w-full h-full mb-[200px]'>
            <div className='flex gap-[10px] mb-[20px] relative'>
              <div className='w-1/6 flex gap-[10px]'>
                <div className="flex justify-end w-2/4 h-[450px] skew-y-[20deg]">
                  <div className="w-full h-[450px] bg-white">
                  </div>
                </div>
                <div className="flex justify-start w-2/4 h-[450px] skew-y-[-20deg]">
                  <div className="w-full h-[450px] bg-white">
                  </div>
                </div>
              </div>
              <div className="absolute w-4/6 right-0 top-[-200px]">
                <p className='text-[30px] uppercase leading-[50px]'>Community & Core team Growth</p>
                <p className='text-[20px] leading-[30px]'>Launched Socials and github launched to  establish, foster and grow community.</p>
                <p className='text-[30px] leading-[50px]'>Mar 2022</p>
              </div>
              <div className="absolute w-4/6 right-0 bottom-[0]">
                <p className='text-[30px] uppercase leading-[50px]'>Capital Raise</p>
                <p className='text-[20px] leading-[30px]'>Expanded team and added core contributors to collaborate on development.</p>
                <p className='text-[30px] leading-[50px]'>APR 2022</p>
              </div>
            </div>
            <div className='flex gap-[10px] mb-[20px] relative'>
              <div className='w-1/6 flex gap-[10px]'>
                <div className="flex justify-end w-2/4 h-[450px] skew-y-[20deg]">
                  <div className="w-full h-[450px] bg-[#8C8C8C]">
                  </div>
                </div>
                <div className="flex justify-start w-2/4 h-[450px] skew-y-[-20deg]">
                  <div className="w-full h-[450px] bg-[#C4C4C4]">
                  </div>
                </div>
              </div>
              <div className="absolute w-4/6 right-0 bottom-[0]">
                <p className='text-[30px] uppercase leading-[50px]'>GREG</p>
                <p className='text-[20px] leading-[30px]'>Launch Website showcasing interchain nft asset transfer. <br/> Genesis omniverse greg omni-nft colection.</p>
                <p className='text-[30px] leading-[50px]'>MAY 2022</p>
              </div>
            </div>
            <div className='flex gap-[10px] mb-[20px] relative'>
              <div className='w-1/6 flex gap-[10px]'>
                <div className="flex justify-end w-2/4 h-[450px] skew-y-[20deg]">
                  <div className="w-full h-[450px] bg-[#8C8C8C]">
                  </div>
                </div>
                <div className="flex justify-start w-2/4 h-[450px] skew-y-[-20deg]">
                  <div className="w-full h-[450px] bg-[#C4C4C4]">
                  </div>
                </div>
              </div>
              <div className="absolute w-4/6 right-0 bottom-[0]">
                <p className='text-[30px] uppercase leading-[50px]'>Omni X</p>
                <p className='text-[20px] leading-[30px]'>Alpha NFT marketplace infrastructure release</p>
                <p className='text-[30px] leading-[50px]'>JUNE 2022</p>
              </div>
            </div>
            <div className='flex gap-[10px] mb-[20px] relative'>
              <div className='w-1/6 flex gap-[10px]'>
                <div className="flex justify-end w-2/4 h-[450px] skew-y-[20deg]">
                  <div className="w-full h-[450px] bg-[#8C8C8C]">
                  </div>
                </div>
                <div className="flex justify-start w-2/4 h-[450px] skew-y-[-20deg]">
                  <div className="w-full h-[450px] bg-[#C4C4C4]">
                  </div>
                </div>
              </div>
              <div className="absolute w-4/6 right-0 bottom-[0]">
                <p className='text-[30px] uppercase leading-[50px]'>faction nfts</p>
                <p className='text-[20px] leading-[30px]'>NFT PFP Collections: faction specific GENESIS collections. <br/>Engagement Competitions: rewards for world building, fan art, and lore production.</p>
                <p className='text-[30px] leading-[50px]'>Q3 2022</p>
              </div>
            </div>
            <div className='flex gap-[10px] mb-[20px] relative'>
              <div className='w-1/6 flex gap-[10px]'>
                <div className="flex justify-end w-2/4 h-[450px] skew-y-[20deg]">
                  <div className="w-full h-[450px] bg-[#8C8C8C]">
                  </div>
                </div>
                <div className="flex justify-start w-2/4 h-[450px] skew-y-[-20deg]">
                  <div className="w-full h-[450px] bg-[#C4C4C4]">
                  </div>
                </div>
              </div>
              <div className="absolute w-4/6 right-0 bottom-[0]">
                <p className='text-[30px] uppercase leading-[50px]'>Omni Wars</p>
                <p className='text-[20px] leading-[30px]'>Alpha gameplay launch</p>
                <p className='text-[30px] leading-[50px]'>Q4 2022</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
