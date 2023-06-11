'use client';

import { useState, useContext } from 'react';
import { User, Image as ImageIcon } from '@phosphor-icons/react';
import { useTheme } from 'next-themes';

import { ModalContext } from '@/contexts/ModalContext';
import { ToasterContext } from '@/contexts/ToasterContext';

import Text from '@/components/atom/Text';
import Card from '@/components/atom/Card';
import Checkbox from '@/components/atom/Checkbox';
import Radio from '@/components/atom/Radio';
import SwitchButton from '@/components/atom/SwitchButton';
import Collapse from '@/components/atom/Collapse';
import Icon from '@/components/atom/Icon';
// import Range from '@/components/atom/Range';
import Tag from '@/components/atom/Tag';
import Tooltip from '@/components/atom/Tooltip';
import Button from '@/components/atom/Button';
import Image from '@/components/atom/Image';
import Divider from '@/components/atom/Divider';
import Loader from '@/components/atom/Loader';
import ProgressBar from '@/components/atom/ProgressBar';
import CircularProgress from '@/components/atom/CircularProgress';
import CopyToClipboard from '@/components/molecule/CopyToClipboard';
import DatePicker from '@/components/molecule/DatePicker';
import Input from '@/components/molecule/Input';
import Textarea from '@/components/molecule/Textarea';
import Select from '@/components/molecule/Select';
import Dropdown from '@/components/molecule/Dropdown';
import SkeletonLoader from '@/components/atom/SkeletonLoader';

import Alert from '@/components/molecule/Alert';

import { Colors } from '@/types/globals';
import { TagThemes } from '@/components/atom/Tag/types';
import { ButtonThemes } from '@/components/atom/Button/types';
import { ProgressBarColors } from '@/components/atom/ProgressBar/types';
import { CircularProgressColors } from '@/components/atom/CircularProgress/types';

import HelloWorldTextImage from '@/assets/images/hello-world-text.png';

export default function Documentation() {
  const colorValueArray = Object.keys(Colors);
  const tagThemesArray = Object.keys(TagThemes);
  const buttonThemesArray = Object.keys(ButtonThemes);
  const progressBarColors = Object.keys(ProgressBarColors);
  const circularProgressColors = Object.keys(CircularProgressColors);

  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;

  const modalContext = useContext(ModalContext);
  const toasterContext = useContext(ToasterContext);

  const [checked, setChecked] = useState(false);
  const [values, setValues] = useState<number[]>([50]);
  const [dropdownIsOpen, setDropdownIsOpen] = useState(false);

  const handleChangePrimaryColor = () => {
    document.documentElement.style.setProperty('--primary-color-200', 'red');
  };

  const handleShowModal = () => {
    modalContext?.showModal({
      title: 'Modal test',
      subtitle: 'Modal subtitle',
      content: <Text>Modal content</Text>,
    });
  };

  const handleShowMessage = () => {
    toasterContext?.showToaster({
      title: 'Title',
      description:
        'Description aqui vai uma descrição bem grande, com muitos caracteres',
      icon: <User />,
      position: 'top-right',
      theme: 'failure',
    });
  };

  return (
    <main className="p-16 dark:bg-[var(--dark-color)]">
      <SkeletonLoader type="paragraph" className="mb-8" />

      <Button onClick={handleShowMessage} className="mb-8">
        Show toaster
      </Button>

      <Button onClick={handleShowModal} className="mb-8">
        Show modal
      </Button>

      <Dropdown
        toggleElement="Clique aqui"
        open={dropdownIsOpen}
        setOpen={(value) => {
          setDropdownIsOpen(value);
        }}
        className="mb-16 p-2"
        contentClassName="p-2"
      >
        <div>Dropdown content</div>
        <div>Dropdown content</div>
        <div>Dropdown content</div>
        <div>Dropdown content</div>
      </Dropdown>

      <Dropdown
        toggleElement="Clique aqui"
        open={dropdownIsOpen}
        setOpen={(value) => {
          setDropdownIsOpen(value);
        }}
        className="mb-16 ml-56 p-2"
        contentClassName="p-2"
        contentPlace="right"
      >
        <div>Dropdown content</div>
        <div>Dropdown content</div>
        <div>Dropdown content</div>
        <div>Dropdown content</div>
      </Dropdown>

      <Select
        options={[
          {
            label: <Button theme="link-dark">Option 1</Button>,
            value: 'op1',
          },
          {
            label: <Button theme="link-dark">Option 2</Button>,
            value: 'op2',
          },
        ]}
        value={{
          label: <Button theme="link-dark">Option 1</Button>,
          value: 'op1',
        }}
        className="mb-8"
        disabled
      />
      <Select
        options={[
          {
            label: <Button theme="link-dark">Option 1</Button>,
            value: 'op1',
          },
          {
            label: <Button theme="link-dark">Option 2</Button>,
            value: 'op2',
          },
        ]}
        value={{
          label: <Button theme="link-dark">Option 1</Button>,
          value: 'op1',
        }}
        className="mb-8"
      />
      <Select
        options={[
          {
            label: 'Option 1',
            value: 'op1',
          },
          {
            label: 'Option 2',
            value: 'op2',
          },
        ]}
        value={[
          {
            label: 'Option 1',
            value: 'op1',
          },
          {
            label: 'Option 2',
            value: 'op2',
          },
        ]}
        className="mb-8"
        isMulti
      />
      <Select
        options={[
          {
            label: 'Option 1',
            value: 'op1',
          },
          {
            label: 'Option 2',
            value: 'op2',
          },
        ]}
        value={[
          {
            label: 'Option 1',
            value: 'op1',
          },
          {
            label: 'Option 2',
            value: 'op2',
          },
        ]}
        className="mb-8"
        isMulti
        disabled
      />

      <Textarea className="mb-8" />

      <Input
        id="input-1"
        label="Label"
        icon={<User />}
        placeholder="placeholder"
        hasError
        rounded
        limit={30}
        errorMessage="Error"
        className="mb-8"
      />

      <DatePicker
        id="date-picker"
        value={new Date()}
        label="Date picker"
        icon={<User />}
        actions={
          <Button theme="link-primary" size="xs">
            Teste
          </Button>
        }
        errorMessage="Erro"
        hasError
        rounded
      />
      <DatePicker
        id="date-picker"
        label="Date picker"
        icon={<User />}
        actions={
          <Button theme="link-primary" size="xs">
            Teste
          </Button>
        }
        errorMessage="Erro"
      />
      <DatePicker
        id="date-picker"
        label="Date picker"
        value={new Date()}
        icon={<User />}
        actions={
          <Button theme="link-primary" size="xs">
            Teste
          </Button>
        }
        errorMessage="Erro"
        disabled
      />
      <DatePicker
        id="date-picker"
        label="Date picker"
        icon={<User />}
        actions={
          <Button theme="link-primary" size="xs">
            Teste
          </Button>
        }
        errorMessage="Erro"
        disabled
        className="mb-16"
      />

      <DatePicker
        id="date-picker"
        value={new Date()}
        label="Date picker"
        icon={<User />}
        actions={
          <Button theme="link-primary" size="xs">
            Teste
          </Button>
        }
        errorMessage="Erro"
        theme="gray"
      />
      <DatePicker
        id="date-picker"
        label="Date picker"
        icon={<User />}
        actions={
          <Button theme="link-primary" size="xs">
            Teste
          </Button>
        }
        errorMessage="Erro"
        theme="gray"
      />
      <DatePicker
        id="date-picker"
        label="Date picker"
        value={new Date()}
        icon={<User />}
        actions={
          <Button theme="link-primary" size="xs">
            Teste
          </Button>
        }
        errorMessage="Erro"
        disabled
        theme="gray"
      />
      <DatePicker
        id="date-picker"
        label="Date picker"
        icon={<User />}
        actions={
          <Button theme="link-primary" size="xs">
            Teste
          </Button>
        }
        errorMessage="Erro"
        theme="gray"
        disabled
        className="mb-16"
      />

      <DatePicker
        id="date-picker"
        value={new Date()}
        label="Date picker"
        icon={<User />}
        actions={
          <Button theme="link-primary" size="xs">
            Teste
          </Button>
        }
        errorMessage="Erro"
        theme="gray-primary"
      />
      <DatePicker
        id="date-picker"
        label="Date picker"
        icon={<User />}
        actions={
          <Button theme="link-primary" size="xs">
            Teste
          </Button>
        }
        errorMessage="Erro"
        theme="gray-primary"
      />
      <DatePicker
        id="date-picker"
        label="Date picker"
        value={new Date()}
        icon={<User />}
        actions={
          <Button theme="link-primary" size="xs">
            Teste
          </Button>
        }
        errorMessage="Erro"
        disabled
        theme="gray-primary"
      />
      <DatePicker
        id="date-picker"
        label="Date picker"
        icon={<User />}
        actions={
          <Button theme="link-primary" size="xs">
            Teste
          </Button>
        }
        errorMessage="Erro"
        theme="gray-primary"
        disabled
        className="mb-16"
      />

      <DatePicker
        id="date-picker"
        value={new Date()}
        label="Date picker"
        icon={<User />}
        actions={
          <Button theme="link-primary" size="xs">
            Teste
          </Button>
        }
        errorMessage="Erro"
        theme="noBorder"
      />
      <DatePicker
        id="date-picker"
        label="Date picker"
        icon={<User />}
        actions={
          <Button theme="link-primary" size="xs">
            Teste
          </Button>
        }
        errorMessage="Erro"
        theme="noBorder"
      />
      <DatePicker
        id="date-picker"
        label="Date picker"
        value={new Date()}
        icon={<User />}
        actions={
          <Button theme="link-primary" size="xs">
            Teste
          </Button>
        }
        errorMessage="Erro"
        disabled
        theme="noBorder"
      />
      <DatePicker
        id="date-picker"
        label="Date picker"
        icon={<User />}
        actions={
          <Button theme="link-primary" size="xs">
            Teste
          </Button>
        }
        errorMessage="Erro"
        theme="noBorder"
        disabled
        className="mb-16"
      />

      <DatePicker
        id="date-picker"
        value={new Date()}
        label="Date picker"
        icon={<User />}
        actions={
          <Button theme="link-primary" size="xs">
            Teste
          </Button>
        }
        errorMessage="Erro"
        theme="shadow"
      />
      <DatePicker
        id="date-picker"
        label="Date picker"
        icon={<User />}
        actions={
          <Button theme="link-primary" size="xs">
            Teste
          </Button>
        }
        errorMessage="Erro"
        theme="shadow"
      />
      <DatePicker
        id="date-picker"
        label="Date picker"
        value={new Date()}
        icon={<User />}
        actions={
          <Button theme="link-primary" size="xs">
            Teste
          </Button>
        }
        errorMessage="Erro"
        disabled
        theme="shadow"
      />
      <DatePicker
        id="date-picker"
        label="Date picker"
        icon={<User />}
        actions={
          <Button theme="link-primary" size="xs">
            Teste
          </Button>
        }
        errorMessage="Erro"
        theme="shadow"
        disabled
        className="mb-16"
      />

      <CopyToClipboard
        id="copy-1"
        successCopyMessage="Copiado!"
        textToCopy="Meu texto a ser copiado"
        className="mb-8"
      >
        <Button theme="primary-flat">Clique aqui</Button>
      </CopyToClipboard>

      <Alert
        title="Título do alerta"
        description="Descrição do alerta"
        icon={<User />}
        onClose={() => undefined}
        className="mb-8"
      >
        <Text size="lg">Warning</Text>
      </Alert>

      <Alert
        title="Título do alerta"
        description="Descrição do alerta"
        icon={<User />}
        onClose={() => undefined}
        theme="success"
        className="mb-8"
      >
        <Text size="lg">Success</Text>
      </Alert>

      <Alert
        title="Título do alerta"
        description="Descrição do alerta"
        icon={<User />}
        onClose={() => undefined}
        theme="failure"
        className="mb-8"
      >
        <Text size="lg">Failure</Text>
      </Alert>

      {circularProgressColors.map((item, index) => (
        <CircularProgress
          key={index}
          progress={45}
          color={item as keyof typeof CircularProgressColors}
          className="mb-8"
        >
          <Text size="lg" weight="semibold">
            45%
          </Text>
        </CircularProgress>
      ))}

      {progressBarColors.map((item, index) => (
        <ProgressBar
          key={index}
          progress={10}
          color={item as keyof typeof ProgressBarColors}
          className="mb-8"
        />
      ))}

      <Loader type="spin" className="mb-8" />
      <Loader type="spinDot" className="mb-8" />
      <Loader type="dot" className="mb-8" />
      <Loader type="line" className="mb-8" />
      <Loader type="shape" className="mb-8" />

      <Divider className="mb-8" />

      <Image
        alt="My image"
        placeholderIcon={<ImageIcon />}
        className="mb-8 w-32 h-32"
      />

      <Image alt="Hello World" src={HelloWorldTextImage} className="mb-8" />

      <Button
        className="mb-8"
        badge={
          <Tag theme="primary200" className="rounded-md">
            Opa
          </Tag>
        }
        onClick={() => console.log('Clicou')}
        leftIcon={<User />}
        rightIcon={<User />}
        roundButton
        fullWidth
        theme="primary"
      >
        Button
      </Button>
      <Button
        className="mb-8"
        badge={
          <Tag theme="primary200" className="rounded-md">
            Opa
          </Tag>
        }
        to="/documentation"
        leftIcon={<User />}
        rightIcon={<User />}
        roundButton
        fullWidth
      >
        Link
      </Button>
      <Button
        className="mb-8"
        badge={
          <Tag theme="primary200" className="rounded-md">
            Opa
          </Tag>
        }
        href="https://github.com/johnnyferreiradev/next-template"
        target="_blank"
        leftIcon={<User />}
        rightIcon={<User />}
        roundButton
        fullWidth
      >
        Git repo
      </Button>

      {buttonThemesArray.map((theme, index) => (
        <Button
          key={index}
          leftIcon={<User />}
          rightIcon={<User />}
          theme={theme as keyof typeof ButtonThemes}
        >
          Button {theme}
        </Button>
      ))}

      <Tooltip content="My message" id="tooltip-1" className="mb-8">
        Tooltip
      </Tooltip>

      {tagThemesArray.map((theme, index) => (
        <Tag
          className="mb-8"
          theme={theme as keyof typeof TagThemes}
          key={index}
        >
          Minha tag
        </Tag>
      ))}

      {/*
      <Range
        min={0}
        max={100}
        onChange={(values) => setValues(values)}
        values={values}
        type="large"
        icon={
          <Icon color="lightColor">
            <User />
          </Icon>
        }
        className="mb-8"
      /> */}

      <Icon color="primary200" className="mb-8">
        <User />
      </Icon>

      <Collapse
        collapseHeader="Opa"
        isOpen={checked}
        setIsOpen={() => setChecked(!checked)}
        className="mb-8"
      >
        Conteúdo
      </Collapse>

      <Checkbox
        checked={checked}
        onChange={() => {
          handleChangePrimaryColor();
          setChecked(!checked);

          if (theme == 'dark') {
            setTheme('light');
            return;
          }
          setTheme('dark');
        }}
        className="mb-8"
      >
        Checkbox - aqui vai um texto bem grande dentro do meu checkbox
      </Checkbox>
      <Checkbox className="mb-8" disabled>
        Checkbox
      </Checkbox>
      <Checkbox className="mb-8" checked disabled>
        Checkbox
      </Checkbox>

      <Radio
        checked={checked}
        onChange={() => setChecked(!checked)}
        className="mb-8"
      >
        Radio button
      </Radio>
      <Radio onChange={() => setChecked(!checked)} className="mb-8" disabled>
        Radio button
      </Radio>
      <Radio
        onChange={() => setChecked(!checked)}
        className="mb-8"
        checked
        disabled
      >
        Radio button
      </Radio>

      <SwitchButton id="switch" className="mb-8">
        Switch Button
      </SwitchButton>

      <Card className="p-2 mb-8" withBorder borderColor="darkColor">
        Card
      </Card>

      <Text size="2xl" element="h1" weight="bold">
        Hello World
      </Text>
      <Text
        size="2xl"
        element="h1"
        weight="bold"
        align="end"
        decoration="underline"
        transform="uppercase"
      >
        Hello World
      </Text>
      <Text>Colors</Text>

      {colorValueArray.map((color, index) => (
        <Text
          color={color as keyof typeof Colors}
          size="2xl"
          weight="bold"
          key={index}
        >
          aA
        </Text>
      ))}
    </main>
  );
}
