import { Layout, Image } from '@/views/images';

export default {
  path: '/images',
  component: Layout,
  children: [
    { path: '', component: Image },
  ]
};