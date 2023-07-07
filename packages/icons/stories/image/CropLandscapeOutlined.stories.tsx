import type { Meta, StoryObj } from '@storybook/react';

import CropLandscapeOutlined from '../../lib/image/CropLandscapeOutlined';

const meta: Meta<typeof CropLandscapeOutlined> = {
  component: CropLandscapeOutlined,
  tags: ['autodocs'],
  title: 'image/CropLandscapeOutlined',
};

export default meta;
type Story = StoryObj<typeof CropLandscapeOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
