Card API should allow external developers to create custom integrations with task trackers similar to Jira or Asana. To meet the requirement card should support several features such as:

1. Showing an App icon in the lower right corner. A user can identify that the card is different from our regular cards and was created by the App.
2. Showing a status of the card.
3. Showing a tooltip text on a card logo hover.
4. Opening of a modal with the custom iFrame URL. When a user presses the expand button he will see a web page that was provided by the developer, for example a content of the task, or some web form that can be submitted.

## Expected result

At the end of the task we will get a PoC application with those features. Which will show us what changes we need in the [client](https://code.devrtb.com/projects/RTB/repos/client/browse) and [Web SDK](https://developers.miro.com/docs/introduction-to-rest-api) to meet those goals.

## Proposed solution

### Showing the App icon and statuses

The first two features can be implemented using `customFields` and `logo.iconUrl` fields which already present in the card data and [available in our client SDK](https://developers.miro.com/docs/interface-icardwidget#card).

### Showing a tooltip over card logo

We can add another field to card's data `logo` object to store the tooltip text.

### Opening of a modal with the custom iFrame URL

A developer of the App can use [open modal functionality](https://developers.miro.com/docs/web-plugins-features#render-custom-views).

The only thing that is needed is a notification of the App when a user expands the card.

When the App receives the notification it calls

```jsx
miro.board.ui.openModal(iFrameURL, width, height)
```

to open the web page.

To store a task id the developer can use [meta data](https://developers.miro.com/reference/application-metadata#read) of the widget or save it in the one of the custom fields.
