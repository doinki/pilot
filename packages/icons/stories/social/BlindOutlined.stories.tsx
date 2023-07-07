import type { Meta, StoryObj } from '@storybook/react';

import BlindOutlined from '../../lib/social/BlindOutlined';

const meta: Meta<typeof BlindOutlined> = {
  component: BlindOutlined,
  tags: ['autodocs'],
  title: 'social/BlindOutlined',
};

export default meta;
type Story = StoryObj<typeof BlindOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
