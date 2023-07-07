import type { Meta, StoryObj } from '@storybook/react';

import CloudSyncOutlined from '../../lib/file/CloudSyncOutlined';

const meta: Meta<typeof CloudSyncOutlined> = {
  component: CloudSyncOutlined,
  tags: ['autodocs'],
  title: 'file/CloudSyncOutlined',
};

export default meta;
type Story = StoryObj<typeof CloudSyncOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
