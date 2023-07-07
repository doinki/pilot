import type { Meta, StoryObj } from '@storybook/react';

import FastForwardOutlined from '../../lib/av/FastForwardOutlined';

const meta: Meta<typeof FastForwardOutlined> = {
  component: FastForwardOutlined,
  tags: ['autodocs'],
  title: 'av/FastForwardOutlined',
};

export default meta;
type Story = StoryObj<typeof FastForwardOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
