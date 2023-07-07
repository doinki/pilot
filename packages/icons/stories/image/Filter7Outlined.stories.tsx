import type { Meta, StoryObj } from '@storybook/react';

import Filter7Outlined from '../../lib/image/Filter7Outlined';

const meta: Meta<typeof Filter7Outlined> = {
  component: Filter7Outlined,
  tags: ['autodocs'],
  title: 'image/Filter7Outlined',
};

export default meta;
type Story = StoryObj<typeof Filter7Outlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
