import type { Meta, StoryObj } from '@storybook/react';

import ScubaDivingOutlined from '../../lib/social/ScubaDivingOutlined';

const meta: Meta<typeof ScubaDivingOutlined> = {
  component: ScubaDivingOutlined,
  tags: ['autodocs'],
  title: 'social/ScubaDivingOutlined',
};

export default meta;
type Story = StoryObj<typeof ScubaDivingOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
