import type { Meta, StoryObj } from '@storybook/react';

import DatasetOutlined from '../../lib/device/DatasetOutlined';

const meta: Meta<typeof DatasetOutlined> = {
  component: DatasetOutlined,
  tags: ['autodocs'],
  title: 'device/DatasetOutlined',
};

export default meta;
type Story = StoryObj<typeof DatasetOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
