import type { Meta, StoryObj } from '@storybook/react';

import PanoramaFishEyeOutlined from '../../lib/image/PanoramaFishEyeOutlined';

const meta: Meta<typeof PanoramaFishEyeOutlined> = {
  component: PanoramaFishEyeOutlined,
  tags: ['autodocs'],
  title: 'image/PanoramaFishEyeOutlined',
};

export default meta;
type Story = StoryObj<typeof PanoramaFishEyeOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
