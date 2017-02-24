export default (dispatch, components, params) => {
  const needs = components.reduce((acc, component) => {
    return (component.need || [])
      .concat((component.WrappedComponent ? component.WrappedComponent.need : []) || [])
      .concat(acc)
  }, [])

  const promises = needs.map(need => dispatch(need(params)))
  return Promise.all(promises)
}
