import type { Meta, StoryObj } from '@storybook/react';

import DiamondOutlined from '../../lib/maps/DiamondOutlined';

const meta: Meta<typeof DiamondOutlined> = {
  component: DiamondOutlined,
  tags: ['autodocs'],
  title: 'maps/DiamondOutlined',
};

export default meta;
type Story = StoryObj<typeof DiamondOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
