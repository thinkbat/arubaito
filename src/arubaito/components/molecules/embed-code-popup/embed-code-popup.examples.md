Embed code snippet (center aligned):
```jsx
  const toggleEmbedCodeSnippet = () => setState(({ isOpen: !state.isOpen }));

  <div className='gdm-relative gdm-inline-block'>
    <button className='gdm-link-default gdm-btn-override gdm-block' onClick={toggleEmbedCodeSnippet}>Click Me</button>
    {
      state.isOpen &&
        <EmbedCodePopup onClose={toggleEmbedCodeSnippet}>
          <h3 className='gdm-heading-lg'>Copied to clipboard.</h3>
          <p className='gdm-paragraph-sm'>Paste this snippet into your website's source code.</p>
          <EmbedCodePopup.CodeSnippet>
            {"<a href='https://main-orange.capstage.net/reviews/120550/Asana?utm_source=vendor&utm_medium=badge&utm_campaign=capterra_reviews_badge'>  <img border='0' src='https://assets.capterra.com/badge/670dcece851dff41c822bd540e4bde16.png?v=2083443&p=120550' /></a>"}
          </EmbedCodePopup.CodeSnippet>
        </EmbedCodePopup>
    }
  </div>
```

Embed code snippet (left aligned):
```jsx
  const toggleEmbedCodeSnippet = () => setState(({ isOpen: !state.isOpen }));

  <div className='gdm-relative gdm-inline-block'>
    <button className='gdm-link-default gdm-btn-override gdm-block' onClick={toggleEmbedCodeSnippet}>Click Me</button>
    {
      state.isOpen &&
        <EmbedCodePopup onClose={toggleEmbedCodeSnippet} position='left'>
          <h3 className='gdm-heading-lg'>Copied to clipboard.</h3>
          <p className='gdm-paragraph-sm'>Paste this snippet into your website's source code.</p>
          <EmbedCodePopup.CodeSnippet>
            {"<a href='https://main-orange.capstage.net/reviews/120550/Asana?utm_source=vendor&utm_medium=badge&utm_campaign=capterra_reviews_badge'>  <img border='0' src='https://assets.capterra.com/badge/670dcece851dff41c822bd540e4bde16.png?v=2083443&p=120550' /></a>"}
          </EmbedCodePopup.CodeSnippet>
        </EmbedCodePopup>
    }
  </div>
```

Embed code snippet (right aligned):
```jsx
  const toggleEmbedCodeSnippet = () => setState(({ isOpen: !state.isOpen }));

  <div className='gdm-relative gdm-inline-block'>
    <button className='gdm-link-default gdm-btn-override gdm-block' onClick={toggleEmbedCodeSnippet}>Click Me</button>
    {
      state.isOpen &&
        <EmbedCodePopup onClose={toggleEmbedCodeSnippet} position='right'>
          <h3 className='gdm-heading-lg'>Copied to clipboard.</h3>
          <p className='gdm-paragraph-sm'>Paste this snippet into your website's source code.</p>
          <EmbedCodePopup.CodeSnippet>
            {"<a href='https://main-orange.capstage.net/reviews/120550/Asana?utm_source=vendor&utm_medium=badge&utm_campaign=capterra_reviews_badge'>  <img border='0' src='https://assets.capterra.com/badge/670dcece851dff41c822bd540e4bde16.png?v=2083443&p=120550' /></a>"}
          </EmbedCodePopup.CodeSnippet>
        </EmbedCodePopup>
    }
  </div>
```