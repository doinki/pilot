import type { Meta, StoryObj } from '@storybook/react';

import SyncOutlined from '../../lib/notification/SyncOutlined';

const meta: Meta<typeof SyncOutlined> = {
  component: SyncOutlined,
  tags: ['autodocs'],
  title: 'notification/SyncOutlined',
};

export default meta;
type Story = StoryObj<typeof SyncOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
