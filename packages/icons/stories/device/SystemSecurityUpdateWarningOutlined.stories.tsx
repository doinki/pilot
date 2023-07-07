import type { Meta, StoryObj } from '@storybook/react';

import SystemSecurityUpdateWarningOutlined from '../../lib/device/SystemSecurityUpdateWarningOutlined';

const meta: Meta<typeof SystemSecurityUpdateWarningOutlined> = {
  component: SystemSecurityUpdateWarningOutlined,
  tags: ['autodocs'],
  title: 'device/SystemSecurityUpdateWarningOutlined',
};

export default meta;
type Story = StoryObj<typeof SystemSecurityUpdateWarningOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
