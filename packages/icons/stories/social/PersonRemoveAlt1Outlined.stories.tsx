import type { Meta, StoryObj } from '@storybook/react';

import PersonRemoveAlt1Outlined from '../../lib/social/PersonRemoveAlt1Outlined';

const meta: Meta<typeof PersonRemoveAlt1Outlined> = {
  component: PersonRemoveAlt1Outlined,
  tags: ['autodocs'],
  title: 'social/PersonRemoveAlt1Outlined',
};

export default meta;
type Story = StoryObj<typeof PersonRemoveAlt1Outlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
