import type { Meta, StoryObj } from '@storybook/react';

import DesktopMacOutlined from '../../lib/hardware/DesktopMacOutlined';

const meta: Meta<typeof DesktopMacOutlined> = {
  component: DesktopMacOutlined,
  tags: ['autodocs'],
  title: 'hardware/DesktopMacOutlined',
};

export default meta;
type Story = StoryObj<typeof DesktopMacOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
