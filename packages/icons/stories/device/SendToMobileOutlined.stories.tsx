import type { Meta, StoryObj } from '@storybook/react';

import SendToMobileOutlined from '../../lib/device/SendToMobileOutlined';

const meta: Meta<typeof SendToMobileOutlined> = {
  component: SendToMobileOutlined,
  tags: ['autodocs'],
  title: 'device/SendToMobileOutlined',
};

export default meta;
type Story = StoryObj<typeof SendToMobileOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
