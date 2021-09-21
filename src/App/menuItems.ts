export interface ImenuItem {
  className?: string,
  type: string,
  iconClass: string,
  link: string,
  name: string,
  auth?: boolean,
}

const menus = [{
  classname: '',
  type: 'link',
  iconClass: '',
  link: '/auto-maintenance',
  name: 'Auto Maintenance',
},
{
  classname: '',
  type: 'link',
  iconClass: '',
  link: '/general-auto-repair',
  name: 'General Auto Repair',
},
{
  classname: '',
  type: 'link',
  iconClass: '',
  link: '/major-auto-repair',
  name: 'Major Auto Repair',
},
{
  classname: '',
  type: 'link',
  iconClass: '',
  link: '/contact',
  name: 'Contact',
},
{
  classname: 'home',
  type: 'link',
  iconClass: '',
  link: '/',
  name: 'Home',
}];

export default { menus };
