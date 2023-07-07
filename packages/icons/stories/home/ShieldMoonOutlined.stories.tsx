import type { Meta, StoryObj } from '@storybook/react';

import ShieldMoonOutlined from '../../lib/home/ShieldMoonOutlined';

const meta: Meta<typeof ShieldMoonOutlined> = {
  component: ShieldMoonOutlined,
  tags: ['autodocs'],
  title: 'home/ShieldMoonOutlined',
};

export default meta;
type Story = StoryObj<typeof ShieldMoonOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
