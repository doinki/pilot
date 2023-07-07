import type { Meta, StoryObj } from '@storybook/react';

import AddToPhotosOutlined from '../../lib/image/AddToPhotosOutlined';

const meta: Meta<typeof AddToPhotosOutlined> = {
  component: AddToPhotosOutlined,
  tags: ['autodocs'],
  title: 'image/AddToPhotosOutlined',
};

export default meta;
type Story = StoryObj<typeof AddToPhotosOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
