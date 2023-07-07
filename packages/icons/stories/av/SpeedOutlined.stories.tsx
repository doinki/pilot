import type { Meta, StoryObj } from '@storybook/react';

import SpeedOutlined from '../../lib/av/SpeedOutlined';

const meta: Meta<typeof SpeedOutlined> = {
  component: SpeedOutlined,
  tags: ['autodocs'],
  title: 'av/SpeedOutlined',
};

export default meta;
type Story = StoryObj<typeof SpeedOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
