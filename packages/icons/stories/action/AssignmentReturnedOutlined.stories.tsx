import type { Meta, StoryObj } from '@storybook/react';

import AssignmentReturnedOutlined from '../../lib/action/AssignmentReturnedOutlined';

const meta: Meta<typeof AssignmentReturnedOutlined> = {
  component: AssignmentReturnedOutlined,
  tags: ['autodocs'],
  title: 'action/AssignmentReturnedOutlined',
};

export default meta;
type Story = StoryObj<typeof AssignmentReturnedOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
