import { SvgColor } from 'src/components/svg-color';

const icon = (name: string) => (
  <SvgColor width="100%" height="100%" src={`/assets/icons/navbar/${name}.svg`} />
);

export const navData = [
  {
    title: 'Pengguna',
    path: '/',
    icon: icon('ic-user'),
  },
  {
    title: 'Info Mutasi',
    path: '/user',
    icon: icon('ic-analytics'),
  },
];
