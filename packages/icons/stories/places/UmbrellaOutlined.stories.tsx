import type { Meta, StoryObj } from '@storybook/react';

import UmbrellaOutlined from '../../lib/places/UmbrellaOutlined';

const meta: Meta<typeof UmbrellaOutlined> = {
  component: UmbrellaOutlined,
  tags: ['autodocs'],
  title: 'places/UmbrellaOutlined',
};

export default meta;
type Story = StoryObj<typeof UmbrellaOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
