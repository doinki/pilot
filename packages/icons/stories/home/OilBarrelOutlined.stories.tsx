import type { Meta, StoryObj } from '@storybook/react';

import OilBarrelOutlined from '../../lib/home/OilBarrelOutlined';

const meta: Meta<typeof OilBarrelOutlined> = {
  component: OilBarrelOutlined,
  tags: ['autodocs'],
  title: 'home/OilBarrelOutlined',
};

export default meta;
type Story = StoryObj<typeof OilBarrelOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
