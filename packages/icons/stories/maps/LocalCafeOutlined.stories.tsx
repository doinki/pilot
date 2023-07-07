import type { Meta, StoryObj } from '@storybook/react';

import LocalCafeOutlined from '../../lib/maps/LocalCafeOutlined';

const meta: Meta<typeof LocalCafeOutlined> = {
  component: LocalCafeOutlined,
  tags: ['autodocs'],
  title: 'maps/LocalCafeOutlined',
};

export default meta;
type Story = StoryObj<typeof LocalCafeOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
