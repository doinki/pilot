import type { Meta, StoryObj } from '@storybook/react';

import LibraryAddOutlined from '../../lib/av/LibraryAddOutlined';

const meta: Meta<typeof LibraryAddOutlined> = {
  component: LibraryAddOutlined,
  tags: ['autodocs'],
  title: 'av/LibraryAddOutlined',
};

export default meta;
type Story = StoryObj<typeof LibraryAddOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
