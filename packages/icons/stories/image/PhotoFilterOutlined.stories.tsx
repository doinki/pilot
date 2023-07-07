import type { Meta, StoryObj } from '@storybook/react';

import PhotoFilterOutlined from '../../lib/image/PhotoFilterOutlined';

const meta: Meta<typeof PhotoFilterOutlined> = {
  component: PhotoFilterOutlined,
  tags: ['autodocs'],
  title: 'image/PhotoFilterOutlined',
};

export default meta;
type Story = StoryObj<typeof PhotoFilterOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
