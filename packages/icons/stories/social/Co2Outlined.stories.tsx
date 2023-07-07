import type { Meta, StoryObj } from '@storybook/react';

import Co2Outlined from '../../lib/social/Co2Outlined';

const meta: Meta<typeof Co2Outlined> = {
  component: Co2Outlined,
  tags: ['autodocs'],
  title: 'social/Co2Outlined',
};

export default meta;
type Story = StoryObj<typeof Co2Outlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
