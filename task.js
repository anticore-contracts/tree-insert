export default element => {
  const { dataset, ownerDocument } = element
  const { after, append, before, prepend, replace } = dataset
  const [selector] = [after, append, before, prepend, replace].filter(Boolean)

  const method = new Map([
    [after, 'after'],
    [append, 'append'],
    [before, 'before'],
    [prepend, 'prepend'],
    [replace, 'replaceWith']
  ]).get(selector)

  const target = ownerDocument.querySelector(selector)

  target?.[method](element)
}
