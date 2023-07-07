import type { Meta, StoryObj } from '@storybook/react';

import EditRoadOutlined from '../../lib/maps/EditRoadOutlined';

const meta: Meta<typeof EditRoadOutlined> = {
  component: EditRoadOutlined,
  tags: ['autodocs'],
  title: 'maps/EditRoadOutlined',
};

export default meta;
type Story = StoryObj<typeof EditRoadOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
