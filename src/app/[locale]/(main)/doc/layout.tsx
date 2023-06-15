'use client';

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
  return (
    <div className="documentation-layout">
      <Header />
      <div className="layout-content">
        <nav>
          <div className="nav-group">
            <Text
              color="darkColor"
              size="xs"
              weight="semibold"
              className="mb-1"
            >
              Get Started
            </Text>
            <Button theme="link-gray" size="sm" className="mb-1">
              Introduction
            </Button>
            <Button theme="link-gray" size="sm" className="mb-1">
              Atmoic Design
            </Button>
          </div>
          <div className="nav-group">
            <Text
              color="darkColor"
              size="xs"
              weight="semibold"
              className="mb-1"
            >
              Atoms
            </Text>
            <Button theme="link-gray" size="sm" className="mb-1">
              Component 1
            </Button>
            <Button theme="link-gray" size="sm" className="mb-1">
              Component 2
            </Button>
          </div>
          <div className="nav-group">
            <Text
              color="darkColor"
              size="xs"
              weight="semibold"
              className="mb-1"
            >
              Molecules
            </Text>
            <Button theme="link-gray" size="sm" className="mb-1">
              Component 1
            </Button>
            <Button theme="link-gray" size="sm" className="mb-1">
              Component 2
            </Button>
          </div>
          <div className="nav-group">
            <Text
              color="darkColor"
              size="xs"
              weight="semibold"
              className="mb-1"
            >
              Organisms
            </Text>
            <Button theme="link-gray" size="sm" className="mb-1 pl-0">
              Component 1
            </Button>
            <Button theme="link-gray" size="sm" className="mb-1 pl-0">
              Component 2
            </Button>
          </div>
        </nav>
        <article>{children}</article>
      </div>
      <Footer />
    </div>
  );
}
