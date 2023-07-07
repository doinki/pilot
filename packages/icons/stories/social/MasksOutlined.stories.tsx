import type { Meta, StoryObj } from '@storybook/react';

import MasksOutlined from '../../lib/social/MasksOutlined';

const meta: Meta<typeof MasksOutlined> = {
  component: MasksOutlined,
  tags: ['autodocs'],
  title: 'social/MasksOutlined',
};

export default meta;
type Story = StoryObj<typeof MasksOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
