import React from 'react'
import styled from 'styled-components'

const ReviewFooter = () => {
  return (
    <>
      <WhiteCol>
        <Headline style={{lineHeight: '30px;'}}>
          Reviews
          <span className="float-right">
            <button type="button" className="btn btn-yellow btn-sm">
              <i className="icon icon-hg-pencil-notes-paper" />
              Write a review
            </button>
          </span>
        </Headline>
        <ul className="list-comments" />
        <TextCenter>
          <button type="button" className="btn btn-secondary">
            Be the first person to review
          </button>
        </TextCenter>
      </WhiteCol>
    </>
  )
}

export default ReviewFooter

const WhiteCol = styled.div`
    background: #fff;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
    padding: 1.25rem;
    margin-bottom: 20px;
  `,
  TextCenter = styled.div`
    text-align: center !important;
  `,
  Headline = styled.h2`
    font-size: 16px;
    color: #4a4a4a;
    margin: 0 0 15px;
    font-weight: 700;
    text-transform: uppercase;
    border-bottom: 1px solid #979797;
    padding-bottom: 10px;
  `
