import type { Meta, StoryObj } from '@storybook/react';

import Shop2Outlined from '../../lib/action/Shop2Outlined';

const meta: Meta<typeof Shop2Outlined> = {
  component: Shop2Outlined,
  tags: ['autodocs'],
  title: 'action/Shop2Outlined',
};

export default meta;
type Story = StoryObj<typeof Shop2Outlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
