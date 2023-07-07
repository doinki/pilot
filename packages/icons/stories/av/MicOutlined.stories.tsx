import type { Meta, StoryObj } from '@storybook/react';

import MicOutlined from '../../lib/av/MicOutlined';

const meta: Meta<typeof MicOutlined> = {
  component: MicOutlined,
  tags: ['autodocs'],
  title: 'av/MicOutlined',
};

export default meta;
type Story = StoryObj<typeof MicOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
