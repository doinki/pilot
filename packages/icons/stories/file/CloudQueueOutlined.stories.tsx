import type { Meta, StoryObj } from '@storybook/react';

import CloudQueueOutlined from '../../lib/file/CloudQueueOutlined';

const meta: Meta<typeof CloudQueueOutlined> = {
  component: CloudQueueOutlined,
  tags: ['autodocs'],
  title: 'file/CloudQueueOutlined',
};

export default meta;
type Story = StoryObj<typeof CloudQueueOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
