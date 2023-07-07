import type { Meta, StoryObj } from '@storybook/react';

import DesktopWindowsOutlined from '../../lib/hardware/DesktopWindowsOutlined';

const meta: Meta<typeof DesktopWindowsOutlined> = {
  component: DesktopWindowsOutlined,
  tags: ['autodocs'],
  title: 'hardware/DesktopWindowsOutlined',
};

export default meta;
type Story = StoryObj<typeof DesktopWindowsOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
