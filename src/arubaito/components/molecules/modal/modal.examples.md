```jsx
import Button from '../../atoms/button';
const [openModal, setOpenModal] = React.useState(false);

<div>
  <Button
    className='gdm-m-left-sm gdm-m-top-sm'
    variant="primary"
    onClick={() => setOpenModal(true)}
  >
    Toggle Modal
  </Button>

  <Modal
    open={openModal}
    onClosed={() => setOpenModal(false)}
  >
    {close =>
      <div>
        <Modal.Header>
          <h2 className='gdm-subtitle'>Header</h2>
          <Modal.Close onClick={close}/>
        </Modal.Header>
        <Modal.Body>
          <p className='gdm-paragraph-lg'>Body</p>
        </Modal.Body>
        <Modal.Footer>
          <p className='gdm-paragraph-lg gdm-text-left'>Footer</p>
          <Button
            className='gdm-m-left-sm gdm-m-top-sm'
            variant="primary"
            onClick={close}
          >
            Close
          </Button>
        </Modal.Footer>
      </div>
    }
  </Modal>
</div>
```