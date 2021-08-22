export default element => {
  const { dataset, ownerDocument } = element
  const { after, before } = dataset
  const method = after ? 'after' : 'before'
  const target = ownerDocument.querySelector(after || before)

  target[method](element)
}
