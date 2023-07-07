import type { Meta, StoryObj } from '@storybook/react';

import Diversity1Outlined from '../../lib/social/Diversity1Outlined';

const meta: Meta<typeof Diversity1Outlined> = {
  component: Diversity1Outlined,
  tags: ['autodocs'],
  title: 'social/Diversity1Outlined',
};

export default meta;
type Story = StoryObj<typeof Diversity1Outlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
