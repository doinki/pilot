import type { Meta, StoryObj } from '@storybook/react';

import SyncProblemOutlined from '../../lib/notification/SyncProblemOutlined';

const meta: Meta<typeof SyncProblemOutlined> = {
  component: SyncProblemOutlined,
  tags: ['autodocs'],
  title: 'notification/SyncProblemOutlined',
};

export default meta;
type Story = StoryObj<typeof SyncProblemOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
