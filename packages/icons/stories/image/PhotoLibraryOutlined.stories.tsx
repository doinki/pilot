import type { Meta, StoryObj } from '@storybook/react';

import PhotoLibraryOutlined from '../../lib/image/PhotoLibraryOutlined';

const meta: Meta<typeof PhotoLibraryOutlined> = {
  component: PhotoLibraryOutlined,
  tags: ['autodocs'],
  title: 'image/PhotoLibraryOutlined',
};

export default meta;
type Story = StoryObj<typeof PhotoLibraryOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
