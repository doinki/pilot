import type { Meta, StoryObj } from '@storybook/react';

import PendingActionsOutlined from '../../lib/action/PendingActionsOutlined';

const meta: Meta<typeof PendingActionsOutlined> = {
  component: PendingActionsOutlined,
  tags: ['autodocs'],
  title: 'action/PendingActionsOutlined',
};

export default meta;
type Story = StoryObj<typeof PendingActionsOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
