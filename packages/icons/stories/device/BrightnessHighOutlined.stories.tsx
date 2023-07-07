import type { Meta, StoryObj } from '@storybook/react';

import BrightnessHighOutlined from '../../lib/device/BrightnessHighOutlined';

const meta: Meta<typeof BrightnessHighOutlined> = {
  component: BrightnessHighOutlined,
  tags: ['autodocs'],
  title: 'device/BrightnessHighOutlined',
};

export default meta;
type Story = StoryObj<typeof BrightnessHighOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
