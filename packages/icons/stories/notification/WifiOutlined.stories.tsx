import type { Meta, StoryObj } from '@storybook/react';

import WifiOutlined from '../../lib/notification/WifiOutlined';

const meta: Meta<typeof WifiOutlined> = {
  component: WifiOutlined,
  tags: ['autodocs'],
  title: 'notification/WifiOutlined',
};

export default meta;
type Story = StoryObj<typeof WifiOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
