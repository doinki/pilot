import type { Meta, StoryObj } from '@storybook/react';

import GppMaybeOutlined from '../../lib/device/GppMaybeOutlined';

const meta: Meta<typeof GppMaybeOutlined> = {
  component: GppMaybeOutlined,
  tags: ['autodocs'],
  title: 'device/GppMaybeOutlined',
};

export default meta;
type Story = StoryObj<typeof GppMaybeOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
