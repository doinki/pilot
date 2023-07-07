import type { Meta, StoryObj } from '@storybook/react';

import RollerSkatingOutlined from '../../lib/social/RollerSkatingOutlined';

const meta: Meta<typeof RollerSkatingOutlined> = {
  component: RollerSkatingOutlined,
  tags: ['autodocs'],
  title: 'social/RollerSkatingOutlined',
};

export default meta;
type Story = StoryObj<typeof RollerSkatingOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
