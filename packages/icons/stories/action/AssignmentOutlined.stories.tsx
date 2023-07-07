import type { Meta, StoryObj } from '@storybook/react';

import AssignmentOutlined from '../../lib/action/AssignmentOutlined';

const meta: Meta<typeof AssignmentOutlined> = {
  component: AssignmentOutlined,
  tags: ['autodocs'],
  title: 'action/AssignmentOutlined',
};

export default meta;
type Story = StoryObj<typeof AssignmentOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
