import type { Meta, StoryObj } from '@storybook/react';

import ScreenshotMonitorOutlined from '../../lib/device/ScreenshotMonitorOutlined';

const meta: Meta<typeof ScreenshotMonitorOutlined> = {
  component: ScreenshotMonitorOutlined,
  tags: ['autodocs'],
  title: 'device/ScreenshotMonitorOutlined',
};

export default meta;
type Story = StoryObj<typeof ScreenshotMonitorOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
