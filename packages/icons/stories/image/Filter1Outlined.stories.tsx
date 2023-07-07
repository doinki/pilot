import type { Meta, StoryObj } from '@storybook/react';

import Filter1Outlined from '../../lib/image/Filter1Outlined';

const meta: Meta<typeof Filter1Outlined> = {
  component: Filter1Outlined,
  tags: ['autodocs'],
  title: 'image/Filter1Outlined',
};

export default meta;
type Story = StoryObj<typeof Filter1Outlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
