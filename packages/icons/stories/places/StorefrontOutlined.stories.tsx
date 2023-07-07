import type { Meta, StoryObj } from '@storybook/react';

import StorefrontOutlined from '../../lib/places/StorefrontOutlined';

const meta: Meta<typeof StorefrontOutlined> = {
  component: StorefrontOutlined,
  tags: ['autodocs'],
  title: 'places/StorefrontOutlined',
};

export default meta;
type Story = StoryObj<typeof StorefrontOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
