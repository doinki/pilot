import type { Meta, StoryObj } from '@storybook/react';

import SplitscreenOutlined from '../../lib/device/SplitscreenOutlined';

const meta: Meta<typeof SplitscreenOutlined> = {
  component: SplitscreenOutlined,
  tags: ['autodocs'],
  title: 'device/SplitscreenOutlined',
};

export default meta;
type Story = StoryObj<typeof SplitscreenOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
