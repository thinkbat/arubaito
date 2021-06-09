Drawer Default:
```jsx
import Button from '../../atoms/button';
const [openDrawer, setOpenDrawer] = React.useState(false);

<div style={{"position":"relative", "height": "350px", "overflow": "hidden"}}>
  <Button
    className='gdm-m-left-sm gdm-m-top-sm'
    variant="primary"
    onClick={() => setOpenDrawer((openDrawer) => !openDrawer)}
  >
    Toggle Drawer
  </Button>


  <Drawer
    className='gdm-absolute'
    show={openDrawer}
    renderHeader={(toggle) => (
      <Drawer.Header onClick={toggle}>
        <Drawer.Toggle>
          <span className='gdm-label gdm-color-light gdm-m-left-xs'>
            Lorem Ipsum Toggle
          </span>
        </Drawer.Toggle>
        <p className='gdm-paragraph-lg gdm-m-none gdm-color-light'>
          Lorem Ipsum Header
        </p>
      </Drawer.Header>
    )}
    renderContent={(toggle) => (
      <Drawer.Content>
        <p className='gdm-paragraph-sm gdm-color-light'>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
        <Button
          variant="tertiary"
          small
          onClick={toggle}
          className='gdm-m-top-md gdm-block'
        >
          Toggle Drawer
          <span className='gdm-icon gdm-icon-edit gdm-color-light'/>
        </Button>
      </Drawer.Content>
    )}
  />
</div>
```


Drawer with Small Preview:
```jsx
import Button from '../../atoms/button';
const [openDrawer, setOpenDrawer] = React.useState(false);

<div style={{"position":"relative", "height": "200px", "overflow": "hidden"}}>
  <Button
    className='gdm-m-left-sm gdm-m-top-sm'
    variant="primary"
    onClick={() => setOpenDrawer((openDrawer) => !openDrawer)}
  >
    Toggle Drawer
  </Button>



  <Drawer
    className='gdm-absolute'
    show={openDrawer}
    renderHeader={() => (
      <Drawer.Header>
        <p className='gdm-paragraph-lg gdm-m-none gdm-color-light'>
          Lorem Ipsum Header
        </p>
      </Drawer.Header>
    )}
    renderContent={(toggle) => (
      <Drawer.Content>  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    </Drawer.Content>
    )}
  />
</div>
```
