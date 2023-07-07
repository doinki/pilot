import type { Meta, StoryObj } from '@storybook/react';

import StopOutlined from '../../lib/av/StopOutlined';

const meta: Meta<typeof StopOutlined> = {
  component: StopOutlined,
  tags: ['autodocs'],
  title: 'av/StopOutlined',
};

export default meta;
type Story = StoryObj<typeof StopOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
