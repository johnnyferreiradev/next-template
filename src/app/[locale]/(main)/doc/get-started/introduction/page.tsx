'use client';

import { CaretRight } from '@phosphor-icons/react';
import { useTranslations } from 'next-intl';

import { PROJECT_NAME } from '@/settings';

import Text from '@/components/atom/Text';
import Divider from '@/components/atom/Divider';
import Button from '@/components/atom/Button';

import './styles.css';

export default function IntroductionPage() {
  const t = useTranslations();

  return (
    <div className="introduction-page">
      <Text size="3xl" weight="bold" className="mb-8">
        {t('Introduction')}
      </Text>
      <Text className="mb-4">
        {t('Welcome to {{project_name}}!', {
          project_name: PROJECT_NAME,
        })}
      </Text>
      <Divider className="mb-12" />

      <Text size="xl" weight="bold" className="mb-6">
        {t('About {{project_name}}', {
          project_name: PROJECT_NAME,
        })}
      </Text>
      <Text className="mb-6">
        {t(
          '{{project_name}} is a tool/template for creating consistent and efficient interfaces in web applications It has been carefully designed to facilitate development and promote visual harmony throughout your project',
          {
            project_name: PROJECT_NAME,
          },
        )}
      </Text>
      <Divider className="mb-12" />

      <Text size="xl" weight="bold" className="mb-6">
        {t('Why use {{project_name}}?', {
          project_name: PROJECT_NAME,
        })}
      </Text>
      <ul className="mb-6">
        <li className="mb-4">
          <Text>
            <Text weight="bold" element="span">
              {t('Visual consistency:')}
            </Text>{' '}
            {t(
              '{{project_name}} provides a comprehensive library of carefully designed components, styles, and patterns that ensure a consistent appearance across all pages and applications',
              {
                project_name: PROJECT_NAME,
              },
            )}
          </Text>
        </li>
        <li className="mb-4">
          <Text>
            <Text weight="bold" element="span">
              {t('Enhanced Productivity:')}
            </Text>{' '}
            {t(
              'With a vast collection of reusable components and pre-defined styles, you can quickly and efficiently create impressive interfaces, saving time and effort in the development process',
            )}
          </Text>
        </li>
        <li className="mb-4">
          <Text>
            <Text weight="bold" element="span">
              {t('Ease of Maintenance:')}
            </Text>{' '}
            {t(
              '{{project_name}} makes it easy to maintain interfaces and implement updates throughout the project Changes made in one place are automatically reflected in all dependent components, simplifying the maintenance process',
              {
                project_name: PROJECT_NAME,
              },
            )}
          </Text>
        </li>
        <li>
          <Text>
            <Text weight="bold" element="span">
              {t('Streamlined Workflow:')}
            </Text>{' '}
            {t(
              'With a well-defined structure, detailed documentation, and a set of powerful tools, {{project_name}} streamlines your development workflow, allowing you to focus on creating an exceptional user experience',
              {
                project_name: PROJECT_NAME,
              },
            )}
          </Text>
        </li>
      </ul>
      <Divider className="mb-12" />

      <Text size="xl" weight="bold" className="mb-6">
        {t('Why create a Design System?')}
      </Text>
      <Text className="mb-6">
        {t(
          'In new projects, it is common to start construction by creating a solid foundation of components before implementing the application screens This helps ensure visual consistency and facilitates the reuse of key elements in different parts of the project However, starting from scratch can be time-consuming and repetitive',
        )}
      </Text>
      <Text className="mb-6">
        {t(
          'This is where {{project_name}} comes into play It was created with the aim of providing a robust foundation of ready-to-use components, eliminating the need to build everything from scratch for each new project With {{project_name}}, you can save time and effort by starting with a solid set of pre-defined components and styles',
          {
            project_name: PROJECT_NAME,
          },
        )}
      </Text>
      <Divider className="mb-12" />

      <Text size="xl" weight="bold" className="mb-6">
        {t('Technologies Used:')}
      </Text>
      <Text className="mb-6">
        {t('{{project_name}} is developed using the powerful combination of', {
          project_name: PROJECT_NAME,
        })}{' '}
        <Button
          size="xs"
          href="https://react.dev/"
          target="_blank"
          theme="link-primary"
          className="inline-block text-link"
        >
          React
        </Button>{' '}
        {t('with')}{' '}
        <Button
          size="xs"
          href="https://nextjs.org/"
          target="_blank"
          theme="link-primary"
          className="inline-block text-link"
        >
          Next.js
        </Button>{' '}
        {t('and')}{' '}
        <Button
          size="xs"
          href="https://tailwindcss.com/"
          target="_blank"
          theme="link-primary"
          className="inline-block text-link"
        >
          Tailwind CSS
        </Button>
        {t(
          'These technologies are widely recognized and adopted by the web development community, providing a solid foundation for creating modern and responsive interfaces',
        )}
      </Text>
      <Divider className="mb-12" />

      <Text size="xl" weight="bold" className="mb-6">
        {t('What will you find in this documentation?')}
      </Text>
      <Text className="mb-6">
        {t(
          'In this documentation, you will find everything you need to start using {{project_name}} in your project We will explore design principles, component structure, style guidelines, and how to easily integrate the design system into your application You will also have access to code examples, interactive demos, and best practices to make the most out of {{project_name}}',
          {
            project_name: PROJECT_NAME,
          },
        )}
      </Text>
      <Text className="mb-6">
        {t(
          'We are excited to have you on board, and we hope that {{project_name}} will help you create amazing and consistent interfaces in your web applications',
          {
            project_name: PROJECT_NAME,
          },
        )}
      </Text>
      <Text className="mb-6">{t('Let is get started!')}</Text>
      <Divider className="mb-12" />

      <div className="next-actions flex justify-between items-center mb-16">
        <span></span>
        <Button
          rightIcon={<CaretRight size={20} />}
          theme="dark-flat"
          to="/doc/get-started/atomic-design"
        >
          Atomic Design
        </Button>
      </div>
    </div>
  );
}
