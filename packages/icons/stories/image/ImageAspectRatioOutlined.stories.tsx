import type { Meta, StoryObj } from '@storybook/react';

import ImageAspectRatioOutlined from '../../lib/image/ImageAspectRatioOutlined';

const meta: Meta<typeof ImageAspectRatioOutlined> = {
  component: ImageAspectRatioOutlined,
  tags: ['autodocs'],
  title: 'image/ImageAspectRatioOutlined',
};

export default meta;
type Story = StoryObj<typeof ImageAspectRatioOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
