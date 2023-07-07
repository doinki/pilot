import type { Meta, StoryObj } from '@storybook/react';

import AddAPhotoOutlined from '../../lib/image/AddAPhotoOutlined';

const meta: Meta<typeof AddAPhotoOutlined> = {
  component: AddAPhotoOutlined,
  tags: ['autodocs'],
  title: 'image/AddAPhotoOutlined',
};

export default meta;
type Story = StoryObj<typeof AddAPhotoOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
