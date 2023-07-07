import type { Meta, StoryObj } from '@storybook/react';

import Filter8Outlined from '../../lib/image/Filter8Outlined';

const meta: Meta<typeof Filter8Outlined> = {
  component: Filter8Outlined,
  tags: ['autodocs'],
  title: 'image/Filter8Outlined',
};

export default meta;
type Story = StoryObj<typeof Filter8Outlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
