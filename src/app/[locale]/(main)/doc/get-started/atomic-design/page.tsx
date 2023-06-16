'use client';

import { CaretRight } from '@phosphor-icons/react';
import { useTranslations } from 'next-intl';

import { PROJECT_NAME } from '@/settings';

import Text from '@/components/atom/Text';
import Divider from '@/components/atom/Divider';
import Button from '@/components/atom/Button';
import Image from '@/components/atom/Image';

import atomicDesignImage from '@/assets/images/atomic-design.jpeg';

import './styles.css';

export default function AtomicDesignPage() {
  const t = useTranslations();

  return (
    <div className="introduction-page">
      <Text size="3xl" weight="bold" className="mb-8">
        {t('Atomic Design')}
      </Text>

      <Image
        src={atomicDesignImage}
        alt="Atomic Design"
        className="rounded-lg"
      />

      <Divider className="mb-12" />

      <Text size="xl" weight="bold" className="mb-6">
        {t('What is Atomic Design?')}
      </Text>
      <Text className="mb-6">
        {t(
          'Atomic Design is a user interface design methodology that breaks down components into hierarchical levels, similar to the structure of atoms, molecules, organisms, templates, and pages_ This modular approach allows for the creation of scalable interfaces by reusing components in different contexts_',
        )}
      </Text>
      <Text className="mb-6">
        {t(
          'In Atomic Design, each level represents a degree of complexity and reusability_ Atoms are the most basic and independent components, such as buttons and form fields_ Molecules combine atoms to form more complex components, like a form field with a label and an input field_ Organisms are combinations of molecules and atoms, creating complete components, such as a header with a logo, menu, and action buttons_ Templates are structures that define the overall layout of a page or section, while pages are specific instances of templates, filled with real content_',
        )}
      </Text>
      <Divider className="mb-12" />

      <Text size="xl" weight="bold" className="mb-6">
        {t('Using Atomic Design')}
      </Text>
      <Text className="mb-6">
        {t(
          'Atomic Design provides a structured approach to creating a consistent and scalable Design System_ By organizing components into different levels, they can be reused across multiple parts of a project, saving development time and effort_',
        )}
      </Text>
      <Text className="mb-6">
        {t(
          'In the {project_name} project, we have adopted the Atomic Design methodology as the foundation for organizing and developing our components_ Following this approach, we have created a comprehensive library of atoms, molecules, organisms, templates, and pages, making it easier to create cohesive and efficient interfaces_',
          {
            project_name: PROJECT_NAME,
          },
        )}
      </Text>
      <Divider className="mb-12" />

      <Text size="xl" weight="bold" className="mb-6">
        {t('Why Use Atomic Design?')}
      </Text>
      <ul className="mb-6">
        <li className="mb-4">
          <Text>
            <Text weight="bold" element="span">
              {t('Visual Consistency:')}
            </Text>{' '}
            {t(
              'By breaking down components into hierarchical levels, Atomic Design promotes visual consistency throughout the project_ Each component is designed according to established design guidelines, resulting in a cohesive and harmonious interface_',
            )}
          </Text>
        </li>
        <li className="mb-4">
          <Text>
            <Text weight="bold" element="span">
              {t('Reuse and Scalability:')}
            </Text>{' '}
            {t(
              'The modular approach of Atomic Design enables component reuse in different contexts and facilitates system scalability_ Well-defined and organized components can be combined to create complex interfaces without starting from scratch_',
            )}
          </Text>
        </li>
        <li className="mb-4">
          <Text>
            <Text weight="bold" element="span">
              {t('Development Efficiency:')}
            </Text>{' '}
            {t(
              'With the Atomic Design component library, interface development becomes more efficient_ Predefined components can be easily incorporated into the project, speeding up the creation process and ensuring consistency across all screens_',
            )}
          </Text>
        </li>
      </ul>
      <Divider className="mb-12" />

      <Text size="xl" weight="bold" className="mb-6">
        {t('{project_name} and Atomic Design', {
          project_name: PROJECT_NAME,
        })}
      </Text>
      <Text className="mb-6">
        {t(
          '{project_name} embraces Atomic Design as the methodology for creating and organizing components_ Our library offers a wide range of ready-to-use atoms, molecules, organisms, templates, and pages, enabling you to build amazing interfaces following the principles of Atomic Design_',
          {
            project_name: PROJECT_NAME,
          },
        )}
      </Text>
      <Text className="mb-6">
        {t(
          'Keep exploring our documentation to learn in detail about each level of Atomic Design and how to use the components from {project_name} in your project_',
          {
            project_name: PROJECT_NAME,
          },
        )}
      </Text>
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
