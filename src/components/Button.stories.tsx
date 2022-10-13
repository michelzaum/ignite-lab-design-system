import { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonProps } from './Button';

// Configurações globais para todas as variações.
export default {
  title: 'Components/Button',
  component: Button,
  args: {
    children: 'Create account',
  },
  argTypes: {},
} as Meta<ButtonProps>;

// Diferentes configurações por variação de cada componente.
export const Default: StoryObj<ButtonProps> = {};
