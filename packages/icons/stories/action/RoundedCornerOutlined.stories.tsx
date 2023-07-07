import type { Meta, StoryObj } from '@storybook/react';

import RoundedCornerOutlined from '../../lib/action/RoundedCornerOutlined';

const meta: Meta<typeof RoundedCornerOutlined> = {
  component: RoundedCornerOutlined,
  tags: ['autodocs'],
  title: 'action/RoundedCornerOutlined',
};

export default meta;
type Story = StoryObj<typeof RoundedCornerOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
