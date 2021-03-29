import React from 'react'
import {
  HomeWrapper,
  MainRow,
  MainColumn,
  HelloWrapper,
  Hello,
  About,
  ImgWrapper,
} from './Home.elements'
import LottieAnimation from './LottieAnimation'

const Home = () => {
  return (
    <>
    <HomeWrapper>
      <MainRow>
        <MainColumn>
          <HelloWrapper>
            <Hello>
               Mitchell Mujwit <br />
            </Hello>
            <About>
              A passionate full stack <br />
              developer, UX designer and <br />
              professional problem solver.
            </About>
          </HelloWrapper>
          </MainColumn>
          <MainColumn>
          <ImgWrapper>
          <LottieAnimation />
          </ImgWrapper>
        </MainColumn>
      </MainRow>
    </HomeWrapper>
    </>
  )
}

export default Home