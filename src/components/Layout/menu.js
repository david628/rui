//import { isUrl } from '../utils/utils';

const menuData = [
  {
    name: 'system',
    text: '系统设置',
    icon: 'home',
    path: 'center',
    children: [
      {
        name: 'user',
        text: '用户',
        path: 'user'
      },
      {
        name: 'home',
        text: '测试home',
        path: 'home'
      },
      {
        name: 'b',
        text: '测试b',
        path: 'b'
        // hideInBreadcrumb: true,
        // hideInMenu: true,
      }
    ]
  },
  {
    name: 'form',
    text: '测试form',
    icon: 'form',
    path: 'form',
    children: [
      {
        name: 'f',
        text: '测试f',
        path: 'f'
      },
      {
        name: 'd',
        text: '测试d',
        path: 'd'
      },
      {
        name: 'e',
        text: '测试e',
        authority: 'admin',
        path: 'e'
      }
    ]
  },
  {
    name: '列表页',
    text: '列表页',
    icon: 'table',
    path: 'list',
    children: [
      {
        name: 'f',
        text: '测试f',
        path: 'f'
      }
    ]
  },
  {
    name: '组件页',
    text: '组件页',
    icon: 'home',
    path: 'component',
    children: [
      {
        name: 'menu',
        text: 'Menu',
        path: 'menu'
      },
      {
        name: 'button',
        text: 'Button',
        path: 'button'
      },
      {
        name: 'input',
        text: 'Input',
        path: 'input'
      },
      {
        name: 'checkbox',
        text: 'Checkbox',
        path: 'checkbox'
      },
      {
        name: 'form',
        text: 'Form',
        path: 'form'
      },
      {
        name: 'select',
        text: 'Select',
        path: 'select'
      },
      {
        name: 'dropdown',
        text: 'Dropdown',
        path: 'dropdown'
      }
    ]
  }
];

function formatter(data, parentPath = '/', parentAuthority) {
  return data.map(item => {
    let { path } = item;
    if (!/(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/g.test(path)) {
      path = parentPath + item.path;
    }
    const result = {
      ...item,
      path,
      authority: item.authority || parentAuthority,
    };
    if (item.children) {
      result.children = formatter(item.children, `${parentPath}${item.path}/`, item.authority);
    }
    return result;
  });
}

export const getMenuData = () => formatter(menuData);
