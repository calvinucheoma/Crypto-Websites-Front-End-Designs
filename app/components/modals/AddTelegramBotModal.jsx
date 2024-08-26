'use client';

import useCurrentUser from '@/app/hooks/useCurrentUser';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  Button,
  useDisclosure,
  Input,
  Textarea,
  DateRangePicker,
} from '@nextui-org/react';
import { useMediaQuery } from '@react-hook/media-query';
import { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { FaRobot } from 'react-icons/fa6';
import { toast } from 'react-toastify';
import { z } from 'zod';
import { parseAbsoluteToLocal } from '@internationalized/date';

const FormSchema = z.object({
  botName: z
    .string()
    .min(3, 'Bot name must be at least 3 characters')
    .max(45, 'Bot name should not be more than 45 characters'),
  botToken: z
    .string()
    .min(5, 'Bot token must be at least 5 characters')
    .max(45, 'Bot token should not be more than 45 characters'),
  botImage: z.custom(
    (val) => {
      if (!(val instanceof File)) {
        return false;
      }
      const validFormats = ['image/jpeg', 'image/jpg', 'image/png'];
      const isValidFormat = validFormats.includes(val.type);
      const isValidSize = val.size <= 5 * 1024 * 1024; // 5MB
      return isValidFormat && isValidSize;
    },
    {
      message:
        'Please select a valid image (jpeg, jpg, png) with size less than 5MB',
    }
  ),
  // botImage: z
  //   .instanceof(FileList)
  //   .refine((files) => files.length === 1, 'You must upload exactly one image')
  //   .refine(
  //     (files) =>
  //       ['image/jpeg', 'image/jpg', 'image/png'].includes(files[0]?.type),
  //     'Only .jpg, .jpeg, and .png formats are allowed.'
  //   )
  //   .refine(
  //     (files) => files[0]?.size <= 10 * 1024 * 1024,
  //     'File size must be less than 10MB'
  //   ),
  description: z
    .string()
    .min(5, 'Message must be at least 5 characters')
    .max(200, 'Bot token should not be more than 200 characters'),
  welcomeMessage: z
    .string()
    .min(5, 'Message must be at least 5 characters')
    .max(45, 'Bot token should not be more than 45 characters'),
  // membershipDurationTimeline: z
  //   .object({
  //     startDate: z
  //       .string()
  //       .refine((date) => !isNaN(Date.parse(date)), 'Invalid start date'),
  //     endDate: z
  //       .string()
  //       .refine((date) => !isNaN(Date.parse(date)), 'Invalid end date'),
  //   })
  //   .refine(
  //     ({ startDate, endDate }) => new Date(startDate) < new Date(endDate),
  //     'End date must be after start date'
  //   ),
  // graceTime: z
  //   .object({
  //     startDate: z
  //       .string()
  //       .refine((date) => !isNaN(Date.parse(date)), 'Invalid start date'),
  //     endDate: z
  //       .string()
  //       .refine((date) => !isNaN(Date.parse(date)), 'Invalid end date'),
  //   })
  //   .refine(
  //     ({ startDate, endDate }) => new Date(startDate) < new Date(endDate),
  //     'End date must be after start date'
  //   ),
  membershipDurationTimeline: z
    .date({
      required_error: 'Please select a date and time',
    })
    .optional(),
  graceTime: z
    .date({
      required_error: 'Please select a date and time',
    })
    .optional(),
});

const AddTelegramBotModal = () => {
  const { addTelegramBot } = useCurrentUser();

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  // Get current date and time
  const todaysDate = new Date();
  const year = todaysDate.getFullYear();
  const month = String(todaysDate.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
  const day = String(todaysDate.getDate()).padStart(2, '0');
  const hours = String(todaysDate.getHours()).padStart(2, '0');
  const minutes = String(todaysDate.getMinutes()).padStart(2, '0');

  // Format current date and time
  const currentDateTime = `${year}-${month}-${day}T${hours}:${minutes}Z`;

  // Get future date (2 days later) and time
  const futureDateObj = new Date(todaysDate);
  futureDateObj.setDate(todaysDate.getDate() + 2);
  const futureYear = futureDateObj.getFullYear();
  const futureMonth = String(futureDateObj.getMonth() + 1).padStart(2, '0');
  const futureDay = String(futureDateObj.getDate()).padStart(2, '0');
  const futureDateTime = `${futureYear}-${futureMonth}-${futureDay}T${hours}:${minutes}Z`;

  // Set initial membership date timeline
  const [initialMembershipDateTime, setInitialMemberShipDateTime] = useState({
    start: parseAbsoluteToLocal(currentDateTime),
    end: parseAbsoluteToLocal(futureDateTime),
  });

  // Set initial grace timeline
  const [initialGraceTimelineDateTime, setInitialGraceTimelineDateTime] =
    useState({
      start: parseAbsoluteToLocal(currentDateTime),
      end: parseAbsoluteToLocal(futureDateTime),
    });

  const isSmallScreen = useMediaQuery('(max-width: 640px)');
  const [inputSize, setInputSize] = useState('lg');

  const [fileName, setFileName] = useState('');

  useEffect(() => {
    setInputSize(isSmallScreen ? 'sm' : 'lg');
  }, [isSmallScreen]);

  const {
    register,
    handleSubmit,
    control,
    // setValue,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: zodResolver(FormSchema) });

  // Function to handle change of image file
  // const handleFileChange = (event) => {
  //   const file = event.target.files[0];
  //   if (file) {
  //     setFileName(file.name);
  //   }
  // };

  // Function to add Telegram Bot
  const submitForm = (onClose) => (data) => {
    try {
      console.log(data);
      addTelegramBot(data);
      toast.success('Telegram bot created successfully!');
      onClose();
    } catch (error) {
      toast.error('Something went wrong...');
      console.error(error);
    }
  };

  return (
    <>
      <div className="w-full h-[100vh] max-md:h-[calc(100vh-56px)] flex items-center justify-center">
        <Button
          variant="shadow"
          color="primary"
          endContent={<FaRobot size={22} color="white" />}
          size={inputSize}
          className="px-6 py-3 max-md:py-6 rounded-md text-white max-md:text-base"
          onPress={onOpen}
        >
          Add Telegram Bot
        </Button>

        <Modal
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          backdrop="blur"
          scrollBehavior="inside"
          placement="center"
        >
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">
                  New Telegram Bot
                </ModalHeader>

                <ModalBody>
                  <form onSubmit={handleSubmit(submitForm(onClose))}>
                    <div className="flex flex-col gap-6 h-full">
                      <Input
                        {...register('botName')}
                        label="Bot Name"
                        labelPlacement="outside"
                        errorMessage={errors.botName?.message}
                        isInvalid={!!errors.botName}
                        variant="bordered"
                        size={inputSize}
                      />

                      <Input
                        {...register('botToken')}
                        label="Bot Token"
                        labelPlacement="outside"
                        errorMessage={errors.botToken?.message}
                        isInvalid={!!errors.botToken}
                        variant="bordered"
                        size={inputSize}
                      />

                      {/* Image Upload */}
                      <div className="mt-3 mb-3">
                        <Controller
                          control={control}
                          name="botImage"
                          render={({ field }) => (
                            <input
                              // {...register('botImage')}
                              id="fileInput"
                              type="file"
                              accept="image/jpeg,image/png,image/jpg"
                              variant="bordered"
                              onChange={(e) => {
                                const file = e.target.files[0];
                                if (file) {
                                  const validFormats = [
                                    'image/jpeg',
                                    'image/jpg',
                                    'image/png',
                                  ];
                                  const isValidFormat = validFormats.includes(
                                    file.type
                                  );
                                  const isValidSize =
                                    file.size <= 5 * 1024 * 1024; // 5MB

                                  if (!isValidFormat || !isValidSize) {
                                    toast.error(
                                      'Please select a valid image (jpeg, jpg, png) with size less than 5MB'
                                    );
                                    return;
                                  }

                                  field.onChange(file);
                                  setFileName(file.name);
                                }
                              }}
                              className="hidden"
                            />
                          )}
                        />

                        <Button
                          type="button"
                          color="default"
                          variant="ghost"
                          size="sm"
                          onPress={() =>
                            document.getElementById('fileInput').click()
                          }
                          className="text-base p-4 max-md:text-sm max-sm:text-xs max-md:p-2"
                        >
                          Upload Image
                        </Button>

                        <p className="text-base font-medium max-md:text-sm max-sm:text-xs mt-1">
                          {fileName || 'No file selected'}
                        </p>

                        {!!errors.botImage && (
                          <p className="text-red-500 text-xs">
                            {errors.botImage.message}
                          </p>
                        )}
                      </div>

                      <Textarea
                        {...register('description')}
                        label="Description"
                        labelPlacement="outside"
                        errorMessage={errors.description?.message}
                        isInvalid={!!errors.description}
                        variant="bordered"
                        size={inputSize}
                      />

                      <Input
                        {...register('welcomeMessage')}
                        label="Welcome Message"
                        labelPlacement="outside"
                        errorMessage={errors.welcomeMessage?.message}
                        isInvalid={!!errors.welcomeMessage}
                        variant="bordered"
                        size={inputSize}
                      />

                      <div className="overflow-x-auto">
                        <Controller
                          control={control}
                          name="membershipDurationTimeline"
                          render={({ field: { onBlur, ...restField } }) => (
                            <DateRangePicker
                              {...restField}
                              value={initialMembershipDateTime}
                              onChange={setInitialMemberShipDateTime}
                              // isInvalid={!!errors.membershipDurationTimeline}
                              // errorMessage={
                              //   errors.membershipDurationTimeline?.message
                              // }
                              onBlur={onBlur}
                              label="Membership Duration Timeline"
                              labelPlacement="outside"
                              variant="bordered"
                              size={inputSize}
                              className="w-fit"
                              fullWidth
                            />
                          )}
                        />
                      </div>

                      <div className="overflow-x-auto">
                        <Controller
                          control={control}
                          name="graceTime"
                          render={({ field: { onBlur, ...restField } }) => (
                            <DateRangePicker
                              {...restField}
                              value={initialGraceTimelineDateTime}
                              onChange={setInitialGraceTimelineDateTime}
                              // isInvalid={!!errors.graceTime}
                              // errorMessage={errors.graceTime?.message}
                              onBlur={onBlur}
                              label="Grace Time"
                              labelPlacement="outside"
                              variant="bordered"
                              size={inputSize}
                              className="w-fit"
                              fullWidth
                            />
                          )}
                        />
                      </div>

                      {/* <DateRangePicker
                        {...register('membershipDurationTimeline')}
                        label="Membership Duration Timeline"
                        labelPlacement="outside"
                        isInvalid={!!errors.membershipDurationTimeline}
                        errorMessage={
                          errors.membershipDurationTimeline?.message
                        }
                        variant="bordered"
                        size={inputSize}
                        // required
                      />

                      <DateRangePicker
                        {...register('graceTime')}
                        label="Grace Time"
                        labelPlacement="outside"
                        isInvalid={!!errors.graceTime}
                        errorMessage={errors.graceTime?.message}
                        variant="bordered"
                        size={inputSize}
                        // required
                      /> */}

                      <Button
                        color="primary"
                        type="submit"
                        variant="shadow"
                        isLoading={isSubmitting}
                        isDisabled={isSubmitting}
                        size={inputSize}
                        className="ml-auto mb-2"
                      >
                        {isSubmitting ? 'Please wait...' : 'Create bot'}
                      </Button>
                    </div>
                  </form>
                </ModalBody>
              </>
            )}
          </ModalContent>
        </Modal>
      </div>
    </>
  );
};

export default AddTelegramBotModal;
