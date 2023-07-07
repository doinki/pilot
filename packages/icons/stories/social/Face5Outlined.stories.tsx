import type { Meta, StoryObj } from '@storybook/react';

import Face5Outlined from '../../lib/social/Face5Outlined';

const meta: Meta<typeof Face5Outlined> = {
  component: Face5Outlined,
  tags: ['autodocs'],
  title: 'social/Face5Outlined',
};

export default meta;
type Story = StoryObj<typeof Face5Outlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
