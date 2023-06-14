'use client';

import { useTranslations } from 'next-intl';

import Text from '@/components/atom/Text';
import Button from '@/components/atom/Button';
import Header from '@/components/organism/Header';

import { GITHUB_URL } from '@/settings';

import './styles.css';
import { GithubLogo } from '@phosphor-icons/react';

export default function DocHomepage() {
  const t = useTranslations();

  return (
    <div className="doc-homepage w-full h-screen">
      <Header className="doc-home-header" />

      <div className="doc-home-content max-w-5xl">
        <div className="content-background"></div>

        <Text size="5xl" weight="bold" align="center" className="title">
          {t(
            'Building Harmony: Create Web Applications with a Modern Design System',
          )}
        </Text>
        <Text
          size="xl"
          color="grayscale600"
          className="subtitle"
          align="center"
        >
          {t('Build web applications with ease using our')}
          <Text element="span" color="primary300" className="mx-1">
            {t('Design System')}.
          </Text>
          {t(
            'Reusable components, pre-built styles and a comprehensive guide to a visually coherent experience',
          )}
          .
        </Text>
        <div className="links">
          <Button className="mr-2" theme="primary">
            {t('Get started')}
          </Button>
          <Button
            theme="outline-primary"
            leftIcon={<GithubLogo size={16} />}
            target="_blank"
            href={GITHUB_URL}
          >
            GitHub
          </Button>
        </div>
      </div>
      <footer>
        <div className="footer-links">
          <Button
            size="xs"
            theme="link-gray"
            leftIcon={<GithubLogo size={26} />}
            target="_blank"
            href={GITHUB_URL}
          >
            GitHub
          </Button>
        </div>
        <div>
          <Text color="grayscale600" size="sm" className="flex items-center">
            <span>HarmonyUI v0.0.1 © {new Date().getFullYear()} -</span>
            <Button
              target="_blank"
              href="https://www.linkedin.com/in/johnny-ferreira-ab863917b/"
              theme="link-gray"
              size="xs"
              className="profile-link"
            >
              Johnny Ferreira
            </Button>
          </Text>
        </div>
      </footer>
    </div>
  );
}
