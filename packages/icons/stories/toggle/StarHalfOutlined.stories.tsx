import type { Meta, StoryObj } from '@storybook/react';

import StarHalfOutlined from '../../lib/toggle/StarHalfOutlined';

const meta: Meta<typeof StarHalfOutlined> = {
  component: StarHalfOutlined,
  tags: ['autodocs'],
  title: 'toggle/StarHalfOutlined',
};

export default meta;
type Story = StoryObj<typeof StarHalfOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
