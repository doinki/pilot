import type { Meta, StoryObj } from '@storybook/react';

import ModeOutlined from '../../lib/editor/ModeOutlined';

const meta: Meta<typeof ModeOutlined> = {
  component: ModeOutlined,
  tags: ['autodocs'],
  title: 'editor/ModeOutlined',
};

export default meta;
type Story = StoryObj<typeof ModeOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
