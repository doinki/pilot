import type { Meta, StoryObj } from '@storybook/react';

import BrunchDiningOutlined from '../../lib/maps/BrunchDiningOutlined';

const meta: Meta<typeof BrunchDiningOutlined> = {
  component: BrunchDiningOutlined,
  tags: ['autodocs'],
  title: 'maps/BrunchDiningOutlined',
};

export default meta;
type Story = StoryObj<typeof BrunchDiningOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
