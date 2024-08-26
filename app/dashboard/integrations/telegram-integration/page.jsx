'use client';

import AddProjectModal from '@/app/components/modals/AddProjectModal';
import AddTelegramBotModal from '@/app/components/modals/AddTelegramBotModal';
import useCurrentUser from '@/app/hooks/useCurrentUser';
import Image from 'next/image';

const TelegramIntegration = () => {
  const { currentProjects, telegramBot, deleteTelegramBot } = useCurrentUser();

  return (
    <>
      {currentProjects.length === 0 ? (
        <AddProjectModal />
      ) : !telegramBot ? (
        <AddTelegramBotModal />
      ) : (
        <main className="px-8 py-10 max-sm:py-5 max-sm:px-4">
          <div className="flex flex-col gap-6 p-10 max-sm:p-5 bg-white rounded-3xl">
            <h1 className="font-bold text-2xl max-sm:text-xl text-left">
              Telegram Integration
            </h1>

            {/* BOT DETAILS */}
            <div className="bg-gray-200 flex flex-col gap-5 ml-6 max-sm:ml-4 px-4 max-sm:px-2 py-4">
              {/* bot name */}
              <div className="flex gap-2 items-center">
                <p className="font-bold text-lg text-amber-900 max-sm:text-sm">
                  Bot Name:{' '}
                </p>
                <p className="font-bold text-lg max-sm:text-sm">
                  {telegramBot?.botName}
                </p>
              </div>

              {/* bot token */}
              <div className="flex gap-2 items-center">
                <p className="font-bold text-lg text-amber-900 max-sm:text-sm">
                  Bot Token:{' '}
                </p>
                <p className="font-bold text-lg max-sm:text-sm">
                  {telegramBot?.botToken}
                </p>
              </div>

              {/* bot image */}
              <div className="flex gap-2 items-center">
                <p className="font-bold text-lg text-amber-900 max-sm:text-sm">
                  Image:{' '}
                </p>
                <div className="overflow-hidden rounded-full">
                  <Image
                    src={telegramBot?.botImage}
                    alt="telegram bot image"
                    width={40}
                    height={40}
                    className="object-cover rounded-full"
                  />
                </div>
              </div>

              {/* description */}
              <div className="flex gap-2 items-center">
                <p className="font-bold text-lg text-amber-900 max-sm:text-sm">
                  Description:{' '}
                </p>
                <p className="font-bold text-lg max-sm:text-sm">
                  {telegramBot?.description}
                </p>
              </div>

              {/* welcome message */}
              <div className="flex gap-2 items-center">
                <p className="font-bold text-lg text-amber-900 max-sm:text-sm">
                  Welcome message:{' '}
                </p>
                <p className="font-bold text-lg max-sm:text-sm">
                  {telegramBot?.welcomeMessage}
                </p>
              </div>

              {/* membership duration timeline */}
              <div className="flex gap-2 items-center">
                <p className="font-bold text-lg text-amber-900 max-sm:text-sm">
                  Membership Duration Timeline:{' '}
                </p>
                <p className="font-bold text-lg max-sm:text-sm">
                  {telegramBot?.membershipDurationTimeline}
                </p>
              </div>

              {/* grace timeline */}
              <div className="flex gap-2 items-center">
                <p className="font-bold text-lg text-amber-900 max-sm:text-sm">
                  Grace Timeline:{' '}
                </p>
                <p className="font-bold text-lg max-sm:text-sm">
                  {telegramBot?.graceTimeline}
                </p>
              </div>
            </div>
          </div>
        </main>
      )}
    </>
  );
};

export default TelegramIntegration;
