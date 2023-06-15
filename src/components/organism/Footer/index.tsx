import { GithubLogo } from '@phosphor-icons/react';

import { GITHUB_URL } from '@/settings';

import Button from '@/components/atom/Button';
import Text from '@/components/atom/Text';

import { FooterProps } from './types';

import './styles.css';

export default function Footer({}: FooterProps) {
  return (
    <footer className="footer">
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
  );
}
