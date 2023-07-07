import type { Meta, StoryObj } from '@storybook/react';

import ScreenLockPortraitOutlined from '../../lib/device/ScreenLockPortraitOutlined';

const meta: Meta<typeof ScreenLockPortraitOutlined> = {
  component: ScreenLockPortraitOutlined,
  tags: ['autodocs'],
  title: 'device/ScreenLockPortraitOutlined',
};

export default meta;
type Story = StoryObj<typeof ScreenLockPortraitOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
