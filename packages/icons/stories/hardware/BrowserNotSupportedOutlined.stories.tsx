import type { Meta, StoryObj } from '@storybook/react';

import BrowserNotSupportedOutlined from '../../lib/hardware/BrowserNotSupportedOutlined';

const meta: Meta<typeof BrowserNotSupportedOutlined> = {
  component: BrowserNotSupportedOutlined,
  tags: ['autodocs'],
  title: 'hardware/BrowserNotSupportedOutlined',
};

export default meta;
type Story = StoryObj<typeof BrowserNotSupportedOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
