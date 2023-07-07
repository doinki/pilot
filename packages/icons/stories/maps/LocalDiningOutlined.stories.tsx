import type { Meta, StoryObj } from '@storybook/react';

import LocalDiningOutlined from '../../lib/maps/LocalDiningOutlined';

const meta: Meta<typeof LocalDiningOutlined> = {
  component: LocalDiningOutlined,
  tags: ['autodocs'],
  title: 'maps/LocalDiningOutlined',
};

export default meta;
type Story = StoryObj<typeof LocalDiningOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
