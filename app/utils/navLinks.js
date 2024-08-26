import { IoHomeOutline } from 'react-icons/io5';
import { CiCoinInsert, CiWallet } from 'react-icons/ci';
import { MdOutlineIntegrationInstructions } from 'react-icons/md';
import { FaCodeBranch } from 'react-icons/fa6';
import { AiOutlineFundProjectionScreen } from 'react-icons/ai';

export const navLinks = [
  {
    id: 1,
    title: 'Home',
    route: '/dashboard',
    icon: IoHomeOutline,
  },
  {
    id: 2,
    title: 'Wallet',
    route: '/dashboard/wallet',
    icon: CiWallet,
  },
  {
    id: 3,
    title: 'Deposit-Withdraw',
    route: '/dashboard/deposit-withdraw',
    icon: CiCoinInsert,
  },
  {
    id: 4,
    title: 'Integrations',
    subLinks: [
      {
        title: 'Code Integration',
        route: '/dashboard/integrations/code-integration',
      },
      {
        title: 'Wordpress Integration',
        route: '/dashboard/integrations/wordpress-integration',
      },
      {
        title: 'Telegram Integration',
        route: '/dashboard/integrations/telegram-integration',
      },
    ],
    route: '/dashboard/integrations',
    icon: MdOutlineIntegrationInstructions,
  },
  {
    id: 5,
    title: 'API',
    route: '/dashboard/api-info',
    icon: FaCodeBranch,
  },
  {
    id: 6,
    title: 'Projects',
    route: '/dashboard/projects',
    icon: AiOutlineFundProjectionScreen,
  },
];
