import Logo from '@/components/atom/Logo';
import Text from '@/components/atom/Text';
import Button from '@/components/atom/Button';
import Header from '@/components/organism/Header';

import './styles.css';

export default function DocHomepage() {
  return (
    <div className="doc-homepage w-full h-screen">
      <Header className="doc-home-header" />

      <div className="doc-home-content max-w-5xl">
        <div className="content-background"></div>

        <Text size="5xl" weight="bold" align="center" className="mb-12">
          Construindo Harmonia: Crie Aplicações Web com um Design System Moderno
        </Text>
        <Text size="xl" color="grayscale400" className="mb-8" align="center">
          Construa aplicações web com facilidade usando nosso{' '}
          <Text element="span" size="xl" color="primary300">
            Design System
          </Text>
          . Componentes reutilizáveis, estilos pré-definidos e um guia completo
          para uma experiência visualmente coerente.
        </Text>
        <div className="links">
          <Button className="mr-2" theme="primary">
            Get started
          </Button>
          <Button theme="outline-primary">Git repo</Button>
        </div>
      </div>
      <footer>
        <div>Links</div>
        <div>
          <Text color="grayscale500" size="sm">
            © {new Date().getFullYear()} - Johnny Ferreira
          </Text>
        </div>
      </footer>
    </div>
  );
}
