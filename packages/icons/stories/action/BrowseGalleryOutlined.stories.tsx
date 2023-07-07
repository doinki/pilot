import type { Meta, StoryObj } from '@storybook/react';

import BrowseGalleryOutlined from '../../lib/action/BrowseGalleryOutlined';

const meta: Meta<typeof BrowseGalleryOutlined> = {
  component: BrowseGalleryOutlined,
  tags: ['autodocs'],
  title: 'action/BrowseGalleryOutlined',
};

export default meta;
type Story = StoryObj<typeof BrowseGalleryOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
