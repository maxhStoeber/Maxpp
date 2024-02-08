import {INavbarData} from "./helper";

export const navbarData: INavbarData[] = [
  {
    routelink: 'home',
    icon: 'fa-solid fa-house',
    label: 'Home'
  },
  {
    routelink: 'projects',
    icon: 'fa-solid fa-house',
    label: 'Projects',
    items: [
      {
        routelink: 'projects/A',
        label: 'A',
        icon: 'fa-solid fa-toolbox',
        items: [
          {
            routelink: 'projects/C',
            label: 'C'
          },
          {
            routelink: 'projects/D',
            label: 'D'
          }
        ]
      },
      {
        routelink: 'projects/B',
        label: 'B'
      }
      ]
  },
  {
    routelink: 'tools',
    icon: 'fa-solid fa-toolbox',
    label: 'Tools'
  },
  {
    routelink: 'statistics',
    icon: 'fa-solid fa-chart-line',
    label: 'Statistics'
  },
  {
    routelink: 'about',
    icon: 'fa-solid fa-users',
    label: 'About Us'
  },
  {
    routelink: 'settings',
    icon: 'fa-solid fa-gears',
    label: 'Settings'
  },
  {
    routelink: 'profile',
    icon: 'fa-solid fa-user',
    label: 'Profile'
  },
];
