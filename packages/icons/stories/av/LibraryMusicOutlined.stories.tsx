import type { Meta, StoryObj } from '@storybook/react';

import LibraryMusicOutlined from '../../lib/av/LibraryMusicOutlined';

const meta: Meta<typeof LibraryMusicOutlined> = {
  component: LibraryMusicOutlined,
  tags: ['autodocs'],
  title: 'av/LibraryMusicOutlined',
};

export default meta;
type Story = StoryObj<typeof LibraryMusicOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
