import { ICONS } from '../../components';

const {
  InventoryIcon,
  TroubleshootIcon,
  TrendingUpIcon,
  ScreenSearchDesktopIcon,
  ReviewsIcon,
  ManageAccountsIcon,
  LogoutIcon,
  AnalyticsIcon,
  StorefrontIcon
} = ICONS;

type ISideMenu = {
  subHeading: string,
  children: {
    name: string,
    icon: any
  }[]
}[]

export const sideMenuDetails: ISideMenu = [
  {
    subHeading: 'Orders',
    children: [
      {
        name: 'Track Latest Order',
        icon: <TroubleshootIcon />,
      },
      {
        name: 'Order',
        icon: <InventoryIcon />,
      },
    ],
  },
  {
    subHeading: 'Products',
    children: [
      {
        name: 'Trending Product',
        icon: <TrendingUpIcon />,
      },
      {
        name: 'Most Search',
        icon: <ScreenSearchDesktopIcon />,
      },
      {
        name: 'Reviews',
        icon:  <ReviewsIcon />,
      },
    ],
  },
  {
    subHeading: 'Setting',
    children: [
      {
        name: 'Account Setting',
        icon: <ManageAccountsIcon />,
      },
      {
        name: 'Logout',
        icon: <LogoutIcon />,
      },
    ],
  },
  {
    subHeading: 'Others',
    children: [
      {
        name: 'Marketing',
        icon: <StorefrontIcon />,
      },
      {
        name: 'Analytics',
        icon: <AnalyticsIcon />,
      },
    ],
  },
];
