import type { Meta, StoryObj } from '@storybook/react';

import EcoOutlined from '../../lib/action/EcoOutlined';

const meta: Meta<typeof EcoOutlined> = {
  component: EcoOutlined,
  tags: ['autodocs'],
  title: 'action/EcoOutlined',
};

export default meta;
type Story = StoryObj<typeof EcoOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
