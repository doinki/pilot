import type { Meta, StoryObj } from '@storybook/react';

import TaskAltOutlined from '../../lib/action/TaskAltOutlined';

const meta: Meta<typeof TaskAltOutlined> = {
  component: TaskAltOutlined,
  tags: ['autodocs'],
  title: 'action/TaskAltOutlined',
};

export default meta;
type Story = StoryObj<typeof TaskAltOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
