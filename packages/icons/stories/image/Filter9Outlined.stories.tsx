import type { Meta, StoryObj } from '@storybook/react';

import Filter9Outlined from '../../lib/image/Filter9Outlined';

const meta: Meta<typeof Filter9Outlined> = {
  component: Filter9Outlined,
  tags: ['autodocs'],
  title: 'image/Filter9Outlined',
};

export default meta;
type Story = StoryObj<typeof Filter9Outlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
