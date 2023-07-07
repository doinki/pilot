import type { Meta, StoryObj } from '@storybook/react';

import BrandingWatermarkOutlined from '../../lib/av/BrandingWatermarkOutlined';

const meta: Meta<typeof BrandingWatermarkOutlined> = {
  component: BrandingWatermarkOutlined,
  tags: ['autodocs'],
  title: 'av/BrandingWatermarkOutlined',
};

export default meta;
type Story = StoryObj<typeof BrandingWatermarkOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
