import React from 'react'
import styled from 'styled-components'
import {reduxForm} from 'redux-form'
import Container from '../../../../commons/Style/Container'
import Button from '../../../../commons/Buttons'
import Row from '../../../../commons/Forms/Row'

import ReviewFooter from '../../commons/ReviewFooter'
import InlineSearch from './InlineSearch'
import Search from './Search'

const Detail = () => {
  return (
    <>
      <NoGutter>
        <Container>
          <Row>
            <div className="col-12 col-lg-12 col-xl-3">
              <div bottomoffset="0" offset="0">
                <Fixed>
                  <SidePanel>
                    <Search />
                  </SidePanel>
                </Fixed>
              </div>
            </div>
            <div className="col-12 col-lg-9">
              <LodgeDetail>
                <div id="sd-lodge-price" data-lodge-price="20">
                  <Headline>
                    Gokyo resort
                    <Review>0 Review</Review>
                  </Headline>
                  <UL>
                    <LI>
                      <span style={{textTransform: 'capitalize;'}}>
                        <a href="/gokyo.d24435261ee0.everest-region">Gokyo</a>
                      </span>
                      <span>,</span>
                      <span
                        id="sd-lodge-description"
                        data-lodge-description="Gokyo Resort, Gokyo, Everest Region"
                        style={{textTransform: 'capitalize;'}}
                      >
                        <a href="/p/everything-about-the-everest-base-camp-trek/">
                          Everest Region
                        </a>
                      </span>
                    </LI>
                    <LI>
                      <a href="tel:9818088578">+977-9818088578, </a>
                      <a href="tel:+977-38540077">+977-+977-38540077 </a>
                    </LI>
                  </UL>
                </div>
                <div>
                  <button
                    type="button"
                    id="lodges-add-to-cart-btn"
                    className="btn btn-yellow btn btn-secondary"
                  >
                    Add to Cart
                  </button>
                </div>
              </LodgeDetail>
              <LodgeImage
                id="sd-lodge-image"
                data-lodge-image="https://apiv2.honeyguideapps.com/static/lodging/b671c1490341_bl.jpeg"
              />
              <ClearFix />
              <div>
                <section>
                  <InlineSearch />
                </section>
                <WhitePanel>
                  <Title>CHOOSE YOUR ROOM</Title>
                  <RoomHolder>
                    <RoomNamePrice>
                      <RoomName>Room with Attached Bathroom</RoomName>
                      <RoomPrice>
                        <Ins>USD 29</Ins>
                      </RoomPrice>
                    </RoomNamePrice>
                    <RoomSummary>
                      <RoomDetail>
                        <div className="room_include_service">
                          <RoomServiceTitle>Included Services</RoomServiceTitle>
                          <RoomServices>
                            <RoomService>
                              <i className="icon icon-hg-bed" /> Bed
                            </RoomService>
                            <RoomService>
                              <i className="icon icon-hg-bread" /> Breakfast
                            </RoomService>
                          </RoomServices>
                          <RoomNotes>
                            <RoomNote>
                              * Room Bookings are on a twin sharing basis.
                            </RoomNote>
                            <RoomNote>
                              * Booking Date changes of +/-2 days will be
                              accommodated by this lodge.
                            </RoomNote>
                          </RoomNotes>
                          <RoomPlusPoint>
                            <li>
                              <strong>Free 48 hours</strong> cancellation
                            </li>
                            <li>Good breakfast included</li>
                          </RoomPlusPoint>
                          <RoomChargeInfo>
                            <p>
                              <strong>Includes all taxes</strong>
                            </p>
                          </RoomChargeInfo>
                        </div>
                      </RoomDetail>
                      <RoomInfo>
                        <RoomPP>
                          <RoomPricePerson>
                            Price for 1 Night and 1 trekker
                          </RoomPricePerson>
                          <RoomPrice>
                            <Ins>USD 29</Ins>
                          </RoomPrice>
                          <RoomCharge>
                            <p>
                              <strong>Includes all taxes</strong>
                            </p>
                          </RoomCharge>
                          <RoomPlusPoint>
                            <li>
                              <strong>Free 24 hours</strong> cancellation
                            </li>
                            <li>Very good breakfast included</li>
                          </RoomPlusPoint>
                        </RoomPP>
                        <button
                          type="button"
                          id="lodges-add-to-cart-btn"
                          className="btn btn-yellow"
                        >
                          Check Availability
                        </button>
                      </RoomInfo>
                    </RoomSummary>
                  </RoomHolder>
                  <RoomHolder>
                    <RoomNamePrice>
                      <RoomName>Basic Room</RoomName>
                      <RoomPrice>
                        <Ins>USD 20</Ins>
                      </RoomPrice>
                    </RoomNamePrice>
                    <RoomSummary>
                      <RoomDetail>
                        <div className="room_include_service">
                          <RoomServiceTitle>Included Services</RoomServiceTitle>
                          <RoomServices>
                            <RoomService>
                              <i className="icon icon-hg-bed" /> Bed
                            </RoomService>
                            <RoomService>
                              <i className="icon icon-hg-bread" /> Breakfast
                            </RoomService>
                          </RoomServices>
                          <RoomNotes>
                            <RoomNote>
                              * Room Bookings are on a twin sharing basis.
                            </RoomNote>
                            <RoomNote>
                              * Booking Date changes of +/-2 days will be
                              accommodated by this lodge.
                            </RoomNote>
                          </RoomNotes>
                          <RoomPlusPoint>
                            <li>
                              <strong>Free 48 hours</strong> cancellation
                            </li>
                            <li>Good breakfast included</li>
                          </RoomPlusPoint>
                          <RoomCharge>
                            <RoomChargeNotice>
                              <strong>Includes all taxes</strong>
                            </RoomChargeNotice>
                          </RoomCharge>
                        </div>
                      </RoomDetail>
                      <RoomInfo>
                        <RoomPP>
                          <RoomPricePerson>
                            Price for 1 Night and 1 trekker
                          </RoomPricePerson>
                          <RoomPrice>
                            <Ins>USD 20</Ins>
                          </RoomPrice>
                          <RoomCharge>
                            <p>
                              <strong>Includes all taxes</strong>
                            </p>
                          </RoomCharge>
                          <RoomPlusPoint>
                            <li>
                              <strong>Free 24 hours</strong> cancellation
                            </li>
                            <li>Very good breakfast included</li>
                          </RoomPlusPoint>
                        </RoomPP>
                        <button
                          type="button"
                          id="lodges-add-to-cart-btn"
                          className="btn btn-yellow"
                        >
                          Check Availability
                        </button>
                      </RoomInfo>
                    </RoomSummary>
                  </RoomHolder>
                </WhitePanel>
              </div>
              <ReviewFooter />
            </div>
          </Row>
        </Container>
      </NoGutter>
    </>
  )
}

export default reduxForm({
  form: 'searchHotel',
})(Detail)

const NoGutter = styled.div`
    margin-right: 0;
    margin-left: 0;
    ${props =>
      props.col &&
      `
    flex-basis: 0;
    flex-grow: 1;
    max-width: 100%;
  `}
  `,
  Fixed = styled.div`
    position: sticky;
    width: 271px;
  `,
  SidePanel = styled.section`
    color: #4a4a4a;
    background-color: #fff;
    padding: 10px 15px 0;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.3);
    margin-bottom: 20px;
    display: none !important;
    @media (min-width: 1200px) {
      display: block !important;
    }
  `,
  LodgeDetail = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: 8px;
    flex-wrap: wrap;
  `,
  Headline = styled.h1`
    font-size: 32px;
    text-transform: capitalize;
    font-weight: 700;
    line-height: 32px;
    margin-bottom: 0;
  `,
  Review = styled.span`
    font-size: 14px;
    color: #bbb;
    font-weight: 400;
  `,
  UL = styled.ul`
    display: flex;
    line-height: 1;
    margin-top: -3px;
  `,
  LI = styled.li`
    &:nth-child(1) {
      color: #4fc3f7;
    }
    &:nth-child(2) {
      display: flex;
      flex-wrap: wrap;
    }
    margin-right: 8px;
  `,
  LodgeImage = styled.div`
    margin-bottom: 20px;
    min-height: 339px;
    background-color: #e3dfdf;
    position: relative;
    overflow: hidden;
  `,
  ClearFix = styled.div`
    :after {
      display: block;
      clear: both;
      content: '';
    }
  `,
  WhitePanel = styled.div`
    background: #fff;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
    padding: 1.25rem;
    margin-bottom: 20px;
  `,
  Title = styled.h2`
    font-size: 14px;
    border-bottom: 1px solid #ebebeb;
    padding-bottom: 10px;
  `,
  RoomHolder = styled.section`
    background-color: #f8f8f8;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-bottom: 15px;
    padding: 10px 15px;
  `,
  RoomNamePrice = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #ccc;
    padding-bottom: 5px;
    margin-bottom: 10px;
  `,
  RoomName = styled.h5`
    font-size: 16px;
    line-height: 21px;
    margin-bottom: 0;
    font-weight: 600;
  `,
  RoomPrice = styled.span`
    color: #e91e63;
    font-weight: 700;
  `,
  Ins = styled.ins`
    text-decoration: none;
  `,
  RoomSummary = styled.div`
    display: flex;
    flex-wrap: wrap;
  `,
  RoomDetail = styled.div`
    flex: 0 0 70%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  `,
  RoomServiceTitle = styled.h5`
    font-weight: 600;
    line-height: normal;
    font-size: 14px;
    color: #000;
    margin-bottom: 0;
  `,
  RoomServices = styled.ul`
    display: flex;
    flex-wrap: wrap;
    margin: 3px 0;
  `,
  RoomService = styled.li`
    margin-right: 13px;
  `,
  RoomNotes = styled.ul`
    flex-grow: 1;
    margin-bottom: 15px;
  `,
  RoomNote = styled.li`
    font-weight: 600;
    font-size: 12px;
    color: #824c61;
  `,
  RoomChargeNotice = styled.p`
    margin-bottom: 0;
    font-size: 13px;
  `,
  RoomInfo = styled.div`
    flex: 0 0 30%;
    border-left: 1px solid #ccc;
    text-align: right;
    padding-left: 15px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    flex-direction: column;
  `,
  RoomPP = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
  `,
  RoomPricePerson = styled.span`
    color: #fff;
    font-size: 12px;
    background-color: #537bb4;
    padding: 1px 10px;
    border-radius: 4px;
  `,
  RoomCharge = styled.div`
    display: none;
  `,
  RoomChargeInfo = styled.p`
    margin-bottom: 0;
    font-size: 13px;
  `,
  RoomPlusPoint = styled.ul`
    margin-top: 3px;
    flex-grow: 1;
  `
