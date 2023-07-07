import type { Meta, StoryObj } from '@storybook/react';

import PolylineOutlined from '../../lib/editor/PolylineOutlined';

const meta: Meta<typeof PolylineOutlined> = {
  component: PolylineOutlined,
  tags: ['autodocs'],
  title: 'editor/PolylineOutlined',
};

export default meta;
type Story = StoryObj<typeof PolylineOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
