import type { Meta, StoryObj } from '@storybook/react';

import LocalFloristOutlined from '../../lib/maps/LocalFloristOutlined';

const meta: Meta<typeof LocalFloristOutlined> = {
  component: LocalFloristOutlined,
  tags: ['autodocs'],
  title: 'maps/LocalFloristOutlined',
};

export default meta;
type Story = StoryObj<typeof LocalFloristOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
