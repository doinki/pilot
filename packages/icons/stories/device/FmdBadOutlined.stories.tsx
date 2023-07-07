import type { Meta, StoryObj } from '@storybook/react';

import FmdBadOutlined from '../../lib/device/FmdBadOutlined';

const meta: Meta<typeof FmdBadOutlined> = {
  component: FmdBadOutlined,
  tags: ['autodocs'],
  title: 'device/FmdBadOutlined',
};

export default meta;
type Story = StoryObj<typeof FmdBadOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
