import type { Meta, StoryObj } from '@storybook/react';

import Filter6Outlined from '../../lib/image/Filter6Outlined';

const meta: Meta<typeof Filter6Outlined> = {
  component: Filter6Outlined,
  tags: ['autodocs'],
  title: 'image/Filter6Outlined',
};

export default meta;
type Story = StoryObj<typeof Filter6Outlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
