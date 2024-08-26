'use client';

import tabs from '@/app/utils/codeIntegrationTabs';
import {
  jsonDataForRequests,
  jsonDataForResponses,
  requestType,
} from '@/app/utils/requestType';
import {
  Button,
  Card,
  CardBody,
  Select,
  SelectItem,
  Tab,
  Tabs,
} from '@nextui-org/react';
import { useMediaQuery } from '@react-hook/media-query';
import { useEffect, useState } from 'react';

const CodeIntegrationPage = () => {
  const [requestValue, setRequestValue] = useState('');

  const isSmallScreen = useMediaQuery('(max-width: 640px)');

  const isMediumScreen = useMediaQuery('(max-width: 1200px)');

  const [inputSize, setInputSize] = useState('lg');

  useEffect(() => {
    setInputSize(isSmallScreen ? 'sm' : 'lg');
  }, [isSmallScreen]);

  const handleSelectionChange = (e) => {
    setRequestValue(e.target.value);
  };

  return (
    <main className="px-8 py-10 max-sm:py-5 max-sm:px-5">
      <div className="flex flex-col gap-6 p-10 max-sm:p-5 bg-white rounded-3xl">
        <h1 className="font-bold text-2xl max-sm:text-xl text-left">
          Integration - Sample Code
        </h1>

        {/* Code Integration Details */}
        <div className="bg-gray-200 flex flex-col gap-5 px-6 max-sm:px-3 py-5 ml-6 max-sm:ml-4 min-h-[60vh]">
          {/* Code Integration Requests API */}
          <div className="flex w-full max-w-xs flex-col gap-4 mb-4">
            <Select
              label="Request Type"
              labelPlacement="outside"
              variant="faded"
              placeholder="Select Request Type"
              defaultSelectedKeys={['create_user_account']}
              selectedKeys={[requestValue]}
              className="max-w-xs"
              onChange={handleSelectionChange}
            >
              {requestType.map((request) => (
                <SelectItem
                  key={request.endPoint}
                  startContent={
                    <p className="p-1 text-white text-xs rounded-md font-semibold bg-orange-400">
                      {request.method}
                    </p>
                  }
                >
                  {request.label}
                </SelectItem>
              ))}
            </Select>

            <div className="flex items-center gap-1 border rounded-md p-2 bg-zinc-300">
              <p className="p-1 text-white text-sm max-sm:text-xs rounded-md font-semibold bg-orange-400">
                POST
              </p>
              <p className="text-base font-medium max-sm:text-xs">
                / {requestValue}
              </p>
            </div>
          </div>

          {/* Request Body Params */}
          <div className="flex flex-col gap-3 mb-4">
            <h5 className="font-semibold text-lg max-sm:text-base text-left">
              Request
            </h5>

            <div className="bg-zinc-300 rounded-sm p-2 flex flex-col gap-3">
              <h6 className="text-base max-sm:text-sm font-semibold border border-gray-400 p-2">
                Body Params
              </h6>

              {requestValue && (
                <div className="bg-gray-200 rounded-md mx-4 mb-4 py-4">
                  <p className="text-base max-sm:text-xs p-2">
                    {isMediumScreen ? (
                      <code>{jsonDataForRequests[requestValue]}</code>
                    ) : (
                      <pre>
                        <code>{jsonDataForRequests[requestValue]}</code>
                      </pre>
                    )}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Code Integration Request Samples */}
          <div className="flex w-full flex-col">
            <Tabs
              aria-label="Code Integration Samples"
              items={tabs}
              size={inputSize}
              fullWidth
            >
              {({ id, content, icon: Icon, label, color }) => (
                <Tab
                  key={id}
                  title={
                    <div className="flex items-center space-x-2">
                      <Icon size={24} color={color} />
                      <span>{label}</span>
                    </div>
                  }
                >
                  <Card>
                    <CardBody>
                      <p>{content}</p>
                      <div className="flex items-center justify-between mt-8 max-md:flex-col gap-4">
                        <Button
                          onPress={() => {}}
                          variant="shadow"
                          size={inputSize}
                          className="text-base max-md:text-sm"
                        >
                          Download document
                        </Button>
                        <Button
                          onPress={() => {}}
                          variant="shadow"
                          size={inputSize}
                          className="text-base max-md:text-sm"
                        >
                          Sample code link
                        </Button>
                      </div>
                    </CardBody>
                  </Card>
                </Tab>
              )}
            </Tabs>
          </div>

          {/* Responses Body Params */}
          <div className="flex flex-col gap-3 mb-4">
            <h5 className="font-semibold text-lg max-sm:text-base text-left">
              Responses
            </h5>

            <div className="bg-zinc-300 rounded-sm p-2 flex flex-col gap-3">
              <h6 className="text-base max-sm:text-sm font-semibold border border-gray-400 p-2">
                HTTP Code: 200(OK)
              </h6>

              {requestValue && (
                <div className="bg-gray-200 rounded-md mx-4 mb-4 py-4">
                  <p className="text-base max-sm:text-xs p-2">
                    {isMediumScreen ? (
                      <code>{jsonDataForResponses[requestValue]}</code>
                    ) : (
                      <pre>
                        <code>{jsonDataForResponses[requestValue]}</code>
                      </pre>
                    )}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CodeIntegrationPage;
