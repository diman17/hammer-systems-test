import { 
  DashboardOutlined,
  FileTextOutlined
} from '@ant-design/icons';
import { APP_PREFIX_PATH } from 'configs/AppConfig'

const dashBoardNavTree = [{
  key: 'home',
  path: `${APP_PREFIX_PATH}/home`,
  title: 'home',
  icon: DashboardOutlined,
  breadcrumb: false,
  submenu: [
    {
      key: 'clients',
      path: `${APP_PREFIX_PATH}/clients`,
      title: 'sidenav.clients',
      icon: FileTextOutlined,
      breadcrumb: true,
      submenu: [
        {
          key: 'extra-pages-list',
          path: `${APP_PREFIX_PATH}/clients/client-list`,
          title: 'sidenav.clients.clientlist',
          icon: '',
          breadcrumb: true,
          submenu: []
        },
      ]
    },
    {
      key: 'planner',
      path: `${APP_PREFIX_PATH}/planner`,
      title: 'sidenav.planner',
      icon: FileTextOutlined,
      breadcrumb: true,
      submenu: []
    }
  ]
}]

const navigationConfig = [
  ...dashBoardNavTree
]

export default navigationConfig;
