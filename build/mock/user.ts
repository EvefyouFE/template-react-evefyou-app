import { MockMethod } from 'vite-plugin-mock';


const mockPermissonList = [
  'dashboard:*',
  'project:list:*',
  'permission:list:*',
  '404:*',
];

const mockMenuList = [
  {
    path: '/dashboard',
    name: '面板3',
    locale: 'menu.dashboard',
    icon: 'ant-icon:DashboardOutlined',
    id: 1,
    pId: 0,
  }
];

const mockPermissionList = [
  'dashboard',
  'project',
  'permission',
  '404'
];


export default [
  {
    url: '/basic-api/login',
    method: 'post',
    timeout: 1000,
    response: () => {
      return {
        code: 200,
        data: {
          token: '123abcdefg',
          username: 'evef',
          roles: ['admin'],
        },
        msg: 'success',
      };
    },
  },
  {
    url: '/basic-api/logout',
    method: 'get',
    timeout: 1000,
    response: () => {
      return {
        code: 200,
        data: null,
        msg: 'success',
      };
    },
  },
  {
    url: '/basic-api/current/user',
    method: 'get',
    // statusCode: 401,
    response: () => {
      return {
        code: 200,
        data: {
          username: 'evef',
          roles: ['admin'],
          permissions: mockPermissonList,
          avatar: '',
          menuList: [],
          device: 'DESKTOP',
          locale: 'zh-cn',
          token: '123abcdefg',
          newUser: true
        },
        msg: 'success',
      };
    },
  },
  {
    url: '/basic-api/current/menuList',
    method: 'get',
    response: () => {
      return {
        code: 200,
        data: mockMenuList,
        msg: 'success',
      };
    },
  },
  {
    url: '/basic-api/getPermissionList',
    method: 'get',
    response: () => {
      return {
        code: 200,
        data: mockPermissionList,
        msg: 'success',
      };
    },
  }
] as MockMethod[];

