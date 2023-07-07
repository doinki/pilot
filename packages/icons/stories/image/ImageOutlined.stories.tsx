import type { Meta, StoryObj } from '@storybook/react';

import ImageOutlined from '../../lib/image/ImageOutlined';

const meta: Meta<typeof ImageOutlined> = {
  component: ImageOutlined,
  tags: ['autodocs'],
  title: 'image/ImageOutlined',
};

export default meta;
type Story = StoryObj<typeof ImageOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
