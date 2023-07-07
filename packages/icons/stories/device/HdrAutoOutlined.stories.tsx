import type { Meta, StoryObj } from '@storybook/react';

import HdrAutoOutlined from '../../lib/device/HdrAutoOutlined';

const meta: Meta<typeof HdrAutoOutlined> = {
  component: HdrAutoOutlined,
  tags: ['autodocs'],
  title: 'device/HdrAutoOutlined',
};

export default meta;
type Story = StoryObj<typeof HdrAutoOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
