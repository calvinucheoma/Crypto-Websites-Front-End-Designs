'use client';

import AddProjectModal from '@/app/components/modals/AddProjectModal';
import useCurrentUser from '@/app/hooks/useCurrentUser';
import { Button, Select, SelectItem } from '@nextui-org/react';
import { useMediaQuery } from '@react-hook/media-query';
import { useEffect, useState } from 'react';
import { FaTrash } from 'react-icons/fa6';

const ProjectsPage = () => {
  const {
    currentProjects,
    selectedProject,
    setSelectedProject,
    removeProject,
    removeAllProjects,
  } = useCurrentUser();

  const isSmallScreen = useMediaQuery('(max-width: 640px)');
  const [inputSize, setInputSize] = useState('lg');

  useEffect(() => {
    setInputSize(isSmallScreen ? 'sm' : 'lg');
  }, [isSmallScreen]);

  useEffect(() => {
    // Ensure selectedProject is set when component mounts
    if (currentProjects.length > 0 && !selectedProject) {
      setSelectedProject(currentProjects[0]);
    }
  }, [currentProjects, selectedProject, setSelectedProject]);

  const handleSelectionChange = (e) => {
    setSelectedProject(e.target.value);
  };

  return (
    <main className="flex flex-col gap-10 h-full max-md:min-h-[calc(100vh-56px)] w-full items-center justify-center">
      {/* USERS PROJECT */}

      {currentProjects.length === 0 ? (
        <h4 className="text-3xl max-sm:text-xl font-semibold text-center">
          You do not have any projects yet...
        </h4>
      ) : (
        <div className="flex flex-col gap-4 w-[97%] items-center justify-center">
          <h4 className="text-3xl max-sm:text-xl font-semibold text-center">
            Projects
          </h4>

          <div className="w-full flex items-center justify-center">
            <Select
              variant="faded"
              placeholder="Select a project"
              label="Switch between projects"
              labelPlacement="outside"
              defaultSelectedKeys={[selectedProject ? selectedProject : '']}
              className="max-w-md"
              onChange={handleSelectionChange}
              size={inputSize}
            >
              {currentProjects?.map((project) => (
                <SelectItem key={project}>{project}</SelectItem>
              ))}
            </Select>
          </div>
        </div>
      )}

      {/* ADD NEW PROJECTS BUTTON */}
      <div className="mb-4">
        <AddProjectModal isOnProjectsPage />
      </div>

      {/* ALL PROJECTS SECTION */}
      {currentProjects.length === 0 ? null : (
        <div className="w-[97%] py-8 px-4 bg-stone-200 rounded-md flex flex-col gap-4 h-[30vh] overflow-y-auto">
          {/* All Projects */}
          {currentProjects.map((project, index) => (
            <div className="flex items-center justify-between mb-3" key={index}>
              <h3 className="text-xl max-sm:text-sm font-semibold text-stone-800">
                {project}
              </h3>
              <FaTrash
                size={20}
                color="red"
                onClick={() => removeProject(project)}
                className="cursor-pointer"
              />
            </div>
          ))}

          {/* Remove all projects button*/}
          <div className="w-full flex items-center justify-end mt-8">
            <Button
              onPress={removeAllProjects}
              color="danger"
              variant="shadow"
              size={inputSize}
              className="text-base max-md:text-sm"
            >
              Delete all projects
            </Button>
          </div>
        </div>
      )}
    </main>
  );
};

export default ProjectsPage;
