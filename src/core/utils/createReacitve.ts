import {
  reactive,
  toRefs
} from 'vue';

const createReactive = ({compProps = {}, compMock = {}, compStyles = {}, compLayouts = {}} = {}): any => {

  const propsReactive = reactive({
    ...compProps,
  });
  const mockReactive = reactive({
    ...compMock,
  });
  const stylesReactive = reactive({
    ...compStyles,
  });
  const layoutsReactive = reactive({
    ...compLayouts,
  });
  return {
    ...toRefs(propsReactive),
    ...toRefs(mockReactive),
    styles: stylesReactive,
    layouts: layoutsReactive,
  };
}

export default createReactive;