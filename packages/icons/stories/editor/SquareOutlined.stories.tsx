import type { Meta, StoryObj } from '@storybook/react';

import SquareOutlined from '../../lib/editor/SquareOutlined';

const meta: Meta<typeof SquareOutlined> = {
  component: SquareOutlined,
  tags: ['autodocs'],
  title: 'editor/SquareOutlined',
};

export default meta;
type Story = StoryObj<typeof SquareOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
