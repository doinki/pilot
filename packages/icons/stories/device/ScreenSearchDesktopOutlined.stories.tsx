import type { Meta, StoryObj } from '@storybook/react';

import ScreenSearchDesktopOutlined from '../../lib/device/ScreenSearchDesktopOutlined';

const meta: Meta<typeof ScreenSearchDesktopOutlined> = {
  component: ScreenSearchDesktopOutlined,
  tags: ['autodocs'],
  title: 'device/ScreenSearchDesktopOutlined',
};

export default meta;
type Story = StoryObj<typeof ScreenSearchDesktopOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
