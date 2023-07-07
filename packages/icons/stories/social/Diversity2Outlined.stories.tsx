import type { Meta, StoryObj } from '@storybook/react';

import Diversity2Outlined from '../../lib/social/Diversity2Outlined';

const meta: Meta<typeof Diversity2Outlined> = {
  component: Diversity2Outlined,
  tags: ['autodocs'],
  title: 'social/Diversity2Outlined',
};

export default meta;
type Story = StoryObj<typeof Diversity2Outlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
