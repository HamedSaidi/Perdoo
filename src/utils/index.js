const tabs = ['blogs', 'entries', 'authors', 'comments']

const tabsToFields = {
  blogs: [
    { label: 'id', path: 'id' },
    { label: 'name', path: 'attributes.name' },
    { label: 'copyright', path: 'meta.copyright' },
  ],
  entries: [
    { label: 'id', path: 'id' },
    { label: 'bodyText', path: 'attributes.bodyText' },
    { label: 'headline', path: 'attributes.headline' }
  ],
  authors: [
    { label: 'id', path: 'id' },
    { label: 'name', path: 'attributes.name' },
    { label: 'email', path: 'attributes.email' },
  ],
  comments: [
    { label: 'id', path: 'id' },
    { label: 'body', path: 'attributes.body' }
  ],
 }

 export { tabsToFields, tabs }
