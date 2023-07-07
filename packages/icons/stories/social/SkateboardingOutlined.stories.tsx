import type { Meta, StoryObj } from '@storybook/react';

import SkateboardingOutlined from '../../lib/social/SkateboardingOutlined';

const meta: Meta<typeof SkateboardingOutlined> = {
  component: SkateboardingOutlined,
  tags: ['autodocs'],
  title: 'social/SkateboardingOutlined',
};

export default meta;
type Story = StoryObj<typeof SkateboardingOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
