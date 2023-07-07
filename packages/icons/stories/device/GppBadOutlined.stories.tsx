import type { Meta, StoryObj } from '@storybook/react';

import GppBadOutlined from '../../lib/device/GppBadOutlined';

const meta: Meta<typeof GppBadOutlined> = {
  component: GppBadOutlined,
  tags: ['autodocs'],
  title: 'device/GppBadOutlined',
};

export default meta;
type Story = StoryObj<typeof GppBadOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
