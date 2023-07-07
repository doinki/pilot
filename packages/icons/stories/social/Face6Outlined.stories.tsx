import type { Meta, StoryObj } from '@storybook/react';

import Face6Outlined from '../../lib/social/Face6Outlined';

const meta: Meta<typeof Face6Outlined> = {
  component: Face6Outlined,
  tags: ['autodocs'],
  title: 'social/Face6Outlined',
};

export default meta;
type Story = StoryObj<typeof Face6Outlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
