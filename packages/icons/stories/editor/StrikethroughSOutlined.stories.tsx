import type { Meta, StoryObj } from '@storybook/react';

import StrikethroughSOutlined from '../../lib/editor/StrikethroughSOutlined';

const meta: Meta<typeof StrikethroughSOutlined> = {
  component: StrikethroughSOutlined,
  tags: ['autodocs'],
  title: 'editor/StrikethroughSOutlined',
};

export default meta;
type Story = StoryObj<typeof StrikethroughSOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
