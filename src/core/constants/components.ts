import{
  Input,
  Radio,
  Checkbox,
  Select,
  Switch,
  Grid,
  Form,
} from '/@/core/components/index';

let cache = new Map();
const comps = [
  {
    name: 'input',
    component: Input, 
  },
  {
    name: 'radio',
    component: Radio, 
  },
  {
    name: 'checkbox',
    component: Checkbox, 
  },
  {
    name: 'select',
    component: Select, 
  },
  {
    name: 'switch',
    component: Switch, 
  },
  {
    name: 'grid',
    component: Grid, 
  },
  {
    name: 'form',
    component: Form,
  }
]

const addComp = (name, component) => {
  if(!cache.has(name)){
    cache.set(name, component)
  }
}

comps.forEach((comp) => {
  addComp(comp.name, comp.component)
})

export default cache;