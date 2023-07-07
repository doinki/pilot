import type { Meta, StoryObj } from '@storybook/react';

import LocalLibraryOutlined from '../../lib/maps/LocalLibraryOutlined';

const meta: Meta<typeof LocalLibraryOutlined> = {
  component: LocalLibraryOutlined,
  tags: ['autodocs'],
  title: 'maps/LocalLibraryOutlined',
};

export default meta;
type Story = StoryObj<typeof LocalLibraryOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
