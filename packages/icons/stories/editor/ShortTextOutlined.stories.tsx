import type { Meta, StoryObj } from '@storybook/react';

import ShortTextOutlined from '../../lib/editor/ShortTextOutlined';

const meta: Meta<typeof ShortTextOutlined> = {
  component: ShortTextOutlined,
  tags: ['autodocs'],
  title: 'editor/ShortTextOutlined',
};

export default meta;
type Story = StoryObj<typeof ShortTextOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
