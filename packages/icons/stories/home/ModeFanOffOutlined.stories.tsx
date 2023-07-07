import type { Meta, StoryObj } from '@storybook/react';

import ModeFanOffOutlined from '../../lib/home/ModeFanOffOutlined';

const meta: Meta<typeof ModeFanOffOutlined> = {
  component: ModeFanOffOutlined,
  tags: ['autodocs'],
  title: 'home/ModeFanOffOutlined',
};

export default meta;
type Story = StoryObj<typeof ModeFanOffOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
