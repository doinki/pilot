import type { Meta, StoryObj } from '@storybook/react';

import InterestsOutlined from '../../lib/social/InterestsOutlined';

const meta: Meta<typeof InterestsOutlined> = {
  component: InterestsOutlined,
  tags: ['autodocs'],
  title: 'social/InterestsOutlined',
};

export default meta;
type Story = StoryObj<typeof InterestsOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
