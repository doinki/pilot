import type { Meta, StoryObj } from '@storybook/react';

import SmartButtonOutlined from '../../lib/action/SmartButtonOutlined';

const meta: Meta<typeof SmartButtonOutlined> = {
  component: SmartButtonOutlined,
  tags: ['autodocs'],
  title: 'action/SmartButtonOutlined',
};

export default meta;
type Story = StoryObj<typeof SmartButtonOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
