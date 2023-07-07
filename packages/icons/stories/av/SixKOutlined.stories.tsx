import type { Meta, StoryObj } from '@storybook/react';

import SixKOutlined from '../../lib/av/SixKOutlined';

const meta: Meta<typeof SixKOutlined> = {
  component: SixKOutlined,
  tags: ['autodocs'],
  title: 'av/SixKOutlined',
};

export default meta;
type Story = StoryObj<typeof SixKOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
