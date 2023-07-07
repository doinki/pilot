import type { Meta, StoryObj } from '@storybook/react';

import RoundaboutLeftOutlined from '../../lib/maps/RoundaboutLeftOutlined';

const meta: Meta<typeof RoundaboutLeftOutlined> = {
  component: RoundaboutLeftOutlined,
  tags: ['autodocs'],
  title: 'maps/RoundaboutLeftOutlined',
};

export default meta;
type Story = StoryObj<typeof RoundaboutLeftOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
