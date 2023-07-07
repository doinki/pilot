import type { Meta, StoryObj } from '@storybook/react';

import LivingOutlined from '../../lib/search/LivingOutlined';

const meta: Meta<typeof LivingOutlined> = {
  component: LivingOutlined,
  tags: ['autodocs'],
  title: 'search/LivingOutlined',
};

export default meta;
type Story = StoryObj<typeof LivingOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
