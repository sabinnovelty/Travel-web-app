import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Container from "../../../../commons/Style/Container";
import Button from "../../../../commons/Buttons";
import ReviewFooter from "../../commons/ReviewFooter";
import CreateGuide from "./CreateGuide/index";

const Detail = () => {
  return (
    <>
      <Container>
        <BannerHolder>
          <CoverImage>
            <img
              className="banner-img"
              src="https://s3.amazonaws.com/honeyguide/assets/profile-bg.jpg"
              alt="banner"
            />
          </CoverImage>
          <Info>
            <ProfileImage
              style={{
                backgroundImage:
                  "url('https://apiv2.honeyguideapps.com/static/user/a843f8bd2e87_cl.jpeg')"
              }}
            />
            <OtherDetail>
              <GuideDetail>
                <GuideName>Sun Bahadur Tamang </GuideName>
                <GuideMetaInfo>Based In: Kathmandu</GuideMetaInfo>
                <GuideMetaInfo>Experience: 10 years</GuideMetaInfo>
              </GuideDetail>
              <GuidePrice>
                <Price>USD 25/day</Price>
                <Brk>Price for 4 Days is USD 130</Brk>
                <Inclusion>
                  Includes Wages, Insurance, Food &amp; Lodging only.
                </Inclusion>
                <Cancellation>Free Cancellation within 7 days</Cancellation>
                <div className="button-inline" style={{ marginTop: "4px;" }}>
                  <Link to="/payment">
                    <Button>
                      <Button.Content>Request Guide</Button.Content>
                    </Button>
                  </Link>
                </div>
              </GuidePrice>
            </OtherDetail>
          </Info>
        </BannerHolder>
        <Row>
          <ThreeCol>
            <WhiteCol>
              <VerifyList>
                <VerifyListItem>
                  <i className="icon icon-hg-check-circle verified" /> Certified
                  Guide
                </VerifyListItem>
                <VerifyListItem>
                  <i className="icon icon-hg-check-circle verified" /> Verified
                  Email Address
                </VerifyListItem>
                <VerifyListItem>
                  <i className="icon icon-hg-check-circle verified" /> Verified
                  Phone Number
                </VerifyListItem>
                <VerifyListItem>
                  <i className="icon icon-hg-check-circle verified" /> Verified
                  Government Id
                </VerifyListItem>
              </VerifyList>
            </WhiteCol>
            <WhiteCol>
              <p style={{ marginBottom: "0px;" }}>
                <p style={{ fontSize: "15px;", marginBottom: "4px;" }}>
                  Before booking, feel free to confirm if the guide is the right
                  one for you by:
                </p>
                <ol
                  style={{
                    marginBottom: "0px;",
                    listStyle: "decimal;",
                    marginLeft: "15px;"
                  }}
                >
                  <li style={{ marginBottom: "4px;", fontSize: "15px;" }}>
                    Chatting with her/him using the contact information
                    provided.
                  </li>
                  <li style={{ fontSize: "15px;" }}>
                    Going through their Social Media Link provided.
                  </li>
                </ol>
              </p>
            </WhiteCol>
          </ThreeCol>
          <NineColumn>
            {/* <WhiteCol>
              <FlexCol>
                <FlexRow>
                  <Key>Introduction</Key>
                  <Value>
                    I'm Sun Bahadur Tamang from Solukhumbu- 29 years old. I have
                    been working as a guide with Himalayan Expedition since
                    2009. I organize both Camping treks and lodge treks in the
                    trekking areas of Nepal.
                  </Value>
                </FlexRow>
                <FlexRow>
                  <Key>From</Key>
                  <Value>Solukhumbu</Value>
                </FlexRow>
                <FlexRow>
                  <Key>Preferred Trekking Regions</Key>
                  <Value>
                    Everest Region, Kanchanjungha Trek, Langtang Region,
                    Annapurna Region
                  </Value>
                </FlexRow>
              </FlexCol>
            </WhiteCol> */}
            {/* create guide form */}
            <CreateGuide />
            {/* <WhiteCol>
              <Headline>Contact Information</Headline>
              <FlexRow>
                <Key>Email Address</Key>
                <Value>sunbahadurtamang92@gmail.com</Value>
              </FlexRow>
              <FlexRow>
                <Key>Contact Number</Key>
                <Value>
                  <a href="tel:9861397490">9861397490,</a>
                  <a href="tel:9818429052">9818429052</a>
                </Value>
              </FlexRow>
              <FlexRow>
                <Key>Chat Platform Links</Key>
                <Value>
                  <ProfileChatLinks>
                    <ProfileChatLink>
                      <a
                        href="https://www.facebook.com/sunbahadur.tamang.940/"
                        className="facebook"
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                      >
                        <i className="icon icon-hg-facebook-square" />
                      </a>
                    </ProfileChatLink>
                    <ProfileChatLink>
                      <a
                        href="viber://chat?number=9861397490"
                        className="viber"
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                      >
                        <i className="icon icon-hg-viber" />
                      </a>
                    </ProfileChatLink>
                  </ProfileChatLinks>
                </Value>
              </FlexRow>
            </WhiteCol>
            <WhiteCol>
              <Headline>Personal Information</Headline>
              <FlexCol>
                <FlexRow>
                  <Key>Daily Wages (USD per day)</Key>
                  <Value>USD 25</Value>
                </FlexRow>
                <FlexRow>
                  <Key>Experience In Year</Key>
                  <Value>10</Value>
                </FlexRow>
                <FlexRow>
                  <Key>Safety Training</Key>
                  <Value>
                    <span>Rock Climbing Training</span>
                    <span>, Firstaid Training</span>
                  </Value>
                </FlexRow>
                <FlexRow>
                  <Key>Languages</Key>
                  <Value>
                    <span>English</span>
                    <span>, Korean</span>
                  </Value>
                </FlexRow>
                <FlexRow>
                  <Key>Specilization</Key>
                  <Value>
                    <span>Trekking</span>
                    <span>, Peak Climbing</span>
                    <span>, camping treks</span>
                  </Value>
                </FlexRow>
                <FlexRow>
                  <Key>Expertise Region</Key>
                  <Value>
                    <span>Everest Region</span>
                    <span>, Kanchanjungha Trek</span>
                    <span>, Langtang Region</span>
                    <span>, Annapurna Region</span>
                  </Value>
                </FlexRow>
              </FlexCol>
            </WhiteCol>
            <WhiteCol>
              <Headline>Upcoming / Previous Treks</Headline>
              <UpcomingTable>
                <TrekRowHead>
                  <TrekName>Trek Name</TrekName>
                  <TrekDate>Start Date</TrekDate>
                  <TrekDays>Days</TrekDays>
                </TrekRowHead>
                <TrekRow>
                  <TrekName>Kanchanjungha Trek</TrekName>
                  <TrekDate>2018-09-21</TrekDate>
                  <TrekDays>18 Days</TrekDays>
                </TrekRow>
                <TrekRow>
                  <TrekName>Kanchanjungha Trek</TrekName>
                  <TrekDate>2018-10-15</TrekDate>
                  <TrekDays>21 Days</TrekDays>
                </TrekRow>
                <TrekRow>
                  <TrekName>Everest Base Camp Trek</TrekName>
                  <TrekDate>2019-01-06</TrekDate>
                  <TrekDays>12 Days</TrekDays>
                </TrekRow>
              </UpcomingTable>
            </WhiteCol> */}
            <ReviewFooter />
            <WhiteCol>
              <h2>See Also</h2>
            </WhiteCol>
          </NineColumn>
        </Row>
      </Container>
    </>
  );
};

export default Detail;

const BannerHolder = styled.div`
    background: #fff;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
  `,
  CoverImage = styled.div`
    min-height: 200px;
    max-height: 220px;
    overflow: hidden;
    background-color: #e2e2e2;
    position: relative;
  `,
  Info = styled.div`
    display: flex;
    padding: 0 1.025rem 1.025rem;
    position: relative;
  `,
  ProfileImage = styled.div`
    height: 210px;
    flex: 0 0 210px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50%;
    border-radius: 6px;
    background-color: #ececec;
    border: 5px solid #ececec;
    margin-top: -95px;
  `,
  OtherDetail = styled.div`
    flex: 1 1;
    padding-left: 15px;
    display: flex;
    flex-wrap: wrap;
  `,
  GuideDetail = styled.div`
    flex: 1 1;
  `,
  GuideName = styled.h4`
    font-size: 24px;
    margin: 5px 0;
    color: #4a4a4a;
    font-weight: 700;
  `,
  GuideMetaInfo = styled.p`
    margin-bottom: 4px;
    font-size: 16px;
  `,
  GuidePrice = styled.div`
    text-align: right;
  `,
  Price = styled.h5`
    font-size: 28px;
    color: #000;
    font-weight: 700;
    margin: 0;
  `,
  Brk = styled.span`
    color: #fff;
    font-size: 12px;
    background-color: #537bb4;
    padding: 1px 10px;
    border-radius: 4px;
  `,
  Inclusion = styled.p`
    color: rgb(74, 74, 74);
    line-height: 12px;
    font-size: 13px;
    margin: 0px;
  `,
  Cancellation = styled.p`
    color: rgb(233, 30, 99);
    font-size: 0.8rem;
    margin-bottom: 0px;
  `,
  RequestGuidBtn = styled.button`
    margin: 0 7.5px;
  `,
  Row = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-right: -10px;
    margin-left: -10px;
  `,
  ThreeCol = styled.div`
    position: relative;
    width: 100%;
    padding-right: 10px;
    padding-left: 10px;
    @media (min-width: 992px) {
      flex: 0 0 25%;
      max-width: 25%;
    }
    flex: 0 0 100%;
    max-width: 100%;
  `,
  WhiteCol = styled.div`
    background: #fff;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
    padding: 1.25rem;
    margin-bottom: 20px;
  `,
  VerifyList = styled.ul`
    margin-bottom: 0;
  `,
  VerifyListItem = styled.li`
    display: flex;
    align-items: center;
    font-size: 14px;
    color: #4a4a4a;
    line-height: 27px;
  `,
  VerfiedIcon = styled.i`
    color: #3eb466;
    margin-right: 5px;
    font-size: 13px;
  `,
  NineColumn = styled.div`
    position: relative;
    width: 100%;
    padding-right: 10px;
    padding-left: 10px;
    flex: 0 0 75%;
    max-width: 75%;
    @media (min-width: 992px) {
      flex: 0 0 75%;
      max-width: 75%;
    }
    flex: 0 0 100%;
    max-width: 100%;
  `,
  FlexCol = styled.div`
    display: flex;
    flex-direction: column;
  `,
  FlexRow = styled.div`
    display: flex;
  `,
  Key = styled.div`
    flex: 0 0 25%;
    padding: 0.2em;
    color: grey;
    font-size: 15px;
  `,
  Value = styled.div`
    font-size: 15px;
    flex: 0 0 75%;
    padding: 0.2em;
    color: #4a4a4a;
    flex-wrap: wrap;
  `,
  Headline = styled.h2`
    font-size: 16px;
    color: #4a4a4a;
    margin: 0 0 15px;
    font-weight: 700;
    text-transform: uppercase;
    border-bottom: 1px solid #979797;
    padding-bottom: 10px;
  `,
  ProfileChatLinks = styled.ul`
    display: flex;
  `,
  ProfileChatLink = styled.li`
    margin-right: 8px;
    font-size: 21px;
  `,
  UpcomingTable = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 0 0.75rem;
  `,
  TrekRow = styled.div`
    display: flex;
    flex-direction: row;
    padding: 0.78rem 0.7rem;
    font-size: 16px;
    border-bottom: 1px solid #dedede;
    flex-wrap: wrap;
  `,
  TrekRowHead = styled.div`
    ${TrekRow} {
      font-weight: 700;
      text-transform: uppercase;
      background-color: #f7f7f7;
    }
  `,
  TrekName = styled.div`
    flex: 0 0 60%;
    display: flex;
    align-items: center;
  `,
  TrekDate = styled.div`
    flex: 0 0 20%;
    display: flex;
    align-items: center;
  `,
  TrekDays = styled.div`
    ${TrekDate}
  `;
