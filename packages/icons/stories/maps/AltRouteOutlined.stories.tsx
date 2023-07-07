import type { Meta, StoryObj } from '@storybook/react';

import AltRouteOutlined from '../../lib/maps/AltRouteOutlined';

const meta: Meta<typeof AltRouteOutlined> = {
  component: AltRouteOutlined,
  tags: ['autodocs'],
  title: 'maps/AltRouteOutlined',
};

export default meta;
type Story = StoryObj<typeof AltRouteOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
