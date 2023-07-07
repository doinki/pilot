import type { Meta, StoryObj } from '@storybook/react';

import ZoomOutMapOutlined from '../../lib/maps/ZoomOutMapOutlined';

const meta: Meta<typeof ZoomOutMapOutlined> = {
  component: ZoomOutMapOutlined,
  tags: ['autodocs'],
  title: 'maps/ZoomOutMapOutlined',
};

export default meta;
type Story = StoryObj<typeof ZoomOutMapOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
