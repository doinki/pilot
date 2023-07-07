import type { Meta, StoryObj } from '@storybook/react';

import ModeEditOutlineOutlined from '../../lib/editor/ModeEditOutlineOutlined';

const meta: Meta<typeof ModeEditOutlineOutlined> = {
  component: ModeEditOutlineOutlined,
  tags: ['autodocs'],
  title: 'editor/ModeEditOutlineOutlined',
};

export default meta;
type Story = StoryObj<typeof ModeEditOutlineOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
