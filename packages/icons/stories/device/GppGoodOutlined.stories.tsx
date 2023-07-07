import type { Meta, StoryObj } from '@storybook/react';

import GppGoodOutlined from '../../lib/device/GppGoodOutlined';

const meta: Meta<typeof GppGoodOutlined> = {
  component: GppGoodOutlined,
  tags: ['autodocs'],
  title: 'device/GppGoodOutlined',
};

export default meta;
type Story = StoryObj<typeof GppGoodOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
