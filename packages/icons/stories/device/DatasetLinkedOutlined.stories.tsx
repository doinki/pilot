import type { Meta, StoryObj } from '@storybook/react';

import DatasetLinkedOutlined from '../../lib/device/DatasetLinkedOutlined';

const meta: Meta<typeof DatasetLinkedOutlined> = {
  component: DatasetLinkedOutlined,
  tags: ['autodocs'],
  title: 'device/DatasetLinkedOutlined',
};

export default meta;
type Story = StoryObj<typeof DatasetLinkedOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
