
const createReactive = ({compProps = {}, compMock = {}, compStyles = {}} = {}) => {

  const propsReactive = reactive({
    ...compProps,
  })
  const mockReactive = reactive({
    ...compMock,
  })
  const stylesReactive = reactive({
    ...compStyles,
  })
  return {
    ...toRefs(propsReactive),
    ...toRefs(mockReactive),
    styles: stylesReactive,
  };
}

export default createReactive;