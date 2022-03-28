import {
  reactive,
  toRefs
} from 'vue';

const createReactive = ({compProps = {}, compMock = {}, compStyles = {}} = {}): any => {

  const propsReactive = reactive({
    ...compProps,
  });
  const mockReactive = reactive({
    ...compMock,
  });
  const stylesReactive = reactive({
    ...compStyles,
  });
  return {
    ...toRefs(propsReactive),
    ...toRefs(mockReactive),
    styles: stylesReactive,
  };
}

export default createReactive;