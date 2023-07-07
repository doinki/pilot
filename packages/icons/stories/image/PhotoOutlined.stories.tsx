import type { Meta, StoryObj } from '@storybook/react';

import PhotoOutlined from '../../lib/image/PhotoOutlined';

const meta: Meta<typeof PhotoOutlined> = {
  component: PhotoOutlined,
  tags: ['autodocs'],
  title: 'image/PhotoOutlined',
};

export default meta;
type Story = StoryObj<typeof PhotoOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
