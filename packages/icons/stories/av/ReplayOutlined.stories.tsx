import type { Meta, StoryObj } from '@storybook/react';

import ReplayOutlined from '../../lib/av/ReplayOutlined';

const meta: Meta<typeof ReplayOutlined> = {
  component: ReplayOutlined,
  tags: ['autodocs'],
  title: 'av/ReplayOutlined',
};

export default meta;
type Story = StoryObj<typeof ReplayOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
