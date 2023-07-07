import type { Meta, StoryObj } from '@storybook/react';

import ZoomInMapOutlined from '../../lib/maps/ZoomInMapOutlined';

const meta: Meta<typeof ZoomInMapOutlined> = {
  component: ZoomInMapOutlined,
  tags: ['autodocs'],
  title: 'maps/ZoomInMapOutlined',
};

export default meta;
type Story = StoryObj<typeof ZoomInMapOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
