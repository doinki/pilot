import type { Meta, StoryObj } from '@storybook/react';

import BrightnessAutoOutlined from '../../lib/device/BrightnessAutoOutlined';

const meta: Meta<typeof BrightnessAutoOutlined> = {
  component: BrightnessAutoOutlined,
  tags: ['autodocs'],
  title: 'device/BrightnessAutoOutlined',
};

export default meta;
type Story = StoryObj<typeof BrightnessAutoOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
