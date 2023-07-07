import type { Meta, StoryObj } from '@storybook/react';

import AssignmentReturnOutlined from '../../lib/action/AssignmentReturnOutlined';

const meta: Meta<typeof AssignmentReturnOutlined> = {
  component: AssignmentReturnOutlined,
  tags: ['autodocs'],
  title: 'action/AssignmentReturnOutlined',
};

export default meta;
type Story = StoryObj<typeof AssignmentReturnOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
