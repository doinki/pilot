import type { Meta, StoryObj } from '@storybook/react';

import NorthWestOutlined from '../../lib/navigation/NorthWestOutlined';

const meta: Meta<typeof NorthWestOutlined> = {
  component: NorthWestOutlined,
  tags: ['autodocs'],
  title: 'navigation/NorthWestOutlined',
};

export default meta;
type Story = StoryObj<typeof NorthWestOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
