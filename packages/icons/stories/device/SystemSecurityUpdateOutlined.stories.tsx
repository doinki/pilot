import type { Meta, StoryObj } from '@storybook/react';

import SystemSecurityUpdateOutlined from '../../lib/device/SystemSecurityUpdateOutlined';

const meta: Meta<typeof SystemSecurityUpdateOutlined> = {
  component: SystemSecurityUpdateOutlined,
  tags: ['autodocs'],
  title: 'device/SystemSecurityUpdateOutlined',
};

export default meta;
type Story = StoryObj<typeof SystemSecurityUpdateOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
