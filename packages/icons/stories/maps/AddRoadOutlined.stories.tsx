import type { Meta, StoryObj } from '@storybook/react';

import AddRoadOutlined from '../../lib/maps/AddRoadOutlined';

const meta: Meta<typeof AddRoadOutlined> = {
  component: AddRoadOutlined,
  tags: ['autodocs'],
  title: 'maps/AddRoadOutlined',
};

export default meta;
type Story = StoryObj<typeof AddRoadOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
