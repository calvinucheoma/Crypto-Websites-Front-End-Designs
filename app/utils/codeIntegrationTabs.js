import { FaPhp } from 'react-icons/fa';
import { FaNode, FaPython } from 'react-icons/fa6';
import { SiDotnet } from 'react-icons/si';

const tabs = [
  {
    id: 'php',
    label: 'PHP',
    icon: FaPhp,
    color: 'blue',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    id: 'nodejs',
    label: 'Node.js',
    icon: FaNode,
    color: 'green',
    content:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
  {
    id: 'python',
    label: 'Python',
    icon: FaPython,
    color: 'blue',
    content:
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    id: 'net',
    label: '.Net',
    icon: SiDotnet,
    color: 'black',
    content:
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
];

export default tabs;
