import React from 'react'
import styled from 'styled-components'

import Button from '../../../../commons/Buttons'

const List = ({items}) => {
  return (
    <>
      {items().map(item => {
        return (
          <Grid key={item.id}>
            <ImageContainer>
              <Img src={item.image} />
            </ImageContainer>
            <InfoContainer>
              <DetailInfo>
                <GuideDetail>
                  <H4>{item.guide_info.name}</H4>
                  <UL>
                    {item.guide_info.experience && (
                      <LI>Experience: {item.guide_info.experience}</LI>
                    )}
                    {item.guide_info.location && (
                      <LI>Location: {item.guide_info.location}</LI>
                    )}
                    {item.guide_info.language && (
                      <LI>
                        Language:{' '}
                        {item.guide_info.language.map((lang, id) => (
                          <>
                            <span key={lang}>{lang}</span>
                            <span>
                              {id >= 0 &&
                                id < item.guide_info.language.length - 1 &&
                                ','}
                            </span>
                          </>
                        ))}
                      </LI>
                    )}
                    {item.guide_info.expertise_region && (
                      <LI>
                        Experties Region:{' '}
                        {item.guide_info.expertise_region.map((region, id) => (
                          <>
                            <span key={region}>{region}</span>
                            <span>
                              {id >= 0 &&
                                id <
                                  item.guide_info.expertise_region.length - 1 &&
                                ','}
                            </span>
                          </>
                        ))}
                      </LI>
                    )}
                  </UL>
                </GuideDetail>
                <PricingDetail>
                  <H4>{`USD ${item.pricing_info.rate}/ day`}</H4>
                  <Text>{item.pricing_info.reviews} review</Text>
                  <Button>
                    <Button.Content>Request Now</Button.Content>
                  </Button>
                </PricingDetail>
              </DetailInfo>
            </InfoContainer>
          </Grid>
        )
      })}
    </>
  )
}

export default List

const Grid = styled.div`
    display: flex;
    padding: 10px;
    border-radius: 4px;
    background: #fff;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
  `,
  ImageContainer = styled.div`
    height: 156px;
    flex: 0 0 156px;
    background-color: #dfdfdf;
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: cover;
  `,
  Img = styled.img`
    position: relative;
    z-index: -1;
    width: 100%;
  `,
  InfoContainer = styled.div`
    padding-left: 12px;
    flex: 1 1;
  `,
  DetailInfo = styled.div`
    display: flex;
    flex-wrap: wrap;
  `,
  GuideDetail = styled.div`
    flex: 1 1;
  `,
  H4 = styled.h4`
    font-size: 18px;
    color: #4a4a4a;
    margin-top: 0;
    margin-bottom: 4px;
  `,
  Text = styled.p`
    font-size: 15px;
    margin-bottom: 3px;
    line-height: 19px;
  `,
  UL = styled.ul`
    margin-bottom: 5px;
  `,
  LI = styled.li`
    font-size: 14px;
    color: #4a4a4a;
  `,
  PricingDetail = styled.div`
    display: flex;
    flex-direction: column;
    text-align: right;
    @media (max-width: 1024px) {
      flex: 0 0 29%;
    }
  `
