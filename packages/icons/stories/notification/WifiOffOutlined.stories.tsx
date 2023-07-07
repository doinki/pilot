import type { Meta, StoryObj } from '@storybook/react';

import WifiOffOutlined from '../../lib/notification/WifiOffOutlined';

const meta: Meta<typeof WifiOffOutlined> = {
  component: WifiOffOutlined,
  tags: ['autodocs'],
  title: 'notification/WifiOffOutlined',
};

export default meta;
type Story = StoryObj<typeof WifiOffOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
