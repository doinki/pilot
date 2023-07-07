import type { Meta, StoryObj } from '@storybook/react';

import ScreenshotOutlined from '../../lib/device/ScreenshotOutlined';

const meta: Meta<typeof ScreenshotOutlined> = {
  component: ScreenshotOutlined,
  tags: ['autodocs'],
  title: 'device/ScreenshotOutlined',
};

export default meta;
type Story = StoryObj<typeof ScreenshotOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
