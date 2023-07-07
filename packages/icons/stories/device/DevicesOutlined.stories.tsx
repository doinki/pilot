import type { Meta, StoryObj } from '@storybook/react';

import DevicesOutlined from '../../lib/device/DevicesOutlined';

const meta: Meta<typeof DevicesOutlined> = {
  component: DevicesOutlined,
  tags: ['autodocs'],
  title: 'device/DevicesOutlined',
};

export default meta;
type Story = StoryObj<typeof DevicesOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
