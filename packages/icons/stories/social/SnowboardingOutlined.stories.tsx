import type { Meta, StoryObj } from '@storybook/react';

import SnowboardingOutlined from '../../lib/social/SnowboardingOutlined';

const meta: Meta<typeof SnowboardingOutlined> = {
  component: SnowboardingOutlined,
  tags: ['autodocs'],
  title: 'social/SnowboardingOutlined',
};

export default meta;
type Story = StoryObj<typeof SnowboardingOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
