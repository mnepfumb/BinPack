export const admin_navigations = [
  { label: 'DASHBOARDS', type: 'label' },
  { name: 'Dashboard', path: '/netcare/admin/dashboard', icon: 'dashboard' },
  
  { label: 'REQUISITIONS', type: 'label' },
  { name: 'Requisitions', path: '/netcare/admin/requisitions', icon: 'dashboard' },

  { label: 'USERS', type: 'label' },
  { name: 'Users', path: '/netcare/admin/user', icon: 'group' },

  { label: 'HOSPITALS', type: 'label' },
  { name: 'Hospitals', path: '/netcare/admin/hospital', icon: 'local_hospital' },

  { label: 'SERVICE PROVIDERS', type: 'label' },
  { name: 'Service Providers', path: '/netcare/admin/service-provider', icon: 'dashboard' },


  // {
  //   name: 'Session/Auth',
  //   icon: 'security',
  //   children: [
  //     { name: 'Sign in', iconText: 'SI', path: '/session/signin' },
  //     { name: 'Sign up', iconText: 'SU', path: '/session/signup' },
  //     { name: 'Forgot Password', iconText: 'FP', path: '/session/forgot-password' },
  //     { name: 'Error', iconText: '404', path: '/session/404' },
  //   ],
  // },
  { label: 'Components', type: 'label' },
  {
    name: 'Components',
    icon: 'favorite',
    badge: { value: '30+', color: 'secondary' },
    children: [
      { name: 'Auto Complete', path: '/material/autocomplete', iconText: 'A' },
      { name: 'Buttons', path: '/material/buttons', iconText: 'B' },
      { name: 'Checkbox', path: '/material/checkbox', iconText: 'C' },
      { name: 'Dialog', path: '/material/dialog', iconText: 'D' },
      { name: 'Expansion Panel', path: '/material/expansion-panel', iconText: 'E' },
      { name: 'Form', path: '/material/form', iconText: 'F' },
      { name: 'Icons', path: '/material/icons', iconText: 'I' },
      { name: 'Menu', path: '/material/menu', iconText: 'M' },
      { name: 'Progress', path: '/material/progress', iconText: 'P' },
      { name: 'Radio', path: '/material/radio', iconText: 'R' },
      { name: 'Switch', path: '/material/switch', iconText: 'S' },
      { name: 'Slider', path: '/material/slider', iconText: 'S' },
      { name: 'Snackbar', path: '/material/snackbar', iconText: 'S' },
      { name: 'Table', path: '/material/table', iconText: 'T' },
    ],
  },
  {
    name: 'Charts',
    icon: 'trending_up',
    children: [{ name: 'Echarts', path: '/charts/echarts', iconText: 'E' }],
  },
  {
    name: 'Documentation',
    icon: 'launch',
    type: 'extLink',
    path: 'http://demos.ui-lib.com/matx-react-doc/',
  },
];
