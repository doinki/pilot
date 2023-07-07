import type { Meta, StoryObj } from '@storybook/react';

import CycloneOutlined from '../../lib/social/CycloneOutlined';

const meta: Meta<typeof CycloneOutlined> = {
  component: CycloneOutlined,
  tags: ['autodocs'],
  title: 'social/CycloneOutlined',
};

export default meta;
type Story = StoryObj<typeof CycloneOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
