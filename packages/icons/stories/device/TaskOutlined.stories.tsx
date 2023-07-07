import type { Meta, StoryObj } from '@storybook/react';

import TaskOutlined from '../../lib/device/TaskOutlined';

const meta: Meta<typeof TaskOutlined> = {
  component: TaskOutlined,
  tags: ['autodocs'],
  title: 'device/TaskOutlined',
};

export default meta;
type Story = StoryObj<typeof TaskOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
