import type { Meta, StoryObj } from '@storybook/react';

import Filter5Outlined from '../../lib/image/Filter5Outlined';

const meta: Meta<typeof Filter5Outlined> = {
  component: Filter5Outlined,
  tags: ['autodocs'],
  title: 'image/Filter5Outlined',
};

export default meta;
type Story = StoryObj<typeof Filter5Outlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
