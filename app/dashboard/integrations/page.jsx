'use client';

import { Select, SelectItem } from '@nextui-org/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { FaCode, FaTelegram, FaWordpress } from 'react-icons/fa6';

const IntegrationsPage = () => {
  const [value, setValue] = useState('');

  const router = useRouter();

  const handleSelectChange = (e) => {
    switch (e.target.value) {
      case 'code':
        router.push('/dashboard/integrations/code-integration');
        break;
      case 'wordpress':
        router.push('/dashboard/integrations/wordpress-integration');
        break;
      case 'telegram':
        router.push('/dashboard/integrations/telegram-integration');
        break;
      default:
        break;
    }
  };

  return (
    <main className="w-full h-full flex items-center justify-center">
      <Select
        radius="md"
        className="max-w-md"
        placeholder="Select an integration method"
        size="lg"
        selectedKeys={[value]}
        onChange={handleSelectChange}
      >
        <SelectItem key="code" startContent={<FaCode size={20} />}>
          Code Integration
        </SelectItem>
        <SelectItem
          key="wordpress"
          startContent={<FaWordpress size={20} color="blue" />}
        >
          Wordpress Integration
        </SelectItem>
        <SelectItem
          key="telegram"
          startContent={<FaTelegram size={20} color="blue" />}
        >
          Telegram Integration
        </SelectItem>
      </Select>
    </main>
  );
};

export default IntegrationsPage;
