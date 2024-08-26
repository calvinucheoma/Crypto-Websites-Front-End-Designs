'use client';

import useCurrentUser from '@/app/hooks/useCurrentUser';
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
} from '@nextui-org/react';
import { useMediaQuery } from '@react-hook/media-query';
import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { FaPlus } from 'react-icons/fa6';

const AddProjectModal = ({ isOnProjectsPage }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const isSmallScreen = useMediaQuery('(max-width: 640px)');
  const [inputSize, setInputSize] = useState('lg');

  const [newProject, setNewProject] = useState('');

  const { addProject } = useCurrentUser();

  useEffect(() => {
    setInputSize(isSmallScreen ? 'sm' : 'lg');
  }, [isSmallScreen]);

  return (
    <>
      <div
        className={clsx(
          'w-full h-full flex items-center justify-center',
          !isOnProjectsPage && 'max-md:min-h-[calc(100vh-56px)]'
        )}
      >
        <Button
          variant="shadow"
          color="primary"
          endContent={<FaPlus size={16} color="white" />}
          size={inputSize}
          className="px-6 py-3 rounded-md text-white max-md:text-base"
          onPress={onOpen}
        >
          Add New Project
        </Button>

        <Modal
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          backdrop="blur"
          placement="center"
        >
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">
                  New Project
                </ModalHeader>

                <ModalBody>
                  <Input
                    autoFocus
                    placeholder="Enter the name of your project"
                    variant="flat"
                    value={newProject}
                    onChange={(e) => setNewProject(e.target.value)}
                    size={inputSize}
                  />
                </ModalBody>

                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    Close
                  </Button>
                  <Button
                    color="primary"
                    onPress={() => {
                      if (newProject.trim() === '') {
                        return;
                      } else {
                        addProject(newProject.trim());
                        setNewProject('');
                        onClose();
                      }
                    }}
                  >
                    Create
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </div>
    </>
  );
};

export default AddProjectModal;
