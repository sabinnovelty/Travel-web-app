import React from 'react'
import styled from 'styled-components'

import Button from '../../../commons/Buttons'
import Modal from '../../../commons/ModalBox'

const RequestPorter = ({isOpen, setIsOpen}) => {
  return (
    <>
      <Modal
        wrapperStyle={{width: 800, maxWidth: '100%'}}
        open={isOpen}
        onClose={() => setIsOpen(false)}
        headerText="Request a porter guide"
      >
        <Grid>
          <ImageContainer>
            <Img src="https://s3.amazonaws.com/honeyguide/assets/porter-guide.png" />
          </ImageContainer>
          <InfoContainer>
            <DetailInfo>
              <GuideDetail>
                <H4>Porter Guide</H4>
                <p>
                  A Porter-Guide is someone who will carry your bags and show
                  you the path while in the trails.
                </p>
                <UL>
                  <LI>- Basic Guiding and will Carry upto 13 kgs.</LI>
                  <LI>
                    - Mostly Locals. Will join you from the trailhead. (e.g.
                    Lukla, Pokhara).
                  </LI>
                  <LI>- Limited Communication and First-Aid Skills.</LI>
                </UL>
              </GuideDetail>
              <PricingDetail>
                <H4>USD 25/ day</H4>
                <Button>
                  <Button.Content>Request Now</Button.Content>
                </Button>
              </PricingDetail>
            </DetailInfo>
          </InfoContainer>
        </Grid>
      </Modal>
    </>
  )
}

export default RequestPorter

const Grid = styled.div`
    display: flex;
    padding: 10px;
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
