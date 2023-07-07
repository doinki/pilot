import type { Meta, StoryObj } from '@storybook/react';

import ScreenLockLandscapeOutlined from '../../lib/device/ScreenLockLandscapeOutlined';

const meta: Meta<typeof ScreenLockLandscapeOutlined> = {
  component: ScreenLockLandscapeOutlined,
  tags: ['autodocs'],
  title: 'device/ScreenLockLandscapeOutlined',
};

export default meta;
type Story = StoryObj<typeof ScreenLockLandscapeOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
