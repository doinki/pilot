import type { Meta, StoryObj } from '@storybook/react';

import AccessTimeOutlined from '../../lib/device/AccessTimeOutlined';

const meta: Meta<typeof AccessTimeOutlined> = {
  component: AccessTimeOutlined,
  tags: ['autodocs'],
  title: 'device/AccessTimeOutlined',
};

export default meta;
type Story = StoryObj<typeof AccessTimeOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
