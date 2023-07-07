import type { Meta, StoryObj } from '@storybook/react';

import ModeEditOutlined from '../../lib/editor/ModeEditOutlined';

const meta: Meta<typeof ModeEditOutlined> = {
  component: ModeEditOutlined,
  tags: ['autodocs'],
  title: 'editor/ModeEditOutlined',
};

export default meta;
type Story = StoryObj<typeof ModeEditOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
