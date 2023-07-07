import type { Meta, StoryObj } from '@storybook/react';

import ShieldOutlined from '../../lib/content/ShieldOutlined';

const meta: Meta<typeof ShieldOutlined> = {
  component: ShieldOutlined,
  tags: ['autodocs'],
  title: 'content/ShieldOutlined',
};

export default meta;
type Story = StoryObj<typeof ShieldOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
