import type { Meta, StoryObj } from '@storybook/react';

import InstallDesktopOutlined from '../../lib/action/InstallDesktopOutlined';

const meta: Meta<typeof InstallDesktopOutlined> = {
  component: InstallDesktopOutlined,
  tags: ['autodocs'],
  title: 'action/InstallDesktopOutlined',
};

export default meta;
type Story = StoryObj<typeof InstallDesktopOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
