import type { Meta, StoryObj } from '@storybook/react';

import AddTaskOutlined from '../../lib/action/AddTaskOutlined';

const meta: Meta<typeof AddTaskOutlined> = {
  component: AddTaskOutlined,
  tags: ['autodocs'],
  title: 'action/AddTaskOutlined',
};

export default meta;
type Story = StoryObj<typeof AddTaskOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
