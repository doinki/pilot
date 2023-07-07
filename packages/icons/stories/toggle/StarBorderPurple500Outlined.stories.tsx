import type { Meta, StoryObj } from '@storybook/react';

import StarBorderPurple500Outlined from '../../lib/toggle/StarBorderPurple500Outlined';

const meta: Meta<typeof StarBorderPurple500Outlined> = {
  component: StarBorderPurple500Outlined,
  tags: ['autodocs'],
  title: 'toggle/StarBorderPurple500Outlined',
};

export default meta;
type Story = StoryObj<typeof StarBorderPurple500Outlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
