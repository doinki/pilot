import type { Meta, StoryObj } from '@storybook/react';

import EggAltOutlined from '../../lib/maps/EggAltOutlined';

const meta: Meta<typeof EggAltOutlined> = {
  component: EggAltOutlined,
  tags: ['autodocs'],
  title: 'maps/EggAltOutlined',
};

export default meta;
type Story = StoryObj<typeof EggAltOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
