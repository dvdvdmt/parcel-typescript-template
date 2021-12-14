import '../../application/static/sdk/sdk.1.1.js'

if (module.hot) {
  module.hot.dispose(() => {
    window.location.reload()
  })
}

const appIcon =
  '<circle cx="12" cy="12" r="9" fill="none" fill-rule="evenodd" stroke="currentColor" stroke-width="2"/>'

miro.onReady(() => {
  miro.initialize({
    extensionPoints: {
      toolbar: {
        title: 'App card',
        toolbarSvgIcon: appIcon,
        librarySvgIcon: appIcon,
        onClick: createAppCard,
      },
    },
  })
  miro.addListener('WIDGETS_CREATED', widgetsCreated)
})

const appCardData = {url: 'https://example.com'}

function createAppCard() {
  miro.board.widgets.create({
    type: 'card',
    title: 'App card',
    metadata: {[miro.getClientId()]: {...appCardData}},
  })
}

function widgetsCreated(widget: SDK.Event) {
  console.log(`[widgetsCreated widget]`, widget)
}
