import type { Meta, StoryObj } from '@storybook/react';

import CakeOutlined from '../../lib/social/CakeOutlined';

const meta: Meta<typeof CakeOutlined> = {
  component: CakeOutlined,
  tags: ['autodocs'],
  title: 'social/CakeOutlined',
};

export default meta;
type Story = StoryObj<typeof CakeOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
