import type { Meta, StoryObj } from '@storybook/react';

import PoolOutlined from '../../lib/places/PoolOutlined';

const meta: Meta<typeof PoolOutlined> = {
  component: PoolOutlined,
  tags: ['autodocs'],
  title: 'places/PoolOutlined',
};

export default meta;
type Story = StoryObj<typeof PoolOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
