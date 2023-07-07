import type { Meta, StoryObj } from '@storybook/react';

import AddPhotoAlternateOutlined from '../../lib/image/AddPhotoAlternateOutlined';

const meta: Meta<typeof AddPhotoAlternateOutlined> = {
  component: AddPhotoAlternateOutlined,
  tags: ['autodocs'],
  title: 'image/AddPhotoAlternateOutlined',
};

export default meta;
type Story = StoryObj<typeof AddPhotoAlternateOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
