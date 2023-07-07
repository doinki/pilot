import type { Meta, StoryObj } from '@storybook/react';

import RamenDiningOutlined from '../../lib/maps/RamenDiningOutlined';

const meta: Meta<typeof RamenDiningOutlined> = {
  component: RamenDiningOutlined,
  tags: ['autodocs'],
  title: 'maps/RamenDiningOutlined',
};

export default meta;
type Story = StoryObj<typeof RamenDiningOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
