import type { Meta, StoryObj } from '@storybook/react';

import InsertPhotoOutlined from '../../lib/editor/InsertPhotoOutlined';

const meta: Meta<typeof InsertPhotoOutlined> = {
  component: InsertPhotoOutlined,
  tags: ['autodocs'],
  title: 'editor/InsertPhotoOutlined',
};

export default meta;
type Story = StoryObj<typeof InsertPhotoOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
