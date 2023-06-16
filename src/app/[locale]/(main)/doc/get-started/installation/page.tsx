'use client';

import { CaretLeft, CaretRight } from '@phosphor-icons/react';
import { useTranslations } from 'next-intl';

import { PROJECT_NAME } from '@/settings';

import Text from '@/components/atom/Text';
import Divider from '@/components/atom/Divider';
import Button from '@/components/atom/Button';
import CodeSample from '@/components/molecule/CodeSample';

import './styles.css';

export default function InstallationPage() {
  const t = useTranslations();

  return (
    <div className="installation-page">
      <Text size="3xl" weight="bold" className="mb-8">
        {t('Installation')}
      </Text>
      <Divider className="mb-12" />

      <Text size="xl" weight="bold" className="mb-6">
        {t('Cloning the Project Repository')}
      </Text>
      <Text className="mb-6">
        {t(
          'Currently, to use {project_name}, you can clone the project repository directly from GitHub_ Follow the steps below to get started:',
          {
            project_name: PROJECT_NAME,
          },
        )}
      </Text>
      <ol className="mb-6">
        <li className="mb-4">
          <Text>1. {t('Open your operating system is terminal_')}</Text>
        </li>
        <li className="mb-4">
          <Text>
            2.{' '}
            {t(
              'Navigate to the directory where you want to clone the project_',
            )}
          </Text>
        </li>
        <li className="mb-4">
          <Text className="mb-6">
            3. {t('Run the following command to clone the repository:')}
          </Text>
          <CodeSample
            codeString="git clone https://github.com/johnnyferreiradev/next-template.git"
            language="text"
            title="terminal"
            className="mb-6"
          />
        </li>
        <li className="mb-4">
          <Text className="mb-6">
            4. {t('After the clone is complete, access the project directory:')}
          </Text>
          <CodeSample
            codeString="cd next-template"
            language="text"
            title="terminal"
            className="mb-6"
          />
        </li>
        <li className="mb-4">
          <Text className="mb-6">
            5.{' '}
            {t(
              'Install the necessary dependencies by running the following command:',
            )}
          </Text>
          <CodeSample
            codeString={'npm intall\n// or\nyarn'}
            language="javascript"
            title="terminal"
            className="mb-6"
          />
        </li>
        <li>
          <Text>
            6.{' '}
            {t(
              'Now you are ready to start using {project_name} in your project_',
              {
                project_name: PROJECT_NAME,
              },
            )}
          </Text>
        </li>
      </ol>
      <Divider className="mb-12" />

      <Text size="xl" weight="bold" className="mb-6">
        {t('Future Updates')}
      </Text>
      <Text className="mb-6">
        {t(
          'We are continuously working to make {project_name} even more accessible and user-friendly_ In the near future, we plan to release the design system components as a library on npm, allowing you to install and use them in your project with ease_',
          {
            project_name: PROJECT_NAME,
          },
        )}
      </Text>
      <Text className="mb-6">
        {t(
          'Once this update is available, you will be able to install {project_name} directly in your project using the npm package manager_ Stay tuned for our updates and refer to the official documentation for detailed information on how to install using the npm library_',
          {
            project_name: PROJECT_NAME,
          },
        )}
      </Text>
      <Divider className="mb-12" />

      <div className="next-actions flex justify-between items-center mb-16">
        <Button
          leftIcon={<CaretLeft size={20} />}
          theme="dark-flat"
          to="/doc/get-started/atomic-design"
        >
          {t('Atomic Design')}
        </Button>
        {/* <Button
          rightIcon={<CaretRight size={20} />}
          theme="dark-flat"
          to="/doc/get-started/installation"
        >
          {t('Installation')}
        </Button> */}
        <span></span>
      </div>
    </div>
  );
}
