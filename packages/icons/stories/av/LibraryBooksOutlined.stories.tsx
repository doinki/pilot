import type { Meta, StoryObj } from '@storybook/react';

import LibraryBooksOutlined from '../../lib/av/LibraryBooksOutlined';

const meta: Meta<typeof LibraryBooksOutlined> = {
  component: LibraryBooksOutlined,
  tags: ['autodocs'],
  title: 'av/LibraryBooksOutlined',
};

export default meta;
type Story = StoryObj<typeof LibraryBooksOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
