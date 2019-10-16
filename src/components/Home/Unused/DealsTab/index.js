import React from 'react';
import styled from 'styled-components'

import Tabs from '../../../../commons/Tabs'
import ThingsToDo from './ThingsToDo'
import TravelDeals from './TravelDeals'

const DealsTab = () => {
  return (
    <>
      <Wrapper>
        <Tabs activeTab="1">
          <Tabs.List render={() => {
              return (
                <>
                  <TabWrapper>
                    <Tabs.Tab id="1">Top Things To Do</Tabs.Tab>
                    <Tabs.Tab id="2">See Top Travel Deals</Tabs.Tab>
                  </TabWrapper>
                </>
              )
            }} />
          <Tabs.Panels>
            <Tabs.Panel panelId="1">
              <ThingsToDo />
            </Tabs.Panel>
            <Tabs.Panel panelId="2">
              <TravelDeals />
            </Tabs.Panel>
          </Tabs.Panels>
        </Tabs>
      </Wrapper>
    </>
  )
}

export default DealsTab

const Wrapper = styled.div`
  padding: 20px 0;
`,
TabWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
  margin-bottom: 20px;
`