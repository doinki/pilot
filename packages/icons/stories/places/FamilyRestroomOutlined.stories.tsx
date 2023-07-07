import type { Meta, StoryObj } from '@storybook/react';

import FamilyRestroomOutlined from '../../lib/places/FamilyRestroomOutlined';

const meta: Meta<typeof FamilyRestroomOutlined> = {
  component: FamilyRestroomOutlined,
  tags: ['autodocs'],
  title: 'places/FamilyRestroomOutlined',
};

export default meta;
type Story = StoryObj<typeof FamilyRestroomOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
