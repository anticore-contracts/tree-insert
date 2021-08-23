export default element => {
  const { dataset, ownerDocument } = element
  const { after, before, instead } = dataset
  const [selector] = [after, before, instead].filter(Boolean)

  const method = new Map([
    [after, 'after'],
    [before, 'before'],
    [instead, 'replaceWith']
  ]).get(selector)

  const target = ownerDocument.querySelector(selector)

  target?.[method](element)
}
