import type { Meta, StoryObj } from '@storybook/react';

import AssignmentTurnedInOutlined from '../../lib/action/AssignmentTurnedInOutlined';

const meta: Meta<typeof AssignmentTurnedInOutlined> = {
  component: AssignmentTurnedInOutlined,
  tags: ['autodocs'],
  title: 'action/AssignmentTurnedInOutlined',
};

export default meta;
type Story = StoryObj<typeof AssignmentTurnedInOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
