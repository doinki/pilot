import type { Meta, StoryObj } from '@storybook/react';

import ScreenLockRotationOutlined from '../../lib/device/ScreenLockRotationOutlined';

const meta: Meta<typeof ScreenLockRotationOutlined> = {
  component: ScreenLockRotationOutlined,
  tags: ['autodocs'],
  title: 'device/ScreenLockRotationOutlined',
};

export default meta;
type Story = StoryObj<typeof ScreenLockRotationOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
