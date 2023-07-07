import type { Meta, StoryObj } from '@storybook/react';

import HexagonOutlined from '../../lib/editor/HexagonOutlined';

const meta: Meta<typeof HexagonOutlined> = {
  component: HexagonOutlined,
  tags: ['autodocs'],
  title: 'editor/HexagonOutlined',
};

export default meta;
type Story = StoryObj<typeof HexagonOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
