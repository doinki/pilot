import type { Meta, StoryObj } from '@storybook/react';

import WifiCallingOutlined from '../../lib/communication/WifiCallingOutlined';

const meta: Meta<typeof WifiCallingOutlined> = {
  component: WifiCallingOutlined,
  tags: ['autodocs'],
  title: 'communication/WifiCallingOutlined',
};

export default meta;
type Story = StoryObj<typeof WifiCallingOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
