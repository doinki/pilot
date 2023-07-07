import type { Meta, StoryObj } from '@storybook/react';

import MicOffOutlined from '../../lib/av/MicOffOutlined';

const meta: Meta<typeof MicOffOutlined> = {
  component: MicOffOutlined,
  tags: ['autodocs'],
  title: 'av/MicOffOutlined',
};

export default meta;
type Story = StoryObj<typeof MicOffOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
