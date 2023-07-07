import type { Meta, StoryObj } from '@storybook/react';

import ImageSearchOutlined from '../../lib/image/ImageSearchOutlined';

const meta: Meta<typeof ImageSearchOutlined> = {
  component: ImageSearchOutlined,
  tags: ['autodocs'],
  title: 'image/ImageSearchOutlined',
};

export default meta;
type Story = StoryObj<typeof ImageSearchOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
