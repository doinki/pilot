import type { Meta, StoryObj } from '@storybook/react';

import GrassOutlined from '../../lib/places/GrassOutlined';

const meta: Meta<typeof GrassOutlined> = {
  component: GrassOutlined,
  tags: ['autodocs'],
  title: 'places/GrassOutlined',
};

export default meta;
type Story = StoryObj<typeof GrassOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
