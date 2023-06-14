'use client';

import Text from '@/components/atom/Text';
import Button from '@/components/atom/Button';
import Header from '@/components/organism/Header';

import { GITHUB_URL } from '@/settings';

import './styles.css';
import { GithubLogo } from '@phosphor-icons/react';

export default function DocHomepage() {
  return (
    <div className="doc-homepage w-full h-screen">
      <Header className="doc-home-header" />

      <div className="doc-home-content max-w-5xl">
        <div className="content-background"></div>

        <Text size="5xl" weight="bold" align="center" className="title">
          Construindo Harmonia: Crie Aplicações Web com um Design System Moderno
        </Text>
        <Text size="xl" color="grayscale600" className="subtitle" align="center">
          Construa aplicações web com facilidade usando nosso{' '}
          <Text element="span" color="primary300">
            Design System
          </Text>
          . Componentes reutilizáveis, estilos pré-definidos e um guia completo
          para uma experiência visualmente coerente.
        </Text>
        <div className="links">
          <Button className="mr-2" theme="primary">
            Get started
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
