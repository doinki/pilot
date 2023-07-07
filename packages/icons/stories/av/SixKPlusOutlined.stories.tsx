import type { Meta, StoryObj } from '@storybook/react';

import SixKPlusOutlined from '../../lib/av/SixKPlusOutlined';

const meta: Meta<typeof SixKPlusOutlined> = {
  component: SixKPlusOutlined,
  tags: ['autodocs'],
  title: 'av/SixKPlusOutlined',
};

export default meta;
type Story = StoryObj<typeof SixKPlusOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
