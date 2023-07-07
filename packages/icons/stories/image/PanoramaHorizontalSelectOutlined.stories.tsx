import type { Meta, StoryObj } from '@storybook/react';

import PanoramaHorizontalSelectOutlined from '../../lib/image/PanoramaHorizontalSelectOutlined';

const meta: Meta<typeof PanoramaHorizontalSelectOutlined> = {
  component: PanoramaHorizontalSelectOutlined,
  tags: ['autodocs'],
  title: 'image/PanoramaHorizontalSelectOutlined',
};

export default meta;
type Story = StoryObj<typeof PanoramaHorizontalSelectOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
