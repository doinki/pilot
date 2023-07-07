import type { Meta, StoryObj } from '@storybook/react';

import StarPurple500Outlined from '../../lib/toggle/StarPurple500Outlined';

const meta: Meta<typeof StarPurple500Outlined> = {
  component: StarPurple500Outlined,
  tags: ['autodocs'],
  title: 'toggle/StarPurple500Outlined',
};

export default meta;
type Story = StoryObj<typeof StarPurple500Outlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
