import React from 'react'
import styled from 'styled-components'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCaretDown} from '@fortawesome/free-solid-svg-icons'

import Dropdown from '../Dropdown'

const GuideMenu = ({ history }) => {
  return (
    <>
      <Menu right>
          <Dropdown
            target={() => <ProfileDropdown>
              <Span>Guides <FontAwesomeIcon icon={faCaretDown} /></Span>
            </ProfileDropdown>
            }
            isSearchable={false}
            options={[
              {
                id     : 1,
                label  : 'All Guides',
                onClick: () => history.push('/guides'),
              },
              {
                id     : 2,
                label  : 'Guide',
                onClick: () => {
                  history.push('/guide')
                },
              },
            ]}
          />
        </Menu>
    </>
  )
}

export default GuideMenu


function styleMenuPosition(props) {
  if (props.right) {
    return 'flex-end'
  }
  if (props.left) {
    return 'flex-start'
  }
  if (props.center) {
    return 'center'
  }
  return 'center'
}

const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: ${props => {
    return styleMenuPosition(props)
  }};
`,
  ProfileDropdown = styled.div`
    cursor: pointer;
  `,
  Span = styled.span`
    color: #314252;
    font-size: 16px;
  `