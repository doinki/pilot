import type { Meta, StoryObj } from '@storybook/react';

import HotTubOutlined from '../../lib/places/HotTubOutlined';

const meta: Meta<typeof HotTubOutlined> = {
  component: HotTubOutlined,
  tags: ['autodocs'],
  title: 'places/HotTubOutlined',
};

export default meta;
type Story = StoryObj<typeof HotTubOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
