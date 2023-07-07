import type { Meta, StoryObj } from '@storybook/react';

import ParaglidingOutlined from '../../lib/social/ParaglidingOutlined';

const meta: Meta<typeof ParaglidingOutlined> = {
  component: ParaglidingOutlined,
  tags: ['autodocs'],
  title: 'social/ParaglidingOutlined',
};

export default meta;
type Story = StoryObj<typeof ParaglidingOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
