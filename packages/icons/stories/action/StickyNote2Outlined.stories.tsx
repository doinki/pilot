import type { Meta, StoryObj } from '@storybook/react';

import StickyNote2Outlined from '../../lib/action/StickyNote2Outlined';

const meta: Meta<typeof StickyNote2Outlined> = {
  component: StickyNote2Outlined,
  tags: ['autodocs'],
  title: 'action/StickyNote2Outlined',
};

export default meta;
type Story = StoryObj<typeof StickyNote2Outlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
