import type { Meta, StoryObj } from '@storybook/react';

import Inventory2Outlined from '../../lib/content/Inventory2Outlined';

const meta: Meta<typeof Inventory2Outlined> = {
  component: Inventory2Outlined,
  tags: ['autodocs'],
  title: 'content/Inventory2Outlined',
};

export default meta;
type Story = StoryObj<typeof Inventory2Outlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
