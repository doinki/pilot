import type { Meta, StoryObj } from '@storybook/react';

import Person4Outlined from '../../lib/social/Person4Outlined';

const meta: Meta<typeof Person4Outlined> = {
  component: Person4Outlined,
  tags: ['autodocs'],
  title: 'social/Person4Outlined',
};

export default meta;
type Story = StoryObj<typeof Person4Outlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
