import { HiOutlineHashtag, HiOutlineHome, HiOutlineUserGroup, HiOutlineLogin } from 'react-icons/hi';

export const genres = [
  { title: 'Pop', value: 'pl.2efc8b15871c43729c3d0fd28730b079' },
  { title: 'Hip-Hop/Rap', value: 'pl.f518afc7eeda43eca22989da0b5c8a95' },
  { title: 'Dance', value: 'pl.b7ab3790dc6541e994be00dbbb3e6d7e' },
  { title: 'Electronic', value: 'pl.2f560eced38a4f7aa52a79d9b874ba85' },
  { title: 'Soul', value: 'pl.076e272b08d54541b46f49f8c648c0e5' },
  { title: 'Alternative', value: 'pl.d5ae45cdf21a42a99acf8491a6a2804a' },
  { title: 'Rock', value: 'pl.a1e984508d24444ebae6cc3fc70649e5' },
  { title: 'Latin', value: 'pl.a86f24ec372b4e3faa26f389f864c0ae' },
  { title: 'Film', value: 'pl.d08b5701b2404efcbeda95dfc2256aad' },
  { title: 'Country', value: 'pl.d06ea700bea646df96dd1a34e06d192e' },
  { title: 'Worldwide', value: 'pl.06e95f92dd1f4c4cb6b3b12023930e9d' },
  { title: 'Reggae', value: 'pl.f12d127a9de64a55a7386db43c3ad71c' },
  { title: 'House', value: 'pl.36a2a68602e14c958a3d77da6f39ec2c' },
  { title: 'K-Pop', value: 'pl.833535f2f6ec474bbe08abcb4c2fe967' },
];

export const links = [
  { name: 'Discover', to: '/', icon: HiOutlineHome },
  { name: 'Top Artists', to: '/top-artists', icon: HiOutlineUserGroup },
  { name: 'Top Charts', to: '/top-charts', icon: HiOutlineHashtag },
  { name: 'Login / Register', to: '/register', icon: HiOutlineLogin },
];
