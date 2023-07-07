import type { Meta, StoryObj } from '@storybook/react';

import TerrainOutlined from '../../lib/maps/TerrainOutlined';

const meta: Meta<typeof TerrainOutlined> = {
  component: TerrainOutlined,
  tags: ['autodocs'],
  title: 'maps/TerrainOutlined',
};

export default meta;
type Story = StoryObj<typeof TerrainOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
