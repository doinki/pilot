import type { Meta, StoryObj } from '@storybook/react';

import EggOutlined from '../../lib/maps/EggOutlined';

const meta: Meta<typeof EggOutlined> = {
  component: EggOutlined,
  tags: ['autodocs'],
  title: 'maps/EggOutlined',
};

export default meta;
type Story = StoryObj<typeof EggOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
