import type { Meta, StoryObj } from '@storybook/react';

import Groups2Outlined from '../../lib/social/Groups2Outlined';

const meta: Meta<typeof Groups2Outlined> = {
  component: Groups2Outlined,
  tags: ['autodocs'],
  title: 'social/Groups2Outlined',
};

export default meta;
type Story = StoryObj<typeof Groups2Outlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
