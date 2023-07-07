import type { Meta, StoryObj } from '@storybook/react';

import SystemSecurityUpdateGoodOutlined from '../../lib/device/SystemSecurityUpdateGoodOutlined';

const meta: Meta<typeof SystemSecurityUpdateGoodOutlined> = {
  component: SystemSecurityUpdateGoodOutlined,
  tags: ['autodocs'],
  title: 'device/SystemSecurityUpdateGoodOutlined',
};

export default meta;
type Story = StoryObj<typeof SystemSecurityUpdateGoodOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
