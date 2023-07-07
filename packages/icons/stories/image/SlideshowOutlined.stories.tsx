import type { Meta, StoryObj } from '@storybook/react';

import SlideshowOutlined from '../../lib/image/SlideshowOutlined';

const meta: Meta<typeof SlideshowOutlined> = {
  component: SlideshowOutlined,
  tags: ['autodocs'],
  title: 'image/SlideshowOutlined',
};

export default meta;
type Story = StoryObj<typeof SlideshowOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
