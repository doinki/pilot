import type { Meta, StoryObj } from '@storybook/react';

import ForestOutlined from '../../lib/maps/ForestOutlined';

const meta: Meta<typeof ForestOutlined> = {
  component: ForestOutlined,
  tags: ['autodocs'],
  title: 'maps/ForestOutlined',
};

export default meta;
type Story = StoryObj<typeof ForestOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
