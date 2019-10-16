import React from 'react'
// import YouTube from 'react-youtube';
import styled from 'styled-components'

import theme from '../../../constants/theme'
import Himalaya from '../../../assets/images/banner.png'
import Search from './Search'

// const opts = {
// 	width: '100%',
//   height: '600px',
//   playerVars: {
//     autoplay: 1
//   }
// };

const Header = () => {
  return (
    <>
      {/* <Wrapper>
         <BannerImage img={Himalaya}>
            <Overlay />
            <BannerText>
              <PageCenter>
                <Title>Amazing tours and holidays around the world</Title>
                <Search />
              </PageCenter>
            </BannerText>
         </BannerImage>
      </Wrapper> */}
      <HeroSection>
        <FormSection>
          <Title>Amazing tours and holidays around the world</Title>
          <Form>
            <Search />
          </Form>
        </FormSection>
      </HeroSection>
    </>
  )
}

export default Header

const HeroSection = styled.div`
    display: flex;
    flex-flow: row wrap;
    position: relative;
    background-image: url(${Himalaya});
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-size: cover;
    width: 83%;
    height: calc(100vh - 110px);
    display: block;
    padding: 9em;
    margin-left: 230px;
  `,
  FormSection = styled.div`
    background: #fff;
    padding: 30px 30px 30px 10px;
    width: 33.33%;
    position: absolute;
    top: 50px;
    left: -200px;
    box-shadow: 0 0 10px #3333;
    border-radius: 6px;
    z-index: 10;
  `,
  Form = styled.form`
    display: flex;
    flex-direction: column;
  `,
  Title = styled.p`
    font-weight: bold;
    color: ${theme.color.primary};
    font-size: 1em;
    text-align: center;
  `

// const Wrapper = styled.div`

// `,
// BannerImage = styled.div`
//   background-image: ${props => props.img && `url(${props.img})`};
//   background-repeat: no-repeat;
//   background-size: cover;
//   background-position: 50% 50%;
//   position: relative;
//   width: 100%;
//   height: auto;
//   display: block;
//   padding: 9em;
// `,
// Overlay = styled.div`
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background-color: rgba(0, 0, 0, 0.5);
// `,
// BannerText = styled.div`
//   position: relative;
//   text-align: center;
//   width: 100%;
//   z-index: 1;
//   padding: 50px 0;
//   @media (max-width: 767px){
//     padding: 50px 15px;
//   }
// `,
// PageCenter = styled.div`
//   @media (max-width: 767px){
//     padding: 0;
//   }
// `,
// Title = styled.p`
//   font-weight: bold;
//   color: white;
//   font-size: 2.3em;
// `
