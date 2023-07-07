import type { Meta, StoryObj } from '@storybook/react';

import StopCircleOutlined from '../../lib/av/StopCircleOutlined';

const meta: Meta<typeof StopCircleOutlined> = {
  component: StopCircleOutlined,
  tags: ['autodocs'],
  title: 'av/StopCircleOutlined',
};

export default meta;
type Story = StoryObj<typeof StopCircleOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
