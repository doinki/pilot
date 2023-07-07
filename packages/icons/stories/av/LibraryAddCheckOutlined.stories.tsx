import type { Meta, StoryObj } from '@storybook/react';

import LibraryAddCheckOutlined from '../../lib/av/LibraryAddCheckOutlined';

const meta: Meta<typeof LibraryAddCheckOutlined> = {
  component: LibraryAddCheckOutlined,
  tags: ['autodocs'],
  title: 'av/LibraryAddCheckOutlined',
};

export default meta;
type Story = StoryObj<typeof LibraryAddCheckOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
