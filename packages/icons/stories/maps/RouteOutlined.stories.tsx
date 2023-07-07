import type { Meta, StoryObj } from '@storybook/react';

import RouteOutlined from '../../lib/maps/RouteOutlined';

const meta: Meta<typeof RouteOutlined> = {
  component: RouteOutlined,
  tags: ['autodocs'],
  title: 'maps/RouteOutlined',
};

export default meta;
type Story = StoryObj<typeof RouteOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
