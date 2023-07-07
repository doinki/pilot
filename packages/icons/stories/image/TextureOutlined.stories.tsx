import type { Meta, StoryObj } from '@storybook/react';

import TextureOutlined from '../../lib/image/TextureOutlined';

const meta: Meta<typeof TextureOutlined> = {
  component: TextureOutlined,
  tags: ['autodocs'],
  title: 'image/TextureOutlined',
};

export default meta;
type Story = StoryObj<typeof TextureOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
