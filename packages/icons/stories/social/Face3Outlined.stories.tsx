import type { Meta, StoryObj } from '@storybook/react';

import Face3Outlined from '../../lib/social/Face3Outlined';

const meta: Meta<typeof Face3Outlined> = {
  component: Face3Outlined,
  tags: ['autodocs'],
  title: 'social/Face3Outlined',
};

export default meta;
type Story = StoryObj<typeof Face3Outlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
