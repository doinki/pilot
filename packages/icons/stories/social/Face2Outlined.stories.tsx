import type { Meta, StoryObj } from '@storybook/react';

import Face2Outlined from '../../lib/social/Face2Outlined';

const meta: Meta<typeof Face2Outlined> = {
  component: Face2Outlined,
  tags: ['autodocs'],
  title: 'social/Face2Outlined',
};

export default meta;
type Story = StoryObj<typeof Face2Outlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
