import type { Meta, StoryObj } from '@storybook/react';

import RemoveRoadOutlined from '../../lib/maps/RemoveRoadOutlined';

const meta: Meta<typeof RemoveRoadOutlined> = {
  component: RemoveRoadOutlined,
  tags: ['autodocs'],
  title: 'maps/RemoveRoadOutlined',
};

export default meta;
type Story = StoryObj<typeof RemoveRoadOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
