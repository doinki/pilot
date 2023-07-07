import type { Meta, StoryObj } from '@storybook/react';

import AssignmentLateOutlined from '../../lib/action/AssignmentLateOutlined';

const meta: Meta<typeof AssignmentLateOutlined> = {
  component: AssignmentLateOutlined,
  tags: ['autodocs'],
  title: 'action/AssignmentLateOutlined',
};

export default meta;
type Story = StoryObj<typeof AssignmentLateOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
