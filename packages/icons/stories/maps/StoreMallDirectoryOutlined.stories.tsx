import type { Meta, StoryObj } from '@storybook/react';

import StoreMallDirectoryOutlined from '../../lib/maps/StoreMallDirectoryOutlined';

const meta: Meta<typeof StoreMallDirectoryOutlined> = {
  component: StoreMallDirectoryOutlined,
  tags: ['autodocs'],
  title: 'maps/StoreMallDirectoryOutlined',
};

export default meta;
type Story = StoryObj<typeof StoreMallDirectoryOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
