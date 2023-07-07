import type { Meta, StoryObj } from '@storybook/react';

import AssignmentIndOutlined from '../../lib/action/AssignmentIndOutlined';

const meta: Meta<typeof AssignmentIndOutlined> = {
  component: AssignmentIndOutlined,
  tags: ['autodocs'],
  title: 'action/AssignmentIndOutlined',
};

export default meta;
type Story = StoryObj<typeof AssignmentIndOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
