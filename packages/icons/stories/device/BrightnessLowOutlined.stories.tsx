import type { Meta, StoryObj } from '@storybook/react';

import BrightnessLowOutlined from '../../lib/device/BrightnessLowOutlined';

const meta: Meta<typeof BrightnessLowOutlined> = {
  component: BrightnessLowOutlined,
  tags: ['autodocs'],
  title: 'device/BrightnessLowOutlined',
};

export default meta;
type Story = StoryObj<typeof BrightnessLowOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
