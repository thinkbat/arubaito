```jsx
import Button from '../../atoms/button';
const [activeTab, setActiveTab] = React.useState(0);

  <div>
    <Tabs onChange={setActiveTab} value={activeTab}>
      <Tabs.Tab value={0}>
        CHANNEL
      </Tabs.Tab>
      <Tabs.Tab value={1}>
        LOCATION
      </Tabs.Tab>
      <Tabs.Tab value={2}>
        CATEGORIES
      </Tabs.Tab>
      <Tabs.Tab value={3}>
        BIDS
      </Tabs.Tab>
    </Tabs>

    <Tabs.Panel active={activeTab === 0}>
      CHANNEL CONTENT
    </Tabs.Panel>
    <Tabs.Panel active={activeTab === 1}>
      LOCATION CONTENT
    </Tabs.Panel>
    <Tabs.Panel active={activeTab === 2}>
      CATEGORIES CONTENT
    </Tabs.Panel>
    <Tabs.Panel active={activeTab === 3}>
      BIDS CONTENT
    </Tabs.Panel>
  </div>
```

Tab with single panel and disabled tab
```jsx
import Button from '../../atoms/button';
import ToolTip from '../tooltip';
import { Fragment } from 'react';

const [activeTab, setActiveTab] = React.useState(0);
const panelContent = {
  0: 'CHANNEL CONTENT',
  1: 'LOCATIONS CONTENT',
  2: 'CATEGORIES CONTENT',
  3: 'BIDS CONTENT',
};

  <div>
    <div id='portal-tab-info'/>
    <Fragment>
      <Tabs onChange={setActiveTab} value={activeTab}>
        <Tabs.Tab value={0}>
          CHANNEL
        </Tabs.Tab>
        <Tabs.Tab value={1}>
          LOCATIONS
        </Tabs.Tab>
        <Tabs.Tab value={2}>
          CATEGORIES
        </Tabs.Tab>
        <Tabs.Tab
          value={3}
          disabled
          icon={
            <Tabs.Icon>
              <ToolTip
                targetId='portal-tab-info'
                trigger={<span className='gdm-icon gdm-icon-sm gdm-icon-info'/>}>
                This option is disabled.
              </ToolTip>
            </Tabs.Icon>
          }
        >
          BIDS DISABLED
        </Tabs.Tab>
      </Tabs>

      <Tabs.Panel active>
        {panelContent[activeTab]}
      </Tabs.Panel>
    </Fragment>
  </div>
```