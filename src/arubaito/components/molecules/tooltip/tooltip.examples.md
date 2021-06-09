Tooltip:
```jsx
  <React.Fragment>
    <div id='portal-01'/>
    <ToolTip
      targetId='portal-01'
      trigger={
        <div className='gdm-text-center gdm-w-2 gdm-m-0-auto'>
          <span className='gdm-icon gdm-icon-sm gdm-icon-info gdm-block gdm-m-0-auto'/>
          <span className='gdm-label'>
            Est.
            <br/>
            Position
          </span>

        </div>
      }>
      Estimated placement for your listing on the directory page.
    </ToolTip>
  </React.Fragment>
```

Tooltip left:
```jsx
  <React.Fragment>
    <div id='portal-02'/>
    <ToolTip
      targetId='portal-02'
      placement='left'
      trigger={
        <div className='gdm-text-center gdm-w-2 gdm-m-0-auto'>
          <span className='gdm-icon gdm-icon-sm gdm-icon-info gdm-block gdm-m-0-auto'/>
          <span className='gdm-label'>
            Est.
            <br/>
            Position
          </span>
        </div>
      }>
      Estimated placement for your listing on the directory page.
    </ToolTip>
  </React.Fragment>
```