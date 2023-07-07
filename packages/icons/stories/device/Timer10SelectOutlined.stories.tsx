import type { Meta, StoryObj } from '@storybook/react';

import Timer10SelectOutlined from '../../lib/device/Timer10SelectOutlined';

const meta: Meta<typeof Timer10SelectOutlined> = {
  component: Timer10SelectOutlined,
  tags: ['autodocs'],
  title: 'device/Timer10SelectOutlined',
};

export default meta;
type Story = StoryObj<typeof Timer10SelectOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
