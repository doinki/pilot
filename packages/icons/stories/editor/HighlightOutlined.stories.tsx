import type { Meta, StoryObj } from '@storybook/react';

import HighlightOutlined from '../../lib/editor/HighlightOutlined';

const meta: Meta<typeof HighlightOutlined> = {
  component: HighlightOutlined,
  tags: ['autodocs'],
  title: 'editor/HighlightOutlined',
};

export default meta;
type Story = StoryObj<typeof HighlightOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
