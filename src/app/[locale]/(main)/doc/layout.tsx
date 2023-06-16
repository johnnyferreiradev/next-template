'use client';

import { useState } from 'react';
import { List } from '@phosphor-icons/react';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';

import Header from '@/components/organism/Header';
import Footer from '@/components/organism/Footer';
import Text from '@/components/atom/Text';
import Button from '@/components/atom/Button';

import './styles.css';

export default function DocumentationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const t = useTranslations();
  const pathname = usePathname();
  const activeMenuPath = pathname.split('doc')[1];

  const [mobileNavIsHidden, setMobileNavIsHidden] = useState(true);

  return (
    <div className="documentation-layout">
      <Header />
      <Button
        leftIcon={<List size={20} />}
        fullWidth
        className="doc-menu-button justify-start"
        theme="link-dark"
        onClick={() => setMobileNavIsHidden(!mobileNavIsHidden)}
      >
        Menu
      </Button>
      <div className="layout-content">
        <nav className={mobileNavIsHidden ? 'nav__hidden' : ''}>
          <div className="nav-group">
            <Text
              color="darkColor"
              size="xs"
              weight="semibold"
              className="mb-1"
            >
              {t('Get Started')}
            </Text>
            <Button
              theme={
                activeMenuPath === '/get-started/introduction'
                  ? 'link-primary'
                  : 'link-gray'
              }
              size="sm"
              className="mb-1"
              to="/doc/get-started/introduction"
            >
              {t('Introduction')}
            </Button>
            <Button
              theme={
                activeMenuPath === '/get-started/atomic-design'
                  ? 'link-primary'
                  : 'link-gray'
              }
              size="sm"
              className="mb-1"
              to="/doc/get-started/atomic-design"
            >
              {t('Atomic Design')}
            </Button>
            <Button
              theme={
                activeMenuPath === '/get-started/installation'
                  ? 'link-primary'
                  : 'link-gray'
              }
              size="sm"
              className="mb-1"
              to="/doc/get-started/installation"
            >
              {t('Installation')}
            </Button>
          </div>
          <div className="nav-group">
            <Text
              color="darkColor"
              size="xs"
              weight="semibold"
              className="mb-1"
            >
              {t('Atoms')}
            </Text>
            {/* <Button theme="link-gray" size="sm" className="mb-1">
              Component 1
            </Button>
            <Button theme="link-gray" size="sm" className="mb-1">
              Component 2
            </Button> */}
            <Text color="grayscale500" size="sm" italic>
              {t('Coming soon')}
            </Text>
          </div>
          <div className="nav-group">
            <Text
              color="darkColor"
              size="xs"
              weight="semibold"
              className="mb-1"
            >
              {t('Molecules')}
            </Text>
            {/* <Button theme="link-gray" size="sm" className="mb-1">
              Component 1
            </Button>
            <Button theme="link-gray" size="sm" className="mb-1">
              Component 2
            </Button> */}
            <Text color="grayscale500" size="sm" italic>
              {t('Coming soon')}
            </Text>
          </div>
          <div className="nav-group">
            <Text
              color="darkColor"
              size="xs"
              weight="semibold"
              className="mb-1"
            >
              {t('Organisms')}
            </Text>
            {/* <Button theme="link-gray" size="sm" className="mb-1 pl-0">
              Component 1
            </Button>
            <Button theme="link-gray" size="sm" className="mb-1 pl-0">
              Component 2
            </Button> */}
            <Text color="grayscale500" size="sm" italic>
              {t('Coming soon')}
            </Text>
          </div>
        </nav>
        <article>{children}</article>
      </div>
      <Footer />
    </div>
  );
}
