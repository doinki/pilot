import type { Meta, StoryObj } from '@storybook/react';

import FastRewindOutlined from '../../lib/av/FastRewindOutlined';

const meta: Meta<typeof FastRewindOutlined> = {
  component: FastRewindOutlined,
  tags: ['autodocs'],
  title: 'av/FastRewindOutlined',
};

export default meta;
type Story = StoryObj<typeof FastRewindOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
