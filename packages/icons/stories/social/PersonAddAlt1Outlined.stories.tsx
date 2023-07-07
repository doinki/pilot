import type { Meta, StoryObj } from '@storybook/react';

import PersonAddAlt1Outlined from '../../lib/social/PersonAddAlt1Outlined';

const meta: Meta<typeof PersonAddAlt1Outlined> = {
  component: PersonAddAlt1Outlined,
  tags: ['autodocs'],
  title: 'social/PersonAddAlt1Outlined',
};

export default meta;
type Story = StoryObj<typeof PersonAddAlt1Outlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
