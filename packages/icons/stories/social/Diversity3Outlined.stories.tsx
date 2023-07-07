import type { Meta, StoryObj } from '@storybook/react';

import Diversity3Outlined from '../../lib/social/Diversity3Outlined';

const meta: Meta<typeof Diversity3Outlined> = {
  component: Diversity3Outlined,
  tags: ['autodocs'],
  title: 'social/Diversity3Outlined',
};

export default meta;
type Story = StoryObj<typeof Diversity3Outlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
